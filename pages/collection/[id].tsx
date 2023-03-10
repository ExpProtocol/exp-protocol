import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import GurantarModal from "../../components/modals/GurantarModal";
import Title from "../../components/atoms/SubHeader";
import NftCardList from "../../components/molecules/NftCardList";
import { db } from "../../libs/Firebase";
import { useRouter } from "next/router";
import LoadCard from "../../components/atoms/LoadCard";

export default function NftCoollectionList() {
    const [isGulModal, setIsGulModal] = useState(false);
    const [selectItem, setSelectItem] = useState();
    const [collectionInfo, setCollectionInfo] = useState<any>();
    const router = useRouter();

    const openGulModal = () => {
        setIsGulModal(true);
    };

    const closeGulModal = () => {
        setIsGulModal(false);
    };

    //TODO NFT情報の取得
    const [item, setItem] = useState();

    useEffect(() => {
        const f1 = async () => {
            const tmpPath = router.asPath.split("/")[2];

            const q1 = await query(
                collection(db, "lend"),
                where("collectionAddress", "==", tmpPath),
                where("isActive", "==", true)
            );
            const querySnapshot1 = await getDocs(q1);
            let s1: any = [];
            querySnapshot1.forEach((doc) => {
                const d = doc.data();
                s1.push(d);
            });
            setItem(s1);
            const q2 = await query(
                collection(db, "collection"),
                where("collectionAddress", "==", tmpPath)
            );
            const querySnapshot2 = await getDocs(q2);
            let s2: any = [];
            querySnapshot2.forEach((doc) => {
                const d = doc.data();
                s2.push(d);
            });
            setCollectionInfo(s2[0]);
        };
        f1();
    }, [router.asPath]);

    if (!collectionInfo) {
        return (
            <div>
                <div className="max-w-[720px] mx-auto">
                    <div className="mt-16">
                        <div className="mx-12 md:mx-auto">
                            <div className=" animate-pulse">
                                <div className="h-[20px] w-36 bg-slate-100 drop-shadow-lg rounded-full"></div>
                            </div>

                            <div className="flex justify-between items-center"></div>
                        </div>
                    </div>
                    <LoadCard />
                </div>
            </div>
        );
    }

    return (
        <div>
            <GurantarModal
                isOpen={isGulModal}
                closeModal={closeGulModal}
                selectItem={selectItem}
            />
            <div className="max-w-[720px] mx-auto">
                <div className="mt-16">
                    <Title
                        title={collectionInfo.collectionName + "一覧"}
                        subTitle="collection"
                        to="/"
                        isButton={true}
                    />
                </div>
                <NftCardList
                    nfts={item}
                    setSelectItem={setSelectItem}
                    openModal={openGulModal}
                />
            </div>
        </div>
    );
}
