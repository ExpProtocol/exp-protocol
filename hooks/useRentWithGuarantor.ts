import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { useContractAddresses } from "./useContractAddresses";

export const useRentWithGuarantor = (
    lendId: string,
    guarantor: string,
    guarantorBalance: string,
    guarantorFee: string,
    signature: string
) => {
    const Contract = useContractAddresses();
    const { config: rentWithGuarantorConfig, refetch } =
        usePrepareContractWrite({
            address: Contract.MARKET,
            abi: LIME_ABI,
            functionName: "rentWithGuarantor",
            args: [
                lendId,
                guarantor,
                guarantorBalance,
                guarantorFee,
                signature,
            ],
        });

    const { writeAsync: rentWithGuarantor } = useContractWrite(
        rentWithGuarantorConfig
    );
    return { rentWithGuarantor, refetch };
};
