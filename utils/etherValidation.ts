import { ethers } from "ethers";

export const etherValidation = (value: string) => {
	const customValue = ethers.utils.formatEther(value);
	if (Number(customValue) < 0.01) {
		return "<0.01";
	}
	return customValue;
};
