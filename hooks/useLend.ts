import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";

export const useLend = (
	collectionAddress: string,
	tokenId: string,
	paymentToken: string,
	pricePerSec: string,
	collateralPrice: string,
	autoReRegister: boolean
) => {
	const { config: lendConfig } = usePrepareContractWrite({
		address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
		abi: LIME_ABI,
		functionName: "lend721",
		args: [
			collectionAddress,
			tokenId,
			paymentToken,
			pricePerSec,
			collateralPrice,
			autoReRegister,
		],
	});

	const { writeAsync: lend } = useContractWrite(lendConfig);
	return { lend };
};
