import { PaymentToken } from "../types/Payment";
import { useNetwork } from "wagmi";
import Payments from "../models/Payments";

export const usePayments = (): PaymentToken[] => {
    const { chain } = useNetwork();

    if (!chain) return [];
    return Object.values(Payments[String(chain?.id) as "80001"]);
};
