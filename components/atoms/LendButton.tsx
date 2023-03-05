import { FC } from "react";
import { useClaim } from "../../hooks/useClaim";
import { useCancel } from "../../hooks/useCancel";

type Prop = {
    renter: string;
    lendId: string;
    isRent: boolean;
    startTime: string;
    pricePerSec: string;
    collateralPrice: string;
};

export const LendButton: FC<Prop> = ({
    renter,
    lendId,
    isRent,
    startTime,
    pricePerSec,
    collateralPrice,
}) => {
    const { claim } = useClaim(lendId);
    const { cancel } = useCancel(lendId);
    const now = Date.now();
    const diffInSeconds = Math.floor((now - Number(startTime)) / 1000);
    const totalPrice = diffInSeconds * Number(pricePerSec);
    const isOverTime = Number(collateralPrice) < totalPrice;

    if (!renter) {
        return (
            <button
                onClick={() =>
                    cancel?.()
                        .then((tx: any) => tx.wait())
                        .then(() => console.log("Cancel : success"))
                }
                className=" py-1 px-4 bg-[#3EA8FF] text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
            >
                Cancel
            </button>
        );
    } else {
        if (isOverTime) {
            return (
                <button
                    onClick={() =>
                        claim?.()
                            .then((tx: any) => tx.wait())
                            .then(() => console.log("Cancel : success"))
                    }
                    className=" py-[3px] px-4 bg-gray-300 border border-gray-400 text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
                >
                    Claim
                </button>
            );
        }
        return (
            <button
                onClick={() =>
                    cancel?.()
                        .then((tx: any) => tx.wait())
                        .then(() => console.log("Cancel : success"))
                }
                className=" py-[3px] px-4 bg-gray-300 border border-gray-400 text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
            >
                Now Rent
            </button>
        );
    }
};
