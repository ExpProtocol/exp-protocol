import Link from "next/link";
import { FC } from "react";

type Prop = {
	title: string;
	subTitle: string;
};

const Title: FC<Prop> = ({ title, subTitle }) => {
	return (
		<>
			<div className="h-[20px]">
				<Link href="/mypage" className="text-gray-400 text-sm">
					{subTitle == "" ? " " : `←${subTitle}`}
				</Link>
			</div>
			<div className="flex justify-between items-center">
				<div className="font-bold text-lg text-gray-800">{title}</div>
				<Link
					href="/lending"
					className=" text-center font-bold px-4 py-2 rounded-lg bg-[#3EA8FF] text-xs drop-shadow-lg"
				>
					貸出登録
				</Link>
			</div>
		</>
	);
};

export default Title;
