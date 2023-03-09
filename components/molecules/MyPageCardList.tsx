import Link from "next/link";
import { FC } from "react";
import { LendType } from "../../types/LendType";
import MyPageCard from "./MyPageCard";

type Prop = {
    nfts: LendType[];
};

const MyPageCardList: FC<Prop> = ({ nfts }) => {
    return (
        <div className="flex justify-between md:justify-start gap-8 flex-wrap mt-4 mx-5 md:mx-0">
            {nfts?.map((item: LendType, index: number) => {
                return (
                    <Link
                        href={"/lend/" + item.chainId + "-" + item.lendId}
                        key={index}
                    >
                        <MyPageCard
                            name={item.tokenName}
                            address={item.collectionAddress}
                            tokenId={item.tokenId}
                            image={item.tokenImage}
                            perPrice={item.perPrice}
                            collateralPrice={item.collateralPrice}
                            buttunTitle="Lend"
                            lendId={item.lendId}
                            renter={item.renter}
                            isRent={item.isRent}
                            startTime={item.startTime}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
export default MyPageCardList;
