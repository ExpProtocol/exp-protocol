import Link from "next/link";
import { FC } from "react";
import { LendType } from "../../types/LendType";
import NftCard from "./NftCard";

type Prop = {
    nfts: LendType[];
};

const MyPageCardList: FC<Prop> = ({ nfts }) => {
    return (
        <div className="flex justify-between md:justify-start gap-8 flex-wrap mt-4 mx-5 md:mx-0">
            {nfts?.map((item: LendType, index: number) => {
                const now = Date.now();
                const diffInSeconds = Math.floor(
                    (now - Number(item.startTime)) / 1000
                );
                const totalPrice = diffInSeconds * Number(item.perPrice);
                const isOverTime = Number(item.collateralPrice) < totalPrice;
                if (!item.renter) {
                    return (
                        <Link
                            href={"/lend/" + item.chainId + "-" + item.lendId}
                            key={index}
                        >
                            <NftCard
                                name={item.tokenName}
                                address={item.collectionAddress}
                                perPrice={item.perPrice}
                                image={item.tokenImage}
                                buttunTitle="Cancel"
                            />
                        </Link>
                    );
                } else {
                    if (isOverTime) {
                        return (
                            <Link
                                href={
                                    "/lend/" + item.chainId + "-" + item.lendId
                                }
                                key={index}
                            >
                                <NftCard
                                    name={item.tokenName}
                                    address={item.collectionAddress}
                                    perPrice={item.perPrice}
                                    image={item.tokenImage}
                                    buttunTitle="Claim"
                                />
                            </Link>
                        );
                    }
                    return (
                        <Link
                            href={"/lend/" + item.chainId + "-" + item.lendId}
                            key={index}
                        >
                            <NftCard
                                name={item.tokenName}
                                address={item.collectionAddress}
                                perPrice={item.perPrice}
                                image={item.tokenImage}
                                buttunTitle="Rented"
                            />
                        </Link>
                    );
                }
            })}
        </div>
    );
};
export default MyPageCardList;
