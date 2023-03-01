import { FC } from "react";
import NftCard from "./NftCard";

type Prop = {
	nfts: any;
};

const NftCardList: FC<Prop> = ({ nfts }) => {
	return (
		<div className="flex justify-center gap-8 flex-wrap mt-9">
			{nfts.map((item: any, index: number) => {
				return (
					<div key={index}>
						<NftCard
							name={item.name}
							address={item.address}
							perPrice={item.perPrice}
							collateralPrice={item.collateralPrice}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default NftCardList;
