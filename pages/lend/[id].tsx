import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { GurantarModal } from "../../components/modals/GurantarModal";
import Title from "../../components/atoms/SubHeader";
import { db } from "../../libs/Firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAccount, useContractRead, useNetwork } from "wagmi";
import { useRent } from "../../hooks/useRent";
import { etherValidation } from "../../utils/etherValidation";
import { LendType } from "../../types/LendType";
import { useApprove } from "../../hooks/useApprove";
import { addressValidation } from "../../utils/addressValidation";
import LendSuccessModal from "../../components/modals/RentSuccessModal";
import LIME_ABI from "../../models/LIME_ABI.json";
import { imageValidation } from "../../utils/imageValidation";
import { useMediaQuery } from "react-responsive";
import { useContractAddresses } from "../../hooks/useContractAddresses";
import { usePayments } from "../../hooks/usePayments";
import FunctionButton from "../../components/atoms/FuctionButton";

export default function NftCoollectionList() {
    const network = useNetwork();
    const [isGulModal, setIsGulModal] = useState(false);
    const [isLendSuccessModal, setIsLendSuccessModal] = useState(false);
    const router = useRouter();
    const [chainId, setChainId] = useState("0");
    const [lendId, setLendId] = useState("0");
    const [item, setItem] = useState<LendType>();
    const payments = usePayments();
    const { rent, refetch } = useRent(lendId);
    const { approve } = useApprove(payments[0], item?.collateralPrice);
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const { address } = useAccount();

    const Contract = useContractAddresses();

    const { data: isBorrowable } = useContractRead({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: "isBorrowable",
        args: [lendId],
    });

    const openGulModal = () => {
        setIsGulModal(true);
    };

    const closeGulModal = () => {
        setIsGulModal(false);
    };

    const openLendSuccessModal = () => {
        setIsLendSuccessModal(true);
    };

    const closeLendSuccessModal = () => {
        setIsLendSuccessModal(false);
    };

    const customPerPrice = item ? etherValidation(item.perPrice) : "";
    const customCollateralPrice = item
        ? etherValidation(item.collateralPrice)
        : "";

    useEffect(() => {
        const f1 = async () => {
            const [_, chainId, tmpLendId] =
                /\/lend\/(\d+)-(\d+)(.*)/.exec(router.asPath) || [];
            setLendId(tmpLendId);
            setChainId(chainId);
            const q1 = await query(
                collection(db, "lend"),
                where("chainId", "==", chainId),
                where("lendId", "==", tmpLendId)
            );
            const querySnapshot1 = await getDocs(q1);
            let s1: any = [];
            querySnapshot1.forEach((doc) => {
                const d = doc.data();
                s1.push(d);
            });

            setItem(s1[0]);
        };
        f1();
    }, [router.asPath]);

    if (!item) {
        return <div></div>;
    }

    return (
        <div>
            <GurantarModal
                isOpen={isGulModal}
                closeModal={closeGulModal}
                selectItem={item}
            />
            <LendSuccessModal
                isOpen={isLendSuccessModal}
                closeModal={closeLendSuccessModal}
            />
            <div className="max-w-[720px] mx-auto">
                <div className="mt-16">
                    <Title
                        title="詳細情報"
                        subTitle={item.collectionName + "一覧"}
                        to={"/collection/" + item.collectionAddress}
                        isButton={false}
                    />
                </div>
                {isDesktopOrLaptop ? (
                    <div className="flex justify-between flex-wrap mt-8">
                        <div>
                            <div className="h-[236px] w-[236px] bg-white flex justify-center items-center rounded-2xl shadow-lg">
                                <div className="h-[212px] w-[212px] bg-[#CFE4FE] rounded-2xl relative">
                                    <Image
                                        src={imageValidation(item.tokenImage)}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-xl"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-xl mt-4 shadow-lg">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-600">
                                        ChanId
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {chainId}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        Address
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {addressValidation(
                                            item.collectionAddress
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        TokenId
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {item.tokenId.slice(0, 4)}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        Amount
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {/* {item.amount} */}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        LendId
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {item.lendId}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        Lender
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {addressValidation(item.lender)}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-sm font-bold text-gray-600">
                                        Renter
                                    </div>
                                    <div className="text-sm font-bold text-gray-600">
                                        {addressValidation(item.renter)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[460px] ">
                            <div className="text-gray-800">
                                <div className="">{item.collectionName}</div>
                                <div className="text-2xl font-bold">
                                    {item.tokenName}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 bg-white mt-4 text-gray-800 rounded-xl p-4 shadow-lg">
                                <div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Price Per Day
                                    </div>
                                    <div className="text-xl font-bold mt-2">
                                        {customPerPrice} WETH
                                    </div>
                                    {isBorrowable ? (
                                        <FunctionButton
                                            isRent={item.isRent}
                                            lender={item.lender}
                                            renter={item.renter}
                                            lendId={item.lendId}
                                            tokenId={item.tokenId}
                                            collateralPrice={
                                                item.collateralPrice
                                            }
                                            startTime={item.startTime}
                                            openLendSuccessModal={
                                                openLendSuccessModal
                                            }
                                            pricePerSec={item.perPrice}
                                        />
                                    ) : Number(chainId) ===
                                      network.chain?.id ? (
                                        <button className="w-full bg-gray-300 text-white py-2 flex border-2 border-gray-400 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                                            Now Renting
                                        </button>
                                    ) : (
                                        <button className="w-full bg-gray-300 text-white py-2 flex border-2 border-gray-400 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer">
                                            Chain is Different
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <>
                                        <div className="text-xs font-bold text-gray-600">
                                            Collateral Price
                                        </div>
                                        <div className="text-xl font-bold mt-2">
                                            {customCollateralPrice} WETH
                                        </div>

                                        {isBorrowable &&
                                            address?.toLocaleLowerCase() !=
                                                item.renter &&
                                            address?.toLocaleLowerCase() !=
                                                item.lender && (
                                                <button
                                                    onClick={openGulModal}
                                                    className="w-full border-2 border-theme-100 bg-white text-theme-100 font-bold py-2 flex justify-center items-center rounded-xl mt-2 cursor-pointer"
                                                >
                                                    Rent with Guarantor
                                                </button>
                                            )}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-center mt-12">
                            <div className="h-[236px] w-[236px] bg-white flex justify-center items-center rounded-2xl shadow-lg">
                                <div className="h-[212px] w-[212px] bg-[#CFE4FE] rounded-2xl relative">
                                    <Image
                                        src={imageValidation(item.tokenImage)}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-xl"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mx-8 mt-8">
                            <div className="text-gray-800">
                                <div className="">{item.collectionName}</div>
                                <div className="text-2xl font-bold">
                                    {item.tokenName}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 bg-white mt-4 text-gray-800 rounded-xl p-4 shadow-lg">
                                <div>
                                    <div className="text-xs font-bold text-gray-600">
                                        1日あたりの借り費用
                                    </div>
                                    <div className="text-xl font-bold mt-2">
                                        {customPerPrice} WETH
                                    </div>
                                    {rent ? (
                                        <button
                                            onClick={() =>
                                                rent()
                                                    ?.then((tx: any) =>
                                                        tx.wait()
                                                    )
                                                    .then(() =>
                                                        openLendSuccessModal()
                                                    )
                                            }
                                            className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                                        >
                                            Rent
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                approve()
                                                    .then((tx: any) =>
                                                        tx.wait()
                                                    )
                                                    .then(() => refetch())
                                            }
                                            className="w-full bg-theme-100 text-white py-2 flex border-2 border-theme-100 justify-center font-bold items-center rounded-xl mt-2 cursor-pointer"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-600">
                                        担保費用
                                    </div>
                                    <div className="text-xl font-bold mt-2">
                                        {customCollateralPrice} WETH
                                    </div>
                                    <button
                                        onClick={openGulModal}
                                        className="w-full border-2 border-theme-100 bg-white text-theme-100 font-bold py-2 flex justify-center items-center rounded-xl mt-2 cursor-pointer"
                                    >
                                        with Guarantor
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-xl mt-4 mx-8  shadow-lg mb-10">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-600">
                                    ChainId
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {chainId}
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    Address
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {addressValidation(item.collectionAddress)}
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    TokenId
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {item.tokenId.slice(0, 4)}
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    Amount
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {/* {item.amount} */}
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    LendId
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {item.lendId}
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    Lender
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {addressValidation(item.lender)}
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="text-sm font-bold text-gray-600">
                                    Renter
                                </div>
                                <div className="text-sm font-bold text-gray-600">
                                    {addressValidation(item.renter)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
