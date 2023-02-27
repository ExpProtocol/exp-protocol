import Head from "next/head";
import { useEffect, useState } from "react";
import MyNftCard from "../components/MyNftCard";
import Modal from "react-modal";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useAccount } from "wagmi";

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
	// const [item, setItem] = useState();
	// const { address } = useAccount();

	// useEffect(() => {
	// 	const f1 = async () => {
	// 		const q1 = await query(
	// 			collection(db, "Nft"),
	// 			where("lender", "==", address)
	// 		);
	// 		const querySnapshot1 = await getDocs(q1);
	// 		let s1: any = [];
	// 		querySnapshot1.forEach((doc) => {
	// 			const d = doc.data();
	// 			s1.push(d);
	// 		});
	// 		setItem(s1);
	// 	};
	// 	f1();
	// }, []);

	const [isLendModal, setIsLendModal] = useState(true);

	const openLendModal = () => {
		setIsLendModal(true);
	};

	const closeLendModal = () => {
		setIsLendModal(false);
	};

	return (
		<div>
			<Head>
				<title>Exp Protocol</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Modal
				isOpen={isLendModal}
				onRequestClose={closeLendModal}
				style={customStyles}
			>
				<div>aaa</div>
			</Modal>

			<main>
				<div className="flex justify-center my-8">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<div className="absolute inset-y-0 left-0 w-6/12 ...">
							<p className="font-bold text-lg ...">My Page</p>
						</div>
						<div className="absolute inset-y-0 right-0 w-6/12 ...">
							<button className="absolute items-center bg-blue-500 hover:bg-blue-700 text-white right-0 font-bold py-2 px-4 rounded ...">
								Lend
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-center ">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<MyNftCard />
						<MyNftCard />
						<MyNftCard />
						<MyNftCard />
					</div>
				</div>
			</main>
		</div>
	);
}
