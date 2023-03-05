import { FC, useState } from "react";
import { imageValidation } from "../../utils/imageValidation";
import Image from "next/image";
import { Input } from "../atoms/Input";
import { Modal } from "../atoms/Modal";
import { useForm } from "react-hook-form";
import { useLend } from "../../hooks/useLend";
import { Nft } from "../../types/Nft";
import { useNFTapprove } from "../../hooks/useNFTapprove";
import { Button } from "../atoms/Button";

type Prop = {
    isOpen: boolean;
    closeModal: () => void;
    selectItem: Nft | undefined;
};

const LendModal: FC<Prop> = ({ isOpen, closeModal, selectItem }) => {
    const { register, watch } = useForm<{
        perPrice: string;
        collateralPrice: string;
    }>();
    const { approve } = useNFTapprove(selectItem?.cAddr, selectItem?.tokenId);
    const { lend } = useLend(
        selectItem ? selectItem?.cAddr : "",
        selectItem ? selectItem?.tokenId : "",
        "0xC124a7F913F102AdFd971cD593270049d161fcA2",
        watch().perPrice,
        watch().collateralPrice,
        true
    );

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="text-gray-800">
                <div className="text-center text-lg font-bold">
                    レンタル登録
                </div>
                <div className="w-[120px] h-[120px] relative mx-auto mt-4">
                    <Image
                        src={imageValidation(selectItem?.tokenImage)}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl bg-[#F1F5F9]"
                        alt="tokenImage"
                    />
                </div>
                <div className="mt-8">
                    <div className="font-bold mt-8">1日あたり賃料</div>
                    <Input className="mt-2" {...register("perPrice")} />
                </div>
                <div className="mt-8">
                    <div className="font-bold">担保金額</div>
                    <Input className="mt-2" {...register("perPrice")} />
                </div>
                <div className="flex justify-center ">
                    {lend ? (
                        <Button onClick={() => lend()}>Lend</Button>
                    ) : (
                        <Button onClick={() => approve?.()}>Approve</Button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default LendModal;
