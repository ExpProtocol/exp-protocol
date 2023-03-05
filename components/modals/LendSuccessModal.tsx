import Modal from "react-modal";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Prop = {
	isOpen: boolean;
	closeModal: any;
};

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
		width: "400px",
		height: "300px",
		transform: "translate(-50%, 50%)",
		borderRadius: "12px",
		border: "0px",
		padding: "0",
		backgroundColor: "rgba(255,255,255,1)",
	},
};

const LendSuccessModal: FC<Prop> = ({ isOpen, closeModal }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
			<div className=" text-center font-bold text-2xl mt-12">Lend Success</div>
			<div className="text-4xl text-center mt-8">🎉</div>
			<div className="flex justify-center mt-8">
				<Link
					href="/mypage"
					className="text-center bg-[#3EA8FF] text-white px-4 py-1 rounded-lg font-bold"
				>
					show my page
				</Link>
			</div>
		</Modal>
	);
};

export default LendSuccessModal;
