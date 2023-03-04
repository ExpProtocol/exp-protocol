import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";

export const useTokenReturn = (lendId: string) => {
	const { config: returnTokenConfig } = usePrepareContractWrite({
		address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
		abi: LIME_ABI,
		functionName: "returnToken",
		args: [lendId],
	});

	const { writeAsync: returnToken } = useContractWrite(returnTokenConfig);
	return { returnToken };
};
