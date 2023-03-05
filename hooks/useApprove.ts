import { BigNumber } from "ethers";
import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
} from "wagmi";
import { erc20ABI } from "wagmi";

export const useApprove = (amount: string | undefined) => {
	const { config: rentConfig } = usePrepareContractWrite({
		address: "0xC124a7F913F102AdFd971cD593270049d161fcA2",
		abi: erc20ABI,
		functionName: "approve",
		args: [
			"0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6",
			BigNumber.from(amount || 0),
		],
		enabled: Boolean(amount),
	});

	const { writeAsync: _approve, isLoading: approving } =
		useContractWrite(rentConfig);

	const approve = async () => await _approve?.();

	return { approve, approving };
};
