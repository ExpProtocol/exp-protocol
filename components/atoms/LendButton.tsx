import { FC } from "react";
import { useClaim } from "../../hooks/useClaim";
import { useCancel } from "../../hooks/useCancel";

type Prop = {
    renter: string;
    lendId: string;
};

export const LendButton: FC<Prop> = ({ renter, lendId }) => {
    const { claim } = useClaim(lendId);
    const { cancel } = useCancel(lendId);

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
    }
    return (
        <button
            onClick={() =>
                claim?.()
                    .then((tx: any) => tx.wait())
                    .then(() => console.log("Claim : success"))
            }
            className=" py-1 px-4 bg-[#3EA8FF] text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
        >
            Claim
        </button>
    );
};
