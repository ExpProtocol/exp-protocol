import { useState } from "react";
import { Nft } from "../types/Nft";
import Title from "../components/atoms/SubHeader";
import LendingCardList from "../components/molecules/LendingCardList";
import LendModal from "../components/modals/LendModal";
import { useOwnedNfts } from "../hooks/useOwnedNfts";

export default function Lending() {
    const { nfts: item, isLoading } = useOwnedNfts();
    const [isLendModal, setIsLendModal] = useState(false);
    const [selectItem, setSelectItem] = useState<Nft>();

    const openLendModal = () => {
        setIsLendModal(true);
    };

    const closeLendModal = () => {
        setIsLendModal(false);
    };

    return (
        <div>
            <LendModal
                isOpen={isLendModal}
                closeModal={closeLendModal}
                selectItem={selectItem}
            />
            <div className="max-w-[720px] mx-auto">
                <div className="mt-16">
                    <Title
                        title="Lend Regist"
                        subTitle="MY PAGE"
                        to="/mypage"
                        isButton={false}
                    />
                </div>
                {isLoading ? (
                    "Loading..."
                ) : (
                    <LendingCardList
                        nfts={item}
                        setSelectItem={setSelectItem}
                        openModal={openLendModal}
                    />
                )}
            </div>
        </div>
    );
}
