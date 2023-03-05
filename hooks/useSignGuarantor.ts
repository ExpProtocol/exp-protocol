import { useRouter } from "next/router";
import { useContractAddresses } from "../hooks/useContractAddresses";
import {
    useAccount,
    useChainId,
    useContractReads,
    useSignTypedData,
} from "wagmi";
import { BigNumber } from "ethers";
import LIME_ABI from "../models/LIME_ABI";
import { PaymentUtils } from "../utils/paymentUtil";
import { usePaymentFromAddress } from "./usePaymentFromAddress";

export const useSignGuarantor = (
    lendId: string,
    renter: `0x${string}`,
    guarantorBalance: string,
    guarantorFee: string
) => {
    const account = useAccount();
    const { data } = useContractReads({
        contracts: [
            {
                abi: LIME_ABI,
                functionName: "usedNonces",
                args: [account.address as `0x${string}`],
            },
            {
                abi: LIME_ABI,
                functionName: "lendCondition",
                args: [BigNumber.from(0)],
            },
        ],
        enabled: Boolean(account.address && lendId),
    });

    const payment = usePaymentFromAddress(data && data[1].payment);

    const Contract = useContractAddresses();
    const chainId = useChainId();
    const { data: signature, signTypedDataAsync } = useSignTypedData({
        domain: {
            chainId,
            verifyingContract: Contract?.MARKET,
            name: "EXP-Market",
            version: "1",
        },
        types: {
            GuarantorRequest: [
                { type: "uint96", name: "lendId" },
                { type: "address", name: "renter" },
                { type: "uint120", name: "guarantorBalance" },
                { type: "uint16", name: "guarantorFee" },
                { type: "uint24", name: "nonce" },
            ],
        },
        value: {
            lendId: BigNumber.from(0),
            renter: renter as `0x${string}`,
            guarantorBalance: PaymentUtils.parse(payment, guarantorBalance),
            guarantorFee: Math.ceil(100 / Number(guarantorFee)),
            nonce: (data && data[0] && data[0] + 1) || 1,
        },
    });

    return {
        signature,
        signTypedDataAsync,
    };
};
