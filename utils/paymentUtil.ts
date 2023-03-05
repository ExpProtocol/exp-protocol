import { BigNumber, BigNumberish, ethers } from "ethers";
import { PaymentToken } from "../types/Payment";

export const PaymentUtils = {
    parse(
        payment: PaymentToken | undefined,
        value: string | number | undefined
    ) {
        return ethers.utils.parseUnits(
            Number(value || 0).toString(),
            payment?.decimals
        );
    },
    format(payment: PaymentToken | undefined, value: BigNumberish) {
        return ethers.utils.formatUnits(value, payment?.decimals);
    },
};
