import Button from "./Button";
import { FC } from "react";

export type Nft = {
    address: string,
    name: string,
    day_price: string,
    price: string
}

const NftCard : FC<Nft> = ({address,name,day_price,price}) => {
    return (
        <div className="block max-w-sm rounded-lg ml-4 bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
            </a>
            <p>{name}</p>
            <p>{day_price}</p>
            <p>{price}</p>
            <p>mailicon</p>
            <Button />
        </div>
    )
}

export default NftCard;