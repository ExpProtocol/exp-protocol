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
        <div className="flex justify-center md:justify-start gap-8 flex-wrap mt-9 pb-24">
            {nfts?.map((item: any, index: number) => {
                return (
                    <Link
                        href={"/lend/" + item.chainId + "-" + item.lendId}
                        key={index}
                    >
                        {item.isRent ? (
                            <NftCard
                                name={item.tokenName}
                                address={item.collectionAddress}
                                perPrice={item.perPrice}
                                image={item.tokenImage}
                                buttunTitle="Rented"
                            />
                        ) : (
                            <NftCard
                                name={item.tokenName}
                                address={item.collectionAddress}
                                perPrice={item.perPrice}
                                image={item.tokenImage}
                                buttunTitle="Rent"
                            />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};
export default NftCardList;
