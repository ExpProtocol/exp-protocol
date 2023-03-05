import { BigNumber } from "ethers";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import { erc721ABI } from "wagmi";
import { useContractAddresses } from "./useContractAddresses";

export const useNFTapprove = (
    cAddr: string | undefined,
    tokenId: string | undefined
) => {
    const Contract = useContractAddresses();
    const { data: approveFor } = useContractRead({
        address: cAddr as `0x${string}`,
        abi: erc721ABI,
        functionName: "getApproved",
        args: [BigNumber.from(tokenId || "0")],
        enabled: Boolean(cAddr && tokenId),
    });
    const { config: lendConfig } = usePrepareContractWrite({
        address: cAddr as `0x${string}`,
        abi: erc721ABI,
        functionName: "approve",
        args: [
            Contract.MARKET as `0x${string}`,
            BigNumber.from(tokenId || "0"),
        ],
        enabled: Boolean(cAddr && tokenId),
    });

    const isApproved = approveFor === Contract.MARKET;
    const { writeAsync: approve, isLoading } = useContractWrite(lendConfig);
    return { approve, isApproved, isLoading };
};
