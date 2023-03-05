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
import { usePayments } from "../../hooks/usePayments";

type Prop = {
    isOpen: boolean;
    closeModal: () => void;
    selectItem: Nft | undefined;
};

const LendModal: FC<Prop> = ({ isOpen, closeModal, selectItem }) => {
    const [isLoading, setIsLoading] = useState(false);
    const payments = usePayments();
    const { register, watch } = useForm<{
        perPrice: string;
        collateralPrice: string;
    }>();
    const {
        approve,
        isLoading: isApproving,
        isApproved,
    } = useNFTapprove(selectItem?.cAddr, selectItem?.tokenId);

    const { lend: _lend, refetch } = useLend(
        selectItem?.cAddr,
        selectItem?.tokenId,
        payments[0],
        watch().perPrice,
        watch().collateralPrice,
        true
    );

    const lend = async () => {
        try {
            if (
                selectItem?.cAddr &&
                selectItem?.tokenId &&
                watch().perPrice &&
                watch().collateralPrice
            ) {
                setIsLoading(true);
                _lend?.()?.then((tx) => tx.wait());
            }
        } finally {
            setIsLoading(false);
            closeModal();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="text-gray-800">
                <div className="text-center text-lg font-bold">
                    Rental Register
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
                <div className="mt-6">
                    <div className="font-bold mb-2">Price Per Day</div>
                    <Input
                        right="ETH"
                        {...register("perPrice", { required: true })}
                    />
                </div>
                <div className="mt-6">
                    <div className="font-bold mb-2">Collateral Price</div>
                    <Input
                        right="ETH"
                        {...register("collateralPrice", { required: true })}
                    />
                </div>
                <div className="flex justify-end">
                    {_lend && isApproved ? (
                        <Button loading={isLoading} onClick={() => lend()}>
                            Lend
                        </Button>
                    ) : (
                        <Button
                            loading={isApproving}
                            onClick={() => approve?.().then(() => refetch())}
                        >
                            Approve
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default LendModal;
