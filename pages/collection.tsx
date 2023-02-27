import Head from "next/head";

export default function NftCoollectionList() {
	return (
		<div>
			<Head>
				<title>Exp Protocol</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="relative h-20 w-80 ...">
					<div className="absolute top-0 left-0 h-5 w-30 ...">
						<p>←Back to Collection Page</p>
					</div>
					<div className="absolute bottom-0 left-0 h-15 w-30 ...">
						<p>Crypo bar P2P</p>
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
						<p>Crypto bar P2P 11月</p>
						<p>0.16ETH/D</p>
						<p>0.2ETH</p>
						<p>mailicon</p>
						<button>Borrow</button>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P 11月</p>
						<p>0.16ETH/D</p>
						<p>0.2ETH</p>
						<p>mailicon</p>
						<button>Borrow</button>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P 11月</p>
						<p>0.16ETH/D</p>
						<p>0.2ETH</p>
						<p>mailicon</p>
						<button>Borrow</button>
					</a>

					<a href="">
						<img
							className="rounded-t-lg"
							src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
							alt=""
						/>
						<p>Crypto bar P2P 11月</p>
						<p>0.16ETH/D</p>
						<p>0.2ETH</p>
						<p>mailicon</p>
						<button>Borrow</button>
					</a>
				</div>
			</main>
		</div>
	);
}
