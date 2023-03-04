import Modal from "react-modal";
import { FC, useState } from "react";
import Image from "next/image";

type Prop = {
	isOpen: boolean;
	closeModal: any;
	selectItem: any;
	lend: any;
	setPricePerSec: any;
	setCollateralPrice: any;
	approve: any;
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
		height: "480px",
		transform: "translate(-50%, 50%)",
		borderRadius: "12px",
		border: "0px",
		padding: "0",
		backgroundColor: "rgba(255,255,255,1)",
	},
};

const LendModal: FC<Prop> = ({
	isOpen,
	closeModal,
	selectItem,
	lend,
	setPricePerSec,
	setCollateralPrice,
	approve,
}) => {
	const doChangePerPrice = (e: any) => {
		const tmpPricePerSec = parseInt(
			(e.target.value / 86400).toString()
		).toString();
		setPricePerSec(tmpPricePerSec);
	};

	const doChangeCollateralPrice = (e: any) => {
		setCollateralPrice(e.target.value);
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
			<div className="w-[280px] mx-auto text-gray-800">
				<div className="text-center text-lg font-bold mt-12">レンタル登録</div>
				<div className="w-[120px] h-[120px] relative mx-auto mt-6">
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
					<input
						onChange={doChangePerPrice}
						className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
					></input>
				</div>
				<div>
					<div className="text-xs font-bold mt-8">担保金額</div>
					<input
						onChange={doChangeCollateralPrice}
						className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
					></input>
				</div>
				<div className="flex justify-center ">
					<button
						onClick={() => {
							approve?.()
								.then((tx: any) => tx.wait())
								.then(() => console.log("Approve: success"))
								.then(() => lend?.())
								.then((tx: any) => tx.wait())
								.then(() => console.log("Lend: success"));
						}}
						className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
					>
						貸出登録
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default LendModal;
