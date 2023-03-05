import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { useContractAddresses } from "./useContractAddresses";

export const useTokenReturn = (lendId: string) => {
    const Contract = useContractAddresses();
    const { config: returnTokenConfig, refetch } = usePrepareContractWrite({
        address: Contract.MARKET,
        abi: LIME_ABI,
        functionName: "returnToken",
        args: [lendId],
    });

    const { writeAsync: returnToken } = useContractWrite(returnTokenConfig);
    return { returnToken, refetch };
};
