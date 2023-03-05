import { PaymentToken } from "../types/Payment";

const Payments = {
    80001: {
        TST: {
            symbol: "TST",
            name: "TestToken",
            address: "0xC124a7F913F102AdFd971cD593270049d161fcA2",
            decimals: 18,
        },
    },
} as const;
export default Payments;

const _MAGIC: Record<number, Record<string, PaymentToken>> = Payments;
_MAGIC;
