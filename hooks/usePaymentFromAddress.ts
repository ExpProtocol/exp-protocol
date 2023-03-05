import { erc20ABI, useContractReads } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";
import { PaymentToken } from "../types/Payment";
import { usePayments } from "./usePayments";

export const usePaymentFromAddress = (
    address: string | undefined
): PaymentToken | undefined => {
    const payments = usePayments();
    const tempPayment = payments.find((payment) => payment.address === address);
    const { data } = useContractReads({
        contracts: [
            {
                abi: erc20ABI,
                address: address as `0x${string}`,
                functionName: "name",
            },
            {
                abi: erc20ABI,
                address: address as `0x${string}`,
                functionName: "symbol",
            },
            {
                abi: erc20ABI,
                address: address as `0x${string}`,
                functionName: "decimals",
            },
        ],
        enabled: Boolean(address),
    });

    const payment =
        tempPayment || data
            ? {
                  address: address as `0x${string}`,
                  name: data?.[0] as string,
                  symbol: data?.[1] as string,
                  decimals: data?.[2] as number,
              }
            : undefined;
    return payment;
};
