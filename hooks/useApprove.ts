import { useContractWrite, usePrepareContractWrite } from "wagmi";

export const useApprove = (amount: string) => {
	const { config: rentConfig } = usePrepareContractWrite({
		address: "0xC124a7F913F102AdFd971cD593270049d161fcA2",
		abi: [
			"function approve(address spender, uint256 amount) public virtual override returns (bool)",
		],
		functionName: "approve",
		args: ["0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6", amount],
	});

	const { writeAsync: approve } = useContractWrite(rentConfig);
	return { approve };
};
