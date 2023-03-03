import { FC } from "react";
import NftCard from "./NftCard";

type Prop = {
	nfts: any;
	setSelectItem: any;
	openModal: any;
};

const LendingCardList: FC<Prop> = ({ nfts, setSelectItem, openModal }) => {
	const doClick = (item: any) => {
		openModal();
		setSelectItem(item);
	};
	return (
		<div className="flex justify-start gap-8 flex-wrap mt-9">
			{nfts?.map((item: any, index: number) => {
				return (
					<div key={index}>
						<NftCard
							name={item.tokenName}
							address={item.collectionAddress}
							tokenId={item.tokenId}
							image={item.tokenImage}
							perPrice={"0"}
							collateralPrice={"0"}
							doClick={(item: any) => doClick(item)}
							buttunTitle="貸出登録"
						/>
					</div>
				);
			})}
		</div>
	);
};
export default LendingCardList;
