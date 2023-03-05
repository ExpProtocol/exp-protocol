import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { useContractAddresses } from "./useContractAddresses";

export const useClaim = (lendId: string) => {
    const Contract = useContractAddresses();
    const { config: claimConfig, refetch } = usePrepareContractWrite({
        address: Contract.MARKET,
        abi: LIME_ABI,
        functionName: "claim",
        args: [lendId],
    });

    const { writeAsync: claim } = useContractWrite(claimConfig);
    return { claim, refetch };
};
