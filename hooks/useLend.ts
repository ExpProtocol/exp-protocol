import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";
import { PaymentToken } from "../types/Payment";
import { PaymentUtils } from "../utils/paymentUtil";
import { useContractAddresses } from "./useContractAddresses";

export const useLend = (
    collectionAddress: string | undefined,
    tokenId: string | undefined,
    payment: PaymentToken | undefined,
    pricePerSec: string | undefined,
    collateralPrice: string | undefined,
    autoReRegister: boolean
) => {
    const Contract = useContractAddresses();
    const { config: lendConfig, refetch } = usePrepareContractWrite({
        address: Contract.MARKET,
        abi: LIME_ABI,
        functionName: "lend721",
        args: [
            collectionAddress as `0x${string}`,
            BigNumber.from(tokenId || "0"),
            payment?.address as `0x${string}`,
            PaymentUtils.parse(payment, pricePerSec).div(86400),
            PaymentUtils.parse(payment, collateralPrice),
            autoReRegister,
        ],
        enabled: Boolean(
            collectionAddress &&
                tokenId &&
                pricePerSec &&
                collateralPrice &&
                payment
        ),
    });

    const { writeAsync: lend } = useContractWrite(lendConfig);
    return { lend, refetch };
};
