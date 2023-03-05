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
import { useApprove } from "./useApprove";
import { error } from "../utils/error";

export const useSignGuarantor = (
    lendId: string,
    renter: `0x${string}`,
    guarantorBalance: string,
    guarantorFee: string
) => {
    const Contract = useContractAddresses();
    const account = useAccount();
    const { data, ...other } = useContractReads({
        contracts: [
            {
                abi: LIME_ABI,
                address: Contract?.MARKET,
                functionName: "usedNonces",
                args: [account.address as `0x${string}`],
            },
            {
                abi: LIME_ABI,
                address: Contract?.MARKET,
                functionName: "lendCondition",
                args: [BigNumber.from(lendId || 0)],
            },
        ],
        //enabled: Boolean(account.address && lendId),
    });

    const payment = usePaymentFromAddress(data && data[1].payment);

    const chainId = useChainId();
    const value = {
        lendId: BigNumber.from(lendId || 0),
        renter: renter as `0x${string}`,
        guarantorBalance: PaymentUtils.parse(payment, guarantorBalance),
        guarantorFee: Math.ceil(100 / Number(guarantorFee)),
        nonce: (data && data[0] && data[0] + 1) || 1,
    };

    const { approve } = useApprove(payment, value.guarantorBalance.toString());

    const { data: signature, signTypedDataAsync: _signTypedDataAsync } =
        useSignTypedData({
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
            value,
        });

    const signTypedDataAsync = () => _signTypedDataAsync?.().catch(error);

    return {
        signature,
        signTypedDataAsync,
        approve,
        value,
    };
};
