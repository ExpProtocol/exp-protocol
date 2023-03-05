import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";

export const useRentWithGuarantor = (
    lendId: string,
    guarantor: string,
    guarantorBalance: string,
    guarantorFee: string,
    signature: string
) => {
    const { config: rentWithGuarantorConfig, refetch } =
        usePrepareContractWrite({
            address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
            abi: LIME_ABI,
            functionName: "rentWithGuarantor",
            args: [
                BigNumber.from(lendId || "0"),
                guarantor,
                BigNumber.from(guarantorBalance || "0"),
                Number(guarantorFee),
                signature as `0x${string}`,
            ],
        });

    const { writeAsync: rentWithGuarantor } = useContractWrite(
        rentWithGuarantorConfig
    );
    return { rentWithGuarantor, refetch };
};
