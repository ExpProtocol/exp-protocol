import Link from "next/link";
import { FC } from "react";
import CollectionCard from "./CollectionCard";

type Prop = {
	collections: any;
};

const CollectionCardList: FC<Prop> = ({ collections }) => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-[18px] mt-9">
			{collections.map((collection: any, index: number) => {
				return (
					<Link href={"/collection/" + collection.address} key={index}>
						<CollectionCard
							address={collection.address}
							name={collection.name}
							image={collection.image}
						/>
					</Link>
				);
			})}
		</div>
	);
};
export default CollectionCardList;
