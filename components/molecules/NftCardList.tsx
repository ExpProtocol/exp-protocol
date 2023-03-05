import Link from "next/link";
import { FC } from "react";
import NftCard from "./NftCard";

type Prop = {
    nfts: any;
    setSelectItem: any;
    openModal: any;
};

const NftCardList: FC<Prop> = ({ nfts, setSelectItem, openModal }) => {
    const doClick = (item: any) => {
        openModal();
        setSelectItem(item);
    };
    return (
        <div className="flex justify-center gap-8 flex-wrap mt-9">
            {nfts?.map((item: any, index: number) => {
                return (
                    <Link
                        href={"/lend/" + item.chainId + "-" + item.lendId}
                        key={index}
                    >
                        <NftCard
                            name={item.tokenName}
                            address={item.collectionAddress}
                            tokenId={item.tokenId}
                            perPrice={item.perPrice}
                            collateralPrice={item.collateralPrice}
                            doClick={() => doClick(item)}
                            image={item.tokenImage}
                            buttunTitle="借りる"
                        />
                    </Link>
                );
            })}
        </div>
    );
};
export default NftCardList;
