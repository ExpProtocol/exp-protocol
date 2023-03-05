import Layout from "../components/Layout";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorToast } from "../components/ErrorToast";
import { ToastContainer } from "react-toastify";

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

const { chains, provider } = configureChains(
    [mainnet, polygon, goerli, polygonMumbai],
    [alchemyProvider({ apiKey: ALCHEMY_API_KEY })]
);

const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
});

const queryClient = new QueryClient();

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    queryClient,
});

function MyApp({ Component, pageProps }: any) {
    return (
        <ErrorBoundary FallbackComponent={ErrorToast}>
            <WagmiConfig client={wagmiClient}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider chains={chains}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        <ToastContainer />
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiConfig>
        </ErrorBoundary>
    );
}

export default MyApp;
