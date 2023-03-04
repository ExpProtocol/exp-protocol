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
import Image from "next/image";

export default function NftCoollectionList() {
	const [isGulModal, setIsGulModal] = useState(false);
	const [selectItem, setSelectItem] = useState();
	const router = useRouter();

	const openGulModal = () => {
		setIsGulModal(true);
	};

	const closeGulModal = () => {
		setIsGulModal(false);
	};

	//TODO NFT情報の取得
	const [item, setItem] = useState<any>();

	useEffect(() => {
		const f1 = async () => {
			const tmpPath = router.asPath.split("/")[2];
			const chainId = tmpPath.split("-")[0];
			const lendId = tmpPath.split("-")[1];
			console.log(chainId);
			console.log(lendId);
			const q1 = await query(
				collection(db, "database-test"),
				where("chainId", "==", chainId),
				where("lendId", "==", lendId)
			);
			const querySnapshot1 = await getDocs(q1);
			let s1: any = [];
			querySnapshot1.forEach((doc) => {
				const d = doc.data();
				s1.push(d);
			});
			console.log(s1[0]);
			setItem(s1[0]);
		};
		f1();
	}, [router.asPath]);

	const customAddress = item
		? item.collectionAddress.slice(0, 4) +
		  "..." +
		  item.collectionAddress.slice(-4)
		: "";
	if (!item) {
		return <div></div>;
	}

	return (
		<div>
			<GurantarModal
				isOpen={isGulModal}
				closeModal={closeGulModal}
				selectItem={item}
			/>
			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title
						title="詳細情報"
						subTitle={item.collectionName + "一覧"}
						to={"/collection/" + item.collectionAddress}
						isButton={false}
					/>
				</div>
				<div className="flex justify-between mt-8">
					<div>
						<div className="h-[236px] w-[236px] bg-white flex justify-center items-center rounded-2xl shadow-lg">
							<div className="h-[212px] w-[212px] bg-[#CFE4FE] rounded-2xl relative">
								<Image
									src={item.tokenImage}
									fill
									style={{ objectFit: "cover" }}
									className="rounded-xl"
									alt=""
								/>
							</div>
						</div>
						<div className="bg-white p-3 rounded-xl mt-4 shadow-lg">
							<div className="flex justify-between items-center">
								<div className="text-sm font-bold text-gray-600">Address</div>
								<div className="text-sm font-bold text-gray-600">
									{customAddress}
								</div>
							</div>
							<div className="flex justify-between mt-2">
								<div className="text-sm font-bold text-gray-600">TokenId</div>
								<div className="text-sm font-bold text-gray-600">
									{item.tokenId}
								</div>
							</div>
							<div className="flex justify-between mt-2">
								<div className="text-sm font-bold text-gray-600">Amount</div>
								<div className="text-sm font-bold text-gray-600">
									{item.amount}
								</div>
							</div>
						</div>
					</div>
					<div className="w-[460px] ">
						<div>
							<div className="">{item.collectionName}</div>
							<div className="text-2xl font-bold">{item.tokenName}</div>
						</div>
						<div className="grid grid-cols-2 gap-6 bg-white mt-4 rounded-xl p-4 shadow-lg">
							<div>
								<div className="text-xs font-bold text-gray-600">
									1日あたりの借り費用
								</div>
								<div className="text-xl font-bold mt-2">0.01 WETH</div>
								<div className="w-full bg-[#3EA8FF] text-white py-2 flex border-2 border-[#3EA8FF] justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
									Rent
								</div>
							</div>
							<div>
								<div className="text-xs font-bold text-gray-600">担保費用</div>
								<div className="text-xl font-bold mt-2">0.1WETH</div>
								<div className="w-full border-2 border-[#3EA8FF] bg-white text-[#3EA8FF] font-bold py-2 flex justify-center items-center rounded-xl mt-2 cursor-pointer">
									Rent with Guarantor
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
