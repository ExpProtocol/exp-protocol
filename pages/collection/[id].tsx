import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NftCard from "../../components/molecules/NftCard";
import Modal from "react-modal";
import GurantarModal from "../../components/modals/GurantarModal";
import Title from "../../components/atoms/Title";
import { mockNfts } from "../../mocks/nfts";
import NftCardList from "../../components/molecules/NftCardList";
import { db } from "../Firebase";
import { useRouter } from "next/router";

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
	const router = useRouter();

	const openGulModal = () => {
		setIsGulModal(true);
	};

	const closeGulModal = () => {
		setIsGulModal(false);
	};

	//TODO NFT情報の取得
	const [item, setItem] = useState();

	useEffect(() => {
		const f1 = async () => {
			const tmpPath = router.asPath.split("/")[2];
			console.log(tmpPath);
			const q1 = await query(
				collection(db, "database-test"),
				where("collectionAddress", "==", tmpPath)
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

	return (
		<div>
			<Modal
				isOpen={isGulModal}
				onRequestClose={closeGulModal}
				style={customStyles}
			>
				<GurantarModal />
			</Modal>
			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title title="Collection一覧" subTitle="" />
				</div>
				<NftCardList nfts={item} />
			</div>
		</div>
	);
}
