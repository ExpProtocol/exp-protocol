import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";
import { error } from "../utils/error";
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
            address: Contract?.MARKET,
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

    const { writeAsync: _rentWithGuarantor } = useContractWrite(
        rentWithGuarantorConfig
    );
    const rentWithGuarantor = () => _rentWithGuarantor?.().catch(error);
    return { rentWithGuarantor, refetch };
};
