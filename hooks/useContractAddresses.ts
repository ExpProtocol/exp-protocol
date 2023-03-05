import { useNetwork } from "wagmi";
import ContractConfig from "../models/ContractConfig";

export const useContractAddresses = ():
    | Partial<typeof ContractConfig["80001"]>
    | undefined => {
    const { chain } = useNetwork();
    if (!chain) return {};
    return ContractConfig[String(chain?.id) as "80001"];
};
