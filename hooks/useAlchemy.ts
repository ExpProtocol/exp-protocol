import { useNetwork } from "wagmi";
import { getAlchemy } from "../libs/alchemyConfig";

export const useAlchemy = () => {
    const { chain } = useNetwork();
    const alchemy = getAlchemy(chain?.id || 1);
    return alchemy;
};
