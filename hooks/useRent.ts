import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { error } from "../utils/error";
import { useContractAddresses } from "./useContractAddresses";

export const useRent = (lendId: string) => {
    const Contract = useContractAddresses();

    const { config: rentConfig, refetch } = usePrepareContractWrite({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: "rent",
        args: [lendId],
    });

    const { writeAsync: _rent } = useContractWrite(rentConfig);
    const rent = () => _rent?.().catch(error);
    return { rent, refetch };
};
