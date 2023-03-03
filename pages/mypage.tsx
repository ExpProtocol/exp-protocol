import Head from "next/head";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useAccount } from "wagmi";
import NftCard from "../components/molecules/NftCard";
import Form from "../components/Form";
import { Nft } from "../components/molecules/NftCard";
import Title from "../components/atoms/Title";
import NftCardList from "../components/molecules/NftCardList";
import { mockNfts } from "../mocks/nfts";
import { db } from "./Firebase";
import MyPageCardList from "../components/molecules/MyPageCardList";

const customStyles: ReactModal.Styles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,0.3)",
	},

	content: {
		top: "auto",
		left: "50%",
		right: "auto",
		bottom: "50%",
		marginRight: "-50%",
		width: "540px",
		height: "80%",
		transform: "translate(-50%, 50%)",
		borderRadius: "12px",
		border: "0px",
		padding: "0",
		backgroundColor: "rgba(255,255,255,1)",
	},
};

export default function MyPage() {
	//TODO NFT情報の取得
	const [item, setItem] = useState();
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

	const [isLendModal, setIsLendModal] = useState(false);

	const openLendModal = () => {
		setIsLendModal(true);
	};

	const closeLendModal = () => {
		setIsLendModal(false);
	};

	return (
		<div>
			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title title="MY PAGE" subTitle="" />
				</div>
				<div className="flex justify-start ">
					<MyPageCardList nfts={item} />
				</div>
			</div>
		</div>
	);
}
