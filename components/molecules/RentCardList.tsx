import Link from "next/link";
import { FC } from "react";
import { LendType } from "../../types/LendType";
import { etherValidation } from "../../utils/etherValidation";
import NftCard from "./NftCard";

type Prop = {
    nfts: LendType[];
};

const RentCardList: FC<Prop> = ({ nfts }) => {
    return (
        <div className="flex justify-between md:justify-start gap-8 flex-wrap mt-4 mx-5 md:mx-0">
            {nfts?.map((item: any, index: number) => {
                return (
                    <Link
                        href={"/lend/" + item.chainId + "-" + item.lendId}
                        key={index}
                    >
                        <NftCard
                            name={item.tokenName}
                            address={item.collectionAddress}
                            image={item.tokenImage}
                            perPrice={item.perPrice}
                            buttunTitle="Return"
                        />
                    </Link>
                );
            })}
        </div>
    );
};
export default RentCardList;
