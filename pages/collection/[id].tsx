import { collection, getDocs, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NftCard from "../../components/NftCard";
import Modal from "react-modal";
import GurantarModal from "../../components/GurantarModal";
import Button from "../../components/Button";
import Title from "../../components/Title";

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
			>
				<GurantarModal />

			</Modal>
			<main>
				<Title />

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
