import Form from "../Form";
import Modal from "react-modal";
import { FC } from "react";
import Image from "next/image";

type Prop = {
	isOpen: boolean;
	closeModal: any;
	selectItem: any;
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
		width: "378px",
		height: "414px",
		transform: "translate(-50%, 50%)",
		borderRadius: "12px",
		border: "0px",
		padding: "0",
		backgroundColor: "rgba(255,255,255,1)",
	},
};

const LendModal: FC<Prop> = ({ isOpen, closeModal, selectItem }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
			<div className="w-[280px] mx-auto">
				<div className="w-[60px] h-[60px] relative mx-auto">
					<Image
						src={selectItem?.tokenImage}
						fill
						style={{ objectFit: "cover" }}
						className="rounded-xl"
						alt=""
					/>
				</div>
				<div>
					<div className="text-xs font-bold mt-8">1日あたり賃料</div>
					<input className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"></input>
				</div>
				<div>
					<div className="text-xs font-bold mt-8">担保金額</div>
					<input className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"></input>
				</div>
			</div>
		</Modal>
	);
};

export default LendModal;
