import { FC } from "react";
import { useClaim } from "../../hooks/useClaim";

type Prop = {
	renter: string;
	lendId: string;
};

export const LendButton: FC<Prop> = ({ renter, lendId }) => {
	const { claim } = useClaim(lendId);

	if (!renter) {
		return (
			<div className=" py-1 px-4 bg-[#3EA8FF] text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer">
				Cancel
			</div>
		);
	}
	return (
		<div
			onClick={() =>
				claim?.()
					.then((tx: any) => tx.wait())
					.then(() => console.log("Claim : success"))
			}
			className=" py-1 px-4 bg-[#3EA8FF] text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
		>
			Claim
		</div>
	);
};
