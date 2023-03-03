import { FC } from "react";
import NftCard from "./NftCard";

type Prop = {
	nfts: any;
};

const NftCardList: FC<Prop> = ({ nfts }) => {
	const doClick = () => {};
	return (
		<div className="flex justify-start gap-8 flex-wrap mt-9">
			{nfts?.map((item: any, index: number) => {
				return (
					<div key={index}>
						<NftCard
							name={item.tokenName}
							address={item.collectionAddress}
							tokenId={item.tokenId}
							perPrice={item.perPrice}
							collateralPrice={item.collateralPrice}
							doClick={() => doClick}
							image={item.tokenImage}
							buttunTitle="借りる"
						/>
					</div>
				);
			})}
		</div>
	);
};
export default NftCardList;
