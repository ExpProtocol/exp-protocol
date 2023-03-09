import { FC } from "react";
import { useAccount } from "wagmi";
import { useApprove } from "../../hooks/useApprove";
import { useCancel } from "../../hooks/useCancel";
import { useClaim } from "../../hooks/useClaim";
import { usePayments } from "../../hooks/usePayments";
import { useRent } from "../../hooks/useRent";

type Prop = {
    isRent: boolean;
    lender: string;
    renter: string;
    lendId: string;
    openLendSuccessModal: () => void;
    startTime: string;
    pricePerSec: string;
    collateralPrice: string;
};

const FunctionButton: FC<Prop> = ({
    isRent,
    lender,
    renter,
    lendId,
    openLendSuccessModal,
    startTime,
    pricePerSec,
    collateralPrice,
}) => {
    console.log(isRent);
    const payments = usePayments();
    const { rent, refetch } = useRent(lendId);
    const { approve } = useApprove(payments[0], collateralPrice);
    const { address } = useAccount();
    const { claim } = useClaim(lendId);
    const { cancel } = useCancel(lendId);
    const now = Date.now();
    const diffInSeconds = Math.floor((now - Number(startTime)) / 1000);
    const totalPrice = diffInSeconds * Number(pricePerSec);
    const isOverTime = Number(collateralPrice) < totalPrice;
    if (renter == address?.toLocaleLowerCase()) {
        if (isOverTime) {
            return (
                <div className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                    Wait Claim
                </div>
            );
        } else {
            return (
                <div className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                    Return
                </div>
            );
        }
    }

    if (lender == address?.toLocaleLowerCase()) {
        if (isOverTime) {
            return (
                <div
                    className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                    onClick={() =>
                        claim?.()
                            .then((tx: any) => tx.wait())
                            .then(() => console.log("Cancel : success"))
                    }
                >
                    Claim
                </div>
            );
        } else if (!isOverTime && isRent) {
            return (
                <div className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                    Now Renting
                </div>
            );
        } else if (!isOverTime && !isRent) {
            return (
                <div
                    className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                    onClick={() =>
                        cancel?.()
                            .then((tx: any) => tx.wait())
                            .then(() => console.log("Cancel : success"))
                    }
                >
                    Cancel
                </div>
            );
        }
    } else {
        if (isRent) {
            return (
                <div className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                    Now Renting
                </div>
            );
        } else {
            if (rent != undefined) {
                return (
                    <button
                        onClick={() =>
                            rent()
                                ?.then((tx: any) => tx.wait())
                                .then(() => openLendSuccessModal())
                        }
                        className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                    >
                        Rent
                    </button>
                );
            } else {
                return (
                    <button
                        onClick={() =>
                            approve()
                                .then((tx: any) => tx.wait())
                                .then(() => refetch())
                        }
                        className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                    >
                        Approve
                    </button>
                );
            }
        }
    }

    return <div>aaa</div>;
};

export default FunctionButton;
