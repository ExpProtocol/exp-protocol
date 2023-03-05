import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI";

export const useLend = (
    collectionAddress: string | undefined,
    tokenId: string | undefined,
    paymentToken: string,
    pricePerSec: string | undefined,
    collateralPrice: string | undefined,
    autoReRegister: boolean
) => {
    const { config: lendConfig } = usePrepareContractWrite({
        address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
        abi: LIME_ABI,
        functionName: "lend721",
        args: [
            collectionAddress as `0x${string}`,
            BigNumber.from(tokenId || "0"),
            paymentToken as `0x${string}`,
            BigNumber.from(pricePerSec || "0").mul(86400),
            BigNumber.from(collateralPrice || "0"),
            autoReRegister,
        ],
        enabled: Boolean(
            collectionAddress && tokenId && pricePerSec && collateralPrice
        ),
    });

    const { writeAsync: lend } = useContractWrite(lendConfig);
    return { lend };
};
