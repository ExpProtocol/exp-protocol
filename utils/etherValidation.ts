import { ethers } from "ethers";

export const etherValidation = (value: string, isPerPrice:boolean) => {
    let customValue = Number(ethers.utils.formatEther(value));
    if (isPerPrice) {
        customValue = Number(customValue) * 86400;
    }
    if (Number(customValue) < 0.001) {
        return "<0.001";
    }
    return String(Math.round(customValue * 1000000) / 1000000);
};
