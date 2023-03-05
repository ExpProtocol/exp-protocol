import Form from "../Form";
import { Modal } from "../atoms/Modal";
import { FC, useState } from "react";
import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa";

type Prop = {
    isOpen: boolean;
    closeModal: any;
    selectItem: any;
};

const GurantarModal: FC<Prop> = ({ isOpen, closeModal, selectItem }) => {
    const [step, setStep] = useState(0);
    if (step == 0) {
        return (
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="w-[280px] mx-auto">
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
                            1
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            2
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            3
                        </div>
                    </div>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">
                            連帯保証人に依頼したい
                        </div>
                        <div className="text-center">
                            {" "}
                            金額と手数料を設定してください
                        </div>
                    </div>
                    <div className="w-[120px] h-[120px] relative mx-auto mt-6">
                        <Image
                            src={selectItem?.tokenImage}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                            alt=""
                        />
                    </div>
                    <div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div
                            onClick={() => {
                                setStep(1);
                            }}
                            className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
                        >
                            Next
                        </div>
                    </div>
                </div>
            </Modal>
        );
    } else if (step == 1) {
        return (
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="w-[280px] mx-auto">
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
                            1
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            2
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            3
                        </div>
                    </div>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">招待リンクを</div>
                        <div className="text-center">
                            連帯保証人に送ってください
                        </div>
                    </div>
                    <div className="relative flex justify-center mt-20">
                        <FaRegPaperPlane size={100} />
                    </div>
                    <div>
                        <div className="mt-20">
                            <div className="text-xs font-bold mt-8">
                                招待リンク
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div
                            onClick={() => {
                                setStep(2);
                            }}
                            className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
                        >
                            受け入れる
                        </div>
                    </div>
                </div>
            </Modal>
        );
    } else if (step == 2) {
        return (
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="w-[280px] mx-auto">
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            1
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
                            2
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            3
                        </div>
                    </div>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">内容が正しいか</div>
                        <div className="text-center">
                            確認して署名してください
                        </div>
                    </div>
                    <div className="w-[120px] h-[120px] relative mx-auto mt-6">
                        <Image
                            src={selectItem?.tokenImage}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                            alt=""
                        />
                    </div>
                    <div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div
                            onClick={() => {
                                setStep(3);
                            }}
                            className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
                        >
                            受け入れる
                        </div>
                    </div>
                </div>
            </Modal>
        );
    } else if (step == 3) {
        return (
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="w-[280px] mx-auto">
                    <div className="flex justify-center gap-10 mt-10">
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            1
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
                            2
                        </div>
                        <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
                            3
                        </div>
                    </div>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">
                            連帯保証人に依頼したい
                        </div>
                        <div className="text-center">
                            {" "}
                            金額と手数料を設定してください
                        </div>
                    </div>
                    <div className="w-[120px] h-[120px] relative mx-auto mt-6">
                        <Image
                            src={selectItem?.tokenImage}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                            alt=""
                        />
                    </div>
                    <div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                        <div>
                            <div className="text-xs font-bold mt-8">
                                1日あたり賃料
                            </div>
                            <input
                                onChange={() => {}}
                                className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
                            ></input>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4">
                            Next
                        </div>
                    </div>
                </div>
            </Modal>
        );
    } else {
        return <div></div>;
    }
};

export default GurantarModal;
