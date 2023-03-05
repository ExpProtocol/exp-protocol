import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";

export const useRent = (lendId: string) => {
    const { config: rentConfig, refetch } = usePrepareContractWrite({
        address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
        abi: LIME_ABI,
        functionName: "rent",
        args: [BigNumber.from(lendId || "0")],
        enabled: Boolean(lendId),
    });

    const { writeAsync: rent } = useContractWrite(rentConfig);
    return { rent, refetch };
};
