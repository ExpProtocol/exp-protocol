import { FC } from "react";

export type Collection = {
    address:string
    img: string,
    name:string
}
const  NftCollectionCard : FC<Collection> = ({address,name,img}) => {

    return (
        <div className="block max-w-sm rounded-lg ml-4 bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src={img}
                    alt="" />
            </a>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {name}
                </h5>
            </div>
        </div>
    )
}

export default NftCollectionCard;
