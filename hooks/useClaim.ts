import { useContractWrite, usePrepareContractWrite } from "wagmi";
import LIME_ABI from "../models/LIME_ABI.json";

export const useClaim = (lendId: string) => {
	const { config: claimConfig, refetch } = usePrepareContractWrite({
		address: "0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
		abi: LIME_ABI,
		functionName: "claim",
		args: [lendId],
	});

	const { writeAsync: claim } = useContractWrite(claimConfig);
	return { claim, refetch };
};
