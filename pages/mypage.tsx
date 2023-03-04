import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useAccount } from "wagmi";
import Title from "../components/atoms/Title";
import { db } from "./Firebase";
import MyPageCardList from "../components/molecules/MyPageCardList";
import { LendType } from "../types/LendType";

export default function MyPage() {
	//TODO NFT情報の取得
	const [item, setItem] = useState<LendType[]>();
	const { address } = useAccount();

	useEffect(() => {
		const f1 = async () => {
			const q1 = await query(
				collection(db, "database-test"),
				where("lender", "==", address?.toLocaleLowerCase())
			);
			const querySnapshot1 = await getDocs(q1);
			let s1: any = [];
			querySnapshot1.forEach((doc) => {
				const d = doc.data();
				s1.push(d);
			});
			// console.log(s1);
			setItem(s1);
		};
		f1();
	}, []);

	if (!item) {
		return <div>loading...</div>;
	}

	return (
		<div>
			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title title="MY PAGE" subTitle="" to="" isButton={true} />
				</div>
				<div className="flex justify-start ">
					<MyPageCardList nfts={item} />
				</div>
			</div>
		</div>
	);
}
