import Link from "next/link";
import { CustomConnectButton } from "../molecules/CustomConnectButton";

export default function Header() {
	return (
		<nav className="flex items-center justify-between text-gray-800 h-[62px] bg-white px-5">
			<Link href="/" className="font-semibold">
				Lime
			</Link>
			<div className="flex justify-end items-center gap-6">
				<Link href="/mypage" className="text-[#3EA8FF] font-bold text-sm">
					My Page
				</Link>
				<CustomConnectButton />
			</div>
		</nav>
	);
}
