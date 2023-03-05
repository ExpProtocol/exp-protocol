import { BigNumber } from "ethers";
import {
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import { erc20ABI } from "wagmi";
import { PaymentToken } from "../types/Payment";
import { useContractAddresses } from "./useContractAddresses";

export const useApprove = (
    payment: PaymentToken | undefined,
    amount: string | undefined
) => {
    const Contract = useContractAddresses();
    const { config: rentConfig } = usePrepareContractWrite({
        address: payment?.address as `0x${string}`,
        abi: erc20ABI,
        functionName: "approve",
        args: [Contract?.MARKET as `0x${string}`, BigNumber.from(amount || 0)],
        enabled: Boolean(Contract && payment && amount),
    });

    const { writeAsync: _approve, isLoading: approving } =
        useContractWrite(rentConfig);

    const approve = async () => await _approve?.();

    return { approve, approving };
};
