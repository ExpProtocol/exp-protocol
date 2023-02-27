import Head from "next/head";
import Image from "next/image";
import NftCollectionCard from "../components/NftCollectionCard";
import Title from "../components/Title";

export default function Home() { 
	return (
		<div>
			<Head>
				<title>Exp Protocol</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Title/>
				<div className="flex justify-center ">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<NftCollectionCard />
						<NftCollectionCard />
						<NftCollectionCard />
						<NftCollectionCard />
					</div>

				</div>

			</main>
		</div>
	);
}
