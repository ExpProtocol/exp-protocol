import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useAccount } from "wagmi";
import Title from "../components/atoms/SubHeader";
import { db } from "../libs/Firebase";
import MyPageCardList from "../components/molecules/MyPageCardList";
import { LendType } from "../types/LendType";
import RentCardList from "../components/molecules/RentCardList";
import { useLendingNfts } from "../hooks/useLendingNfts";
import LoadCard from "../components/atoms/LoadCard";

export default function MyPage() {
    //TODO NFT情報の取得
    const { nfts: item } = useLendingNfts();
    const [rentItem, setRentItem] = useState<LendType[]>();
    const { address } = useAccount();

    useEffect(() => {
        const f1 = async () => {
            const q2 = await query(
                collection(db, "lend"),
                where("renter", "==", address?.toLocaleLowerCase()),
                where("isActive", "==", true)
            );
            const querySnapshot2 = await getDocs(q2);
            let s2: any = [];
            querySnapshot2.forEach((doc) => {
                const d = doc.data();
                s2.push(d);
            });
            setRentItem(s2);
        };
        f1();
    }, []);

    if (!item || !rentItem) {
        return (
            <div>
                <div className="max-w-[720px] mx-auto pb-24">
                    <div className="mt-16">
                        <Title
                            title="MY PAGE"
                            subTitle=""
                            to=""
                            isButton={true}
                        />
                    </div>
                    <div className="mx-auto text-gray-800 font-bold ">
                        <div>All Your Lend</div>
                        <div className="flex justify-start h-[270px]">
                            <div className="flex justify-center gap-8 flex-wrap mt-9 animate-pulse">
                                <div className="w-[156px] h-[214px] bg-slate-100 drop-shadow-lg rounded-xl text-gray-800 pt-2"></div>
                                <div className="w-[156px] h-[214px] bg-slate-100 drop-shadow-lg rounded-xl text-gray-800 pt-2"></div>
                                <div className="w-[156px] h-[214px] bg-slate-100 drop-shadow-lg rounded-xl text-gray-800 pt-2"></div>
                                <div className="w-[156px] h-[214px] bg-slate-100 drop-shadow-lg rounded-xl text-gray-800 pt-2"></div>
                            </div>
                        </div>
                        <div className="mt-8">All Your Rent</div>
                        <div className="flex justify-start h-[270px]">
                            <LoadCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-[720px] mx-auto pb-24">
                <div className="mt-16">
                    <Title title="MY PAGE" subTitle="" to="" isButton={true} />
                </div>
                <div className="mx-auto text-gray-800 font-bold ">
                    <div>All Your Lend</div>
                    <div className="flex justify-start h-[270px]">
                        <MyPageCardList nfts={item} />
                    </div>
                    <div className="mt-8">All Your Rent</div>
                    <div className="flex justify-start h-[270px]">
                        <RentCardList nfts={rentItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}
