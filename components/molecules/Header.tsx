import Link from "next/link";
import { CustomConnectButton } from "./CustomConnectButton";

export default function Header() {
	return (
		<nav className="flex items-center justify-between text-gray-800 h-[62px] bg-white px-5">
			<div className="font-semibold">Exp Protocol</div>
			<div className="flex justify-end items-center gap-6">
				<Link href="/mypage" className="text-[#3EA8FF] font-bold text-sm">
					My Page
				</Link>
				<CustomConnectButton />
			</div>
		</nav>
	);
}
