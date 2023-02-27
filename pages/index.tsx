import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Exp Protocol</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="relative h-40 w-80 ...">
					<div className="absolute inset-y-0 left-0 h-10 w-30 ...">
						<p>Collection List</p>
					</div>
					<div className="absolute inset-y-0 right-0 h-20 w-16 ...">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Lend
						</button>
					</div>
				</div>

				<div>
					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P</p>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P</p>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P</p>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P</p>
					</a>
				</div>
			</main>
		</div>
	);
}
