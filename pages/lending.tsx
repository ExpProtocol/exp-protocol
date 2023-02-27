import Head from "next/head";
import { useEffect, useState } from "react";
import LendingNftCard from "../components/LendingNftCard";
import {
	Network,
	Alchemy,
	initializeAlchemy,
	getNftsForOwner,
} from "@alch/alchemy-sdk";
import { useAccount } from "wagmi";

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
								<p className="font-bold text-lg ...">Lending</p>
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
						<LendingNftCard />
						<LendingNftCard />
						<LendingNftCard />
						<LendingNftCard />
					</div>
				</div>
			</main>
		</div>
	);
}
