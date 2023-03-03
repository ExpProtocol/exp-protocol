import Image from "next/image";
import { FC } from "react";

export type Collection = {
	name: string;
	image: string;
	address: string;
};
const CollectionCard: FC<Collection> = ({ address, name, image }) => {
	return (
		<div className="w-[228px] h-[138px] bg-white rounded-xl drop-shadow-lg">
			<div className="w-[238px] h-[100px] relative">
				<Image
					src={image}
					fill
					style={{ objectFit: "cover" }}
					className="rounded-xl"
					alt=""
				/>
			</div>
			<div className="text-[#333333] mx-5 mt-3 text-xs font-bold">
				{name?.slice(0, 16)}
			</div>
		</div>
	);
};

export default CollectionCard;
