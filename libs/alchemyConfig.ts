import { Alchemy, initializeAlchemy, Network } from "@alch/alchemy-sdk";

const instances = new Map<number, Alchemy>();

export const getAlchemy = (chainId: number) => {
    if (instances.has(chainId)) return instances.get(chainId);
    const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";
    const Chain = {
        1: Network.ETH_MAINNET,
        4: Network.ETH_RINKEBY,
        5: Network.ETH_GOERLI,
        42: Network.ETH_KOVAN,
        137: Network.MATIC_MAINNET,
        80001: Network.MATIC_MUMBAI,
    }[chainId];

    const alchemy = initializeAlchemy({
        apiKey: ALCHEMY_API_KEY,
        network: Chain,
        maxRetries: 10,
    });
    instances.set(chainId, alchemy);
    return alchemy;
};
