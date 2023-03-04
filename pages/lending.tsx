import Head from "next/head";
import { useEffect, useState } from "react";
import NftCard from "../components/molecules/NftCard";
import {
	Network,
	Alchemy,
	initializeAlchemy,
	getNftsForOwner,
} from "@alch/alchemy-sdk";
import { useAccount } from "wagmi";
import Title from "../components/atoms/Title";
import NftCardList from "../components/molecules/NftCardList";
import { mockNfts } from "../mocks/nfts";
import LendingCardList from "../components/molecules/LendingCardList";
import LendModal from "../components/modals/LendModal";
import { useLend } from "../hooks/useLend";
import { useNFTapprove } from "../hooks/useNFTapprove";

type Nft = {
	tokenName: string;
	tokenImage: string;
	cAddr: string;
	tokenId: string;
};

const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY
	? process.env.NEXT_PUBLIC_ALCHEMY_KEY
	: "";

export default function Lending() {
	const [item, setItem] = useState<Nft[] | null>(null);
	const { address } = useAccount();
	const [isLendModal, setIsLendModal] = useState(false);
	const [selectItem, setSelectItem] = useState<Nft>();
	const [pricePerSec, setPricePerSec] = useState("0");
	const [collateralPrice, setCollateralPrice] = useState("0");
	const { lend } = useLend(
		selectItem ? selectItem?.cAddr : "",
		selectItem ? selectItem?.tokenId : "",
		"0xC124a7F913F102AdFd971cD593270049d161fcA2",
		pricePerSec,
		collateralPrice,
		true
	);

	const { approve } = useNFTapprove(
		selectItem ? selectItem?.cAddr : "",
		selectItem ? selectItem?.tokenId : "0"
	);

	const openLendModal = () => {
		setIsLendModal(true);
	};

	const closeLendModal = () => {
		setIsLendModal(false);
	};

	useEffect(() => {
		if (!address) return;
		const fetchNFT = async () => {
			const settings = {
				apiKey: ALCHEMY_KEY,
				network: Network.MATIC_MUMBAI,
				maxRetries: 10,
			};
			const alchemy: Alchemy = initializeAlchemy(settings);
			const tmpNFTs = await getNftsForOwner(alchemy, address, {
				contractAddresses: [],
			});
			const s: Nft[] = tmpNFTs.ownedNfts.map((item) => {
				const tmpMedia: any = item.media[0];
				const tmpData: Nft = {
					tokenName: item.title,
					tokenImage:
						tmpMedia?.thumbnail !== undefined ? tmpMedia.thumbnail : "",
					cAddr: item.contract.address,
					tokenId: item.tokenId,
				};
				return tmpData;
			});
			console.log(s);
			setItem(s);
		};
		fetchNFT();
	}, [address]);

	return (
		<div>
			<LendModal
				isOpen={isLendModal}
				closeModal={closeLendModal}
				selectItem={selectItem}
				lend={lend}
				setPricePerSec={setPricePerSec}
				setCollateralPrice={setCollateralPrice}
				approve={approve}
			/>
			<div className="max-w-[720px] mx-auto">
				<div className="mt-16">
					<Title
						title="貸出登録"
						subTitle="MY PAGE"
						to="/mypage"
						isButton={false}
					/>
				</div>
				<LendingCardList
					nfts={item}
					setSelectItem={setSelectItem}
					openModal={openLendModal}
				/>
			</div>
		</div>
	);
}
