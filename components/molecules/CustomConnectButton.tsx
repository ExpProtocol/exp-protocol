import { ConnectButton } from "@rainbow-me/rainbowkit";

export const CustomConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === "authenticated");

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        className="text-white text-sm px-4 py-2 bg-[#3EA8FF] rounded-lg drop-shadow-md"
                                    >
                                        Connect Wallet
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                        className="text-white text-sm px-4 py-2 bg-[#3EA8FF] rounded-lg drop-shadow-md"
                                    >
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: "flex", gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        className=" text-sm w-9 h-9 flex justify-center items-center bg-white rounded-full text-gray-800 logo-shadow"
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background:
                                                        chain.iconBackground,
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={
                                                            chain.name ??
                                                            "Chain icon"
                                                        }
                                                        src={chain.iconUrl}
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {/* {chain.name} */}
                                    </button>

                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                        className="text-white text-sm px-4 py-2 bg-[#3EA8FF] rounded-lg drop-shadow-md"
                                    >
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
