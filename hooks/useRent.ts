import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";

export const useRent = (lendId: string) => {
	const { config: rentConfig, refetch } = usePrepareContractWrite({
		address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
		abi: LIME_ABI,
		functionName: "rent",
		args: [lendId],
	});

	const { writeAsync: rent } = useContractWrite(rentConfig);
	return { rent, refetch };
};
