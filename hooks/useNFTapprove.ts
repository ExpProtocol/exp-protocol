import { useContractWrite, usePrepareContractWrite } from "wagmi";

export const useNFTapprove = (cAddr: `0x${string}`, tokenId: string) => {
	const { config: lendConfig } = usePrepareContractWrite({
		address: cAddr,
		abi: [
			"function approve(address to, uint256 tokenId) public virtual override",
		],
		functionName: "approve",
		args: ["0x5c0e8590Ee95a2208b91E315c993Fa731B0DABD6", tokenId],
	});

	const { writeAsync: approve } = useContractWrite(lendConfig);
	return { approve };
};
