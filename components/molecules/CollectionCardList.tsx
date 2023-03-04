import Link from "next/link";
import { FC } from "react";
import { CollectionTypes } from "../../types/CollectionType";
import CollectionCard from "./CollectionCard";

type Prop = {
	collections: CollectionTypes[];
};

const CollectionCardList: FC<Prop> = ({ collections }) => {
	return (
		<div className="flex flex-wrap items-center gap-[18px] mt-9">
			{collections?.map((collection: CollectionTypes, index: number) => {
				return (
					<Link
						href={"/collection/" + collection.collectionAddress}
						key={index}
					>
						<CollectionCard
							address={collection.collectionAddress}
							name={collection.collectionName}
							image={collection.collectionImage}
						/>
					</Link>
				);
			})}
		</div>
	);
};
export default CollectionCardList;
