import Image from "next/image";
import { FC } from "react";
import { FaEthereum, FaShieldAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useTokenReturn } from "../../hooks/useTokenReturn";

export type Nft = {
	address: string;
	name: string;
	image: string;
	tokenId: string;
	perPrice: string;
	collateralPrice: string;
	doClick: any;
	buttunTitle: string;
	lendId: string;
};

const RentCard: FC<Nft> = ({
	address,
	name,
	image,
	tokenId,
	perPrice,
	collateralPrice,
	doClick,
	buttunTitle,
	lendId,
}) => {
	const { returnToken } = useTokenReturn(lendId);
	return (
		<div className="w-[156px] h-[234px] bg-white drop-shadow-lg rounded-xl text-gray-800 pt-2">
			<div className="w-[140px] h-[140px] bg-[#CFE4FE] rounded-xl mx-2 relative">
				<Image
					src={image}
					fill
					style={{ objectFit: "cover" }}
					className="rounded-xl"
					alt=""
				/>
			</div>
			<div className="mx-2">
				<div className="mt-2 text-xs font-bold">{name?.slice(0, 16)}</div>
				<div className="grid grid-cols-2 gap-2 text-xs mt-[6px]">
					<div className="flex justify-start items-center gap-1">
						<FaEthereum size={14} />
						<div>{perPrice}(D)</div>
					</div>
					<div className="flex justify-start items-center gap-1">
						<FaShieldAlt size={14} />
						<div>{collateralPrice}</div>
					</div>
				</div>
				<div className="flex justify-end items-center gap-2 mt-2">
					<div
						onClick={() => {
							returnToken?.()
								.then((tx: any) => tx.wait())
								.then(() => console.log("Return: success"));
						}}
						className=" py-1 px-4 bg-[#3EA8FF] text-white rounded-lg font-bold text-xs flex justify-center items-center cursor-pointer"
					>
						{buttunTitle}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RentCard;
