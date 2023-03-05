import { Modal } from "../atoms/Modal";
import { FC, useState } from "react";
import Image from "next/image";
import { copy } from "../../utils/copy";
import clsx from "clsx";
import { Input } from "../atoms/Input";
import { imageValidation } from "../../utils/imageValidation";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import {
    useAccount,
    useChainId,
    useNetwork,
    useSigner,
    useSignTypedData,
} from "wagmi";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CustomConnectButton } from "../molecules/CustomConnectButton";
import { useContractAddresses } from "../../hooks/useContractAddresses";
import { BigNumber } from "ethers";
import { PaymentUtils } from "../../utils/paymentUtil";
import { useSignGuarantor } from "../../hooks/useSignGuarantor";

const Steps: FC<{ step: number }> = ({ step }) => {
    const stepColor = (_step: number) =>
        clsx(
            "rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 font-bold",
            {
                "bg-[#3EA8FF] border-[#3EA8FF] text-white": _step == step,
                "bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF]": _step != step,
            }
        );
    return (
        <div className="flex justify-center gap-10 mt-2 sm:mt-8">
            <div className={stepColor(1)}>1</div>
            <div className={stepColor(2)}>2</div>
            <div className={stepColor(3)}>3</div>
        </div>
    );
};

type Prop = {
    isOpen: boolean;
    closeModal: any;
    selectItem: any;
};

export const GurantarModal: FC<Prop> = ({ isOpen, ...props }) => {
    const { query } = useRouter();

    if (query.gurarantorRequest) {
        return (
            <GurantarModalStep2
                isOpen={Boolean(query.gurarantorRequest)}
                {...props}
            />
        );
    } else {
        return <GurantarModalStep1 isOpen={isOpen} {...props} />;
    }
};

