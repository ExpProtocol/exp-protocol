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
			<Modal
				isOpen={isLendModal}
				onRequestClose={closeLendModal}
				style={customStyles}
			>
				<div className="flex justify-center">
					<div className="relative items-center justify-center">
						<div className="relative my-8 ...">
							<p className="text-xl font-bold">レンタル登録</p>
						</div>
						<div className="w-full max-w-xs">
							<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										貸出NFTのコレクションアドレス
									</label>
									<Form />
								</div>
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										貸出NFTのトークンID
									</label>
									<Form />
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										保証人になるユーザーのアドレス
									</label>
									<Form />
								</div>
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										担保費用
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										type="text"
									/>
									<Form />
								</div>
							</form>
						</div>
					</div>
				</div>
			</Modal>

			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title title="MY PAGE" subTitle="" />
				</div>
				<div className="flex justify-center ">
					<NftCardList nfts={mockNfts} />
				</div>
			</div>
		</div>
	);
}
