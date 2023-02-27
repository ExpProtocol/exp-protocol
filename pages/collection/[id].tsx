import { collection, getDocs, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NftCard from "../../components/NftCard";
import Modal from "react-modal";

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

export default function NftCoollectionList() {
	const [isGulModal, setIsGulModal] = useState(true);

	const openGulModal = () => {
		setIsGulModal(true);
	};

	const closeGulModal = () => {
		setIsGulModal(false);
	};

	//TODO NFT情報の取得
	// const [item, setItem] = useState();

	// useEffect(() => {
	// 	const f1 = async () => {
	// 		const q1 = await query(collection(db, "Nft"));
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

	return (
		<div>
			<Modal
				isOpen={isGulModal}
				onRequestClose={closeGulModal}
				style={customStyles}
			></Modal>
			<main>
				<div className="m-0">
					<div className="m-0 flex justify-center my-8">
						<div className="flex relative h-12 w-6/12  ...">
							<div className="absolute left-0 bottom-0 ... ">
								<p>←Back to Collection Page</p>
							</div>
						</div>
					</div>
					<div className="m-0 flex justify-center my-8">
						<div className="flex relative items-center justify-center h-24 w-6/12">
							<div className="absolute inset-y-0 left-0 w-6/12 ...">
								<p className="font-bold text-lg ...">Crypto bar P2P</p>
							</div>
							<div className="absolute inset-y-0 right-0 w-6/12 ...">
								<button className="absolute items-center bg-blue-500 hover:bg-blue-700 text-white right-0 font-bold py-2 px-4 rounded ...">
									Lend
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center ">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<NftCard />
						<NftCard />
						<NftCard />
						<NftCard />
					</div>
				</div>
			</main>
		</div>
	);
}
