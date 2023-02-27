import Head from "next/head";
import MyNftCard from "../components/MyNftCard";


export default function MyPage() {
	return (
		<div>
			<Head>
				<title>Exp Protocol</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="flex justify-center my-8">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<div className="absolute inset-y-0 left-0 w-6/12 ...">
							<p className="font-bold text-lg ...">My Page</p>
						</div>
						<div className="absolute inset-y-0 right-0 w-6/12 ...">
							<button className="absolute items-center bg-blue-500 hover:bg-blue-700 text-white right-0 font-bold py-2 px-4 rounded ...">
								Lend
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-center ">
					<div className="flex relative items-center justify-center h-24 w-6/12">
						<MyNftCard />
						<MyNftCard />
						<MyNftCard />
						<MyNftCard />
					</div>

				</div>

			</main>
		</div>
	);
}
