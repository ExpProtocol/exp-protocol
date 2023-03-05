import { FC } from "react";
import LendingCard from "./LendingCard";
import NftCard from "./NftCard";
import RentCard from "./RentCard";

type Prop = {
	nfts: any;
};

const RentCardList: FC<Prop> = ({ nfts }) => {
	return (
		<div className="flex justify-center md:justify-start gap-8 flex-wrap mt-9">
			{nfts?.map((item: any, index: number) => {
				return (
					<div key={index}>
						<RentCard
							name={item.tokenName}
							address={item.collectionAddress}
							tokenId={item.tokenId}
							image={item.tokenImage}
							perPrice={"0"}
							collateralPrice={"0"}
							doClick={() => {}}
							buttunTitle="返却する"
							lendId={item.lendId}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default RentCardList;
