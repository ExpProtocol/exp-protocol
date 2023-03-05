import { useContractWrite, usePrepareContractWrite } from "wagmi";

export const useNFTapprove = (
    cAddr: string | undefined,
    tokenId: string | undefined
) => {
    const { config: lendConfig } = usePrepareContractWrite({
        address: cAddr as `0x${string}`,
        abi: [
            "function approve(address to, uint256 tokenId) public virtual override",
        ],
        functionName: "approve",
        args: ["0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6", tokenId],
        enabled: Boolean(cAddr && tokenId),
    });

    const { writeAsync: approve } = useContractWrite(lendConfig);
    return { approve };
};
