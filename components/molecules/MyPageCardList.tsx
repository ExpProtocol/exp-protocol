import { FC } from "react";
import { LendType } from "../../types/LendType";
import MyPageCard from "./MyPageCard";

type Prop = {
	nfts: LendType[];
};

const MyPageCardList: FC<Prop> = ({ nfts }) => {
	return (
		<div className="flex justify-center gap-8 flex-wrap mt-9">
			{nfts?.map((item: LendType, index: number) => {
				return (
					<div key={index}>
						<MyPageCard
							name={item.tokenName}
							address={item.collectionAddress}
							tokenId={item.tokenId}
							image={item.tokenImage}
							perPrice={item.perPrice}
							collateralPrice={item.collateralPrice}
							buttunTitle="貸出登録"
							lendId={item.lendId}
							renter={item.renter}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default MyPageCardList;
