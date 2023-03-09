import Link from "next/link";
import { FC } from "react";
import { LendType } from "../../types/LendType";
import { etherValidation } from "../../utils/etherValidation";
import LendingCard from "./LendingCard";
import NftCard from "./NftCard";
import RentCard from "./RentCard";

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
                        <RentCard
                            name={item.tokenName}
                            address={item.collectionAddress}
                            tokenId={item.tokenId}
                            image={item.tokenImage}
                            perPrice={etherValidation(item.perPrice)}
                            collateralPrice={etherValidation(
                                item.collateralPrice
                            )}
                            doClick={() => {}}
                            buttunTitle="Return"
                            lendId={item.lendId}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
export default RentCardList;
