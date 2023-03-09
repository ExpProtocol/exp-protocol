import { FC } from "react";

type Prop = {
    renter: string;
    startTime: string;
    pricePerSec: string;
    collateralPrice: string;
};

export const LendButton: FC<Prop> = ({
    renter,
    startTime,
    pricePerSec,
    collateralPrice,
}) => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - Number(startTime)) / 1000);
    const totalPrice = diffInSeconds * Number(pricePerSec);
    const isOverTime = Number(collateralPrice) < totalPrice;

    if (!renter) {
        return (
            <button className=" py-1 px-4 bg-theme-100 text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer">
                Cancel
            </button>
        );
    } else {
        if (isOverTime) {
            return (
                <button className=" py-[3px] px-4 bg-gray-300 border border-gray-400 text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer">
                    Claim
                </button>
            );
        }
        return (
            <button className=" py-[3px] px-4 bg-gray-300 border border-gray-400 text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer">
                Now Rent
            </button>
        );
    }
};
