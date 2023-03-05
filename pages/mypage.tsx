import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useAccount } from "wagmi";
import Title from "../components/atoms/SubHeader";
import { db } from "./Firebase";
import MyPageCardList from "../components/molecules/MyPageCardList";
import { LendType } from "../types/LendType";
import RentCardList from "../components/molecules/RentCardList";
import { useLendingNfts } from "../hooks/useLendingNfts";

export default function MyPage() {
    //TODO NFT情報の取得
    const { nfts: item } = useLendingNfts();
    const [rentItem, setRentItem] = useState<LendType[]>();
    const { address } = useAccount();

    console.log(item);

    useEffect(() => {
        const f1 = async () => {
            const q2 = await query(
                collection(db, "lend"),
                where("renter", "==", address?.toLocaleLowerCase())
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
        return <div>loading...</div>;
    }

    return (
        <div>
            <div className="max-w-[720px] mx-auto pb-24">
                <div className="mt-16">
                    <Title title="MY PAGE" subTitle="" to="" isButton={true} />
                </div>
                <div className="mx-auto">
                    <div>Lend一覧</div>
                    <div className="">
                        <MyPageCardList nfts={item} />
                    </div>
                    <div>Rent一覧</div>
                    <div className="flex justify-start h-[270px]">
                        <RentCardList nfts={rentItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}
