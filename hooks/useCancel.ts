import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { error } from "../utils/error";
import { useContractAddresses } from "./useContractAddresses";

export const useCancel = (lendId: string) => {
    const Contract = useContractAddresses();
    const { config: claimConfig, refetch } = usePrepareContractWrite({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: "cancelLend",
        args: [lendId],
        // onError: error,
    });

    const { writeAsync: cancel } = useContractWrite(claimConfig);
    return { cancel, refetch };
};
