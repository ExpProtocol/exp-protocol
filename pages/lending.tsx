import Head from "next/head";
import { useEffect, useState } from "react";
import NftCard from "../components/NftCard";
import {
	Network,
	Alchemy,
	initializeAlchemy,
	getNftsForOwner,
} from "@alch/alchemy-sdk";
import { useAccount } from "wagmi";
import Button from "../components/Button";
import Title from "../components/Title";

type Nft = {
	name: string;
	image: string;
	cAddr: string;
	tokenId: string;
};

export default function Lending() {
	const [item, setItem] = useState<Nft[] | null>(null);
	const { address } = useAccount();

	useEffect(() => {
		if (!address) return;
		const fetchNFT = async () => {
			const settings = {
				apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
				network: Network.ETH_MAINNET,
				maxRetries: 10,
			};
			const alchemy: Alchemy = initializeAlchemy(settings);
			const tmpNFTs = await getNftsForOwner(alchemy, address, {
				contractAddresses: [],
			});
			const s: Nft[] = tmpNFTs.ownedNfts.map((item) => {
				const tmpMedia: any = item.media[0];
				const tmpData: Nft = {
					name: item.title,
					image: tmpMedia.thumbnail !== undefined ? tmpMedia.thumbnail : "",
					cAddr: item.contract.address,
					tokenId: item.tokenId,
				};
				return tmpData;
			});
			setItem(s);
		};
		fetchNFT();
	}, [address]);

	return (
		<div>
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