export const GurantarModalStep1: FC<Prop> = ({
    isOpen,
    closeModal,
    selectItem,
}) => {
    const chainId = useChainId();
    const account = useAccount();
    const { register, handleSubmit } = useForm<{
        guarantorFee: string;
        guarantorBalance: string;
    }>();
    const [step, setStep] = useState(0);
    const [invite, setInviteUrl] = useState("");

    const generateInviteUrl = (input: {
        guarantorFee: string;
        guarantorBalance: string;
    }) => {
        console.log(selectItem);
        const url = new URL(location.href);
        url.searchParams.append("guarantorFee", input.guarantorFee);
        url.searchParams.append("guarantorBalance", input.guarantorBalance);
        url.searchParams.append("lendId", selectItem?.lendId);
        url.searchParams.append("renter", account.address || "");
        url.searchParams.append("gurarantorRequest", "true");
        url.searchParams.append("chainId", String(chainId));
        setInviteUrl(url.toString());
        setStep(1);
    };
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            {step == 0 ? (
                <>
                    <Steps step={1} />
                    <div className="text-[#707B84] mex-auto font-bold mt-4">
                        <div className="text-center">
                            連帯保証人に依頼したい
                        </div>
                        <div className="text-center">
                            金額と手数料を設定してください
                        </div>
                    </div>
                    <div className="w-[120px] h-[120px] relative mx-auto mt-6">
                        <Image
                            src={imageValidation(selectItem?.tokenImage)}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                            alt=""
                        />
                    </div>
                    <div className="mt-4">
                        <div className="font-bold mt-8 text-black mb-2">
                            利息
                        </div>
                        <Input
                            right="%"
                            {...register("guarantorFee", { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <div className="font-bold text-black mb-2">
                            担保金額
                        </div>
                        <Input
                            right="ETH"
                            {...register("guarantorBalance", {
                                required: true,
                            })}
                        />
                    </div>
                    <div className="flex justify-end">
                        <div
                            onClick={() => {
                                handleSubmit(generateInviteUrl)();
                            }}
                            className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
                        >
                            Next
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center gap-10 mt-4">
                        <Steps step={1} />
                    </div>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">招待リンクを</div>
                        <div className="text-center">
                            連帯保証人に送ってください
                        </div>
                    </div>
                    <div>
                        <div className="mt-20">
                            <div className="text-xs font-bold mt-8">
                                招待リンク
                            </div>
                            <div className="w-full border bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2 overflow-x-auto text-slate-600 p-2">
                                {invite}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <Button onClick={() => copy(invite)}>Copy</Button>
                    </div>
                </>
            )}
        </Modal>
    );
};

// if (step == 2) {
//     return (
//         <Modal isOpen={isOpen} onClose={closeModal}>
//             <div className="w-[280px] mx-auto">
//                 <div className="flex justify-center gap-10 mt-10">
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
//                         1
//                     </div>
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
//                         2
//                     </div>
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
//                         3
//                     </div>
//                 </div>
//                 <div className="text-[#707B84] mex-auto font-bold mt-8">
//                     <div className="text-center">内容が正しいか</div>
//                     <div className="text-center">
//                         確認して署名してください
//                     </div>
//                 </div>
//                 <div className="w-[120px] h-[120px] relative mx-auto mt-6">
//                     <Image
//                         src={selectItem?.tokenImage}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         className="rounded-xl"
//                         alt=""
//                     />
//                 </div>
//                 <div>
//                     <div>
//                         <div className="text-xs font-bold mt-8">
//                             1日あたり賃料
//                         </div>
//                         <input
//                             onChange={() => {}}
//                             className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
//                         ></input>
//                     </div>
//                     <div>
//                         <div className="text-xs font-bold mt-8">
//                             1日あたり賃料
//                         </div>
//                         <input
//                             onChange={() => {}}
//                             className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
//                         ></input>
//                     </div>
//                 </div>
//                 <div className="flex justify-end ">
//                     <div
//                         onClick={() => {
//                             setStep(3);
//                         }}
//                         className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4"
//                     >
//                         受け入れる
//                     </div>
//                 </div>
//             </div>
//         </Modal>
//     );
// } else if (step == 3) {
//     return (
//         <Modal isOpen={isOpen} onClose={closeModal}>
//             <div className="w-[280px] mx-auto">
//                 <div className="flex justify-center gap-10 mt-10">
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
//                         1
//                     </div>
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#F1F5F9] border-[#D8E5EF] text-[#D8E5EF] font-bold">
//                         2
//                     </div>
//                     <div className="rounded-full w-[30px] h-[30px] flex justify-center items-center border-2 bg-[#3EA8FF] border-[#3EA8FF] text-white font-bold">
//                         3
//                     </div>
//                 </div>
//                 <div className="text-[#707B84] mex-auto font-bold mt-8">
//                     <div className="text-center">
//                         連帯保証人に依頼したい
//                     </div>
//                     <div className="text-center">
//                         {" "}
//                         金額と手数料を設定してください
//                     </div>
//                 </div>
//                 <div className="w-[120px] h-[120px] relative mx-auto mt-6">
//                     <Image
//                         src={selectItem?.tokenImage}
//                         fill
//                         style={{ objectFit: "cover" }}
//                         className="rounded-xl"
//                         alt=""
//                     />
//                 </div>
//                 <div>
//                     <div>
//                         <div className="text-xs font-bold mt-8">
//                             1日あたり賃料
//                         </div>
//                         <input
//                             onChange={() => {}}
//                             className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
//                         ></input>
//                     </div>
//                     <div>
//                         <div className="text-xs font-bold mt-8">
//                             1日あたり賃料
//                         </div>
//                         <input
//                             onChange={() => {}}
//                             className="w-full border h-[30px] bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2"
//                         ></input>
//                     </div>
//                 </div>
//                 <div className="flex justify-end ">
//                     <div className="bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4">
//                         Next
//                     </div>
//                 </div>
//             </div>
//         </Modal>
//     );
// } else {
//     return <div></div>;
// }
export const GurantarModalStep2: FC<Prop> = ({
    isOpen,
    closeModal,
    selectItem,
}) => {
    const { query } = useRouter();
    const { data: signer } = useSigner();
    const { signature, signTypedDataAsync } = useSignGuarantor(
        query.lendId as string,
        query.renter as `0x${string}`,
        query.guarantorBalance as string,
        query.guarantorFee as string
    );

    const sign = () => {
        if (!signTypedDataAsync) return;
        const signature = signTypedDataAsync();
        console.log(signature);
    };
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <Steps step={2} />
            <div className="text-[#707B84] mex-auto font-bold mt-4">
                <div className="text-center">内容が正しいか</div>
                <div className="text-center">確認して署名してください</div>
            </div>
            <div className="w-[120px] h-[120px] relative mx-auto mt-2">
                <Image
                    src={imageValidation(selectItem?.tokenImage)}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                    alt=""
                />
            </div>
            <div className="mt-2">
                <div className="font-bold text-black mb-2">相手</div>
                <Input disabled value={query.renter} />
            </div>
            <div className="mt-2">
                <div className="font-bold text-black mb-2">利息</div>
                <Input right="%" disabled value={query.guarantorFee} />
            </div>
            <div className="mt-2">
                <div className="font-bold text-black mb-2">担保金額</div>
                <Input right="ETH" disabled value={query.guarantorBalance} />
            </div>
            <div className="flex justify-end mt-4">
                {signer ? (
                    <Button onClick={sign}>受け入れる</Button>
                ) : (
                    <CustomConnectButton />
                )}
            </div>
        </Modal>
    );
};

export const GurantarModalStep3: FC<{
    isOpen: boolean;
    closeModal: () => void;
}> = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div></div>
        </Modal>
    );
};

export default GurantarModalStep1;
