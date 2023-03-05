import { collection, getDocs, query, where } from "@firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "../components/atoms/SubHeader";
import CollectionCardCollection from "../components/molecules/CollectionCardList";
import { mockCollections } from "../mocks/collections";
import { CollectionTypes } from "../types/CollectionType";
import { db } from "./Firebase";

export default function Home() {
	//TODO コレクション情報の取得
	const [collectionInfo, setCollectionInfo] = useState<CollectionTypes[]>();

	useEffect(() => {
		const f1 = async () => {
			const q1 = await query(collection(db, "collection"));
			const querySnapshot1 = await getDocs(q1);
			let s1: any = [];
			querySnapshot1.forEach((doc) => {
				const d = doc.data();
				s1.push(d);
			});
			setCollectionInfo(s1);
		};
		f1();
	}, []);

	if (!collectionInfo) {
		return <div>loading...</div>;
	}

	return (
		<div className="max-w-[720px] mx-auto">
			<div className="mt-16">
				<Title title="Collection一覧" subTitle="" to="" isButton={true} />
			</div>
			<CollectionCardCollection collections={collectionInfo} />
		</div>
	);
}
