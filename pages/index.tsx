import { getDocs, query, where } from "@firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import NftCollectionCard from "../components/NftCollectionCard";
import Title from "../components/Title";
import { Collection } from "../components/NftCollectionCard";

export default function Home() {
	//TODO コレクション情報の取得
	// const [collectionInfo, setCollectionInfo] = useState();

	// useEffect(() => {
	// 	const f1 = async () => {
	// 		const q1 = await query(collection(db, "Collection"));
	// 		const querySnapshot1 = await getDocs(q1);
	// 		let s1: any = [];
	// 		querySnapshot1.forEach((doc) => {
	// 			const d = doc.data();
	// 			s1.push(d);
	// 		});
	// 		setCollectionInfo(s1);
	// 	};
	// 	f1();
	// }, []);

	let collectionList: Collection[] = [];

	let title = "";
	let buttonTitle = "";

	return (
		<div>
			<main>
				<Title />
				<div className="flex justify-center ">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						{collectionList.map((collection: Collection) => {
							return(
								<NftCollectionCard address={collection.address} name={collection.name} img={collection.img}/>	
							);
						})};
					</div>
				</div>
			</main>
		</div>
	);
}
