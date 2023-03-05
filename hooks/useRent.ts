import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { useContractAddresses } from "./useContractAddresses";

export const useRent = (lendId: string) => {
    const Contract = useContractAddresses();
    console.log(Contract);
    const { config: rentConfig, refetch } = usePrepareContractWrite({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: "rent",
        args: [lendId],
    });

    const { writeAsync: rent } = useContractWrite(rentConfig);
    return { rent, refetch };
};
