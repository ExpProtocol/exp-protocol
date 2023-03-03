import { FC } from "react";
import MyPageCard from "./MyPageCard";

type Prop = {
	nfts: any;
};

const MyPageCardList: FC<Prop> = ({ nfts }) => {
	const doClick = () => {};
	return (
		<div className="flex justify-center gap-8 flex-wrap mt-9">
			{nfts?.map((item: any, index: number) => {
				return (
					<div key={index}>
						<MyPageCard
							name={item.tokenName}
							address={item.collectionAddress}
							tokenId={item.tokenId}
							image={item.tokenImage}
							perPrice={item.perPrice}
							collateralPrice={item.collateralPrice}
							doClick={() => doClick}
							buttunTitle="貸出登録"
						/>
					</div>
				);
			})}
		</div>
	);
};
export default MyPageCardList;
