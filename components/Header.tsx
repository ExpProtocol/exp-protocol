import Link from "next/link";

export default function Header() {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6 text-gray-800 bg-white">
			<div className="flex items-center mr-6">
				<div className="font-semibold text-lg tracking-tight">Exp Protocol</div>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="flex justify-end items-center gap-6">
				<div className="text-sm lg:flex-grow">
					<a href="#responsive-header" className="text-[#3EA8FF] font-bold">
						My Page
					</a>
				</div>
				<a
					href="#"
					className="text-white text-sm px-4 py-2 bg-[#3EA8FF] rounded-lg"
				>
					Connect Wallet
				</a>
			</div>
		</nav>
	);
}
