import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";
import { PaymentToken } from "../types/Payment";
import { error } from "../utils/error";
import { PaymentUtils } from "../utils/paymentUtil";
import { useContractAddresses } from "./useContractAddresses";

export const useLend = (
    collectionAddress: string | undefined,
    tokenId: string | undefined,
    tokenType: string | undefined,
    payment: PaymentToken | undefined,
    pricePerSec: string | undefined,
    collateralPrice: string | undefined,
    autoReRegister: boolean
) => {
    const Contract = useContractAddresses();
    let functionName:any = "lend721";
    let args:any = [
        collectionAddress as `0x${string}`,
        BigNumber.from(tokenId || "0"),
        payment?.address as `0x${string}`,
        PaymentUtils.parse(payment, pricePerSec).div(86400),
        PaymentUtils.parse(payment, collateralPrice),
        autoReRegister,
    ];
    if (tokenType === "ERC1155") {
        functionName = "lend1155";
        args = [
            collectionAddress as `0x${string}`,
            BigNumber.from(tokenId || "0"),
            BigNumber.from("1"),
            payment?.address as `0x${string}`,
            PaymentUtils.parse(payment, pricePerSec).div(86400),
            PaymentUtils.parse(payment, collateralPrice),
            autoReRegister,
        ];
    }

    const { config: lendConfig, refetch } = usePrepareContractWrite({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: functionName,
        args: args,
        enabled: Boolean(
            collectionAddress &&
                tokenId &&
                pricePerSec &&
                collateralPrice &&
                payment
        ),
    });

    const { writeAsync: _lend } = useContractWrite(lendConfig);
    const lend = () => _lend?.().catch(error);
    return { lend, refetch };
};
