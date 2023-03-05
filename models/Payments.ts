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
    137: {
        USDC: {
            symbol: "USDC",
            name: "USD Coin",
            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            decimals: 6,
        },
    },
} as const;
export default Payments;

const _MAGIC: Record<number, Record<string, PaymentToken>> = Payments;
_MAGIC;
