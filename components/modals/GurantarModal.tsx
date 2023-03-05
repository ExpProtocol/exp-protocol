import { Modal } from "../atoms/Modal";
import { FC, useState } from "react";
import Image from "next/image";
import { copy } from "../../utils/copy";
import clsx from "clsx";
import { Input } from "../atoms/Input";
import { imageValidation } from "../../utils/imageValidation";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import { useAccount, useChainId, useContractRead, useSigner } from "wagmi";
import { useRouter } from "next/router";
import { CustomConnectButton } from "../molecules/CustomConnectButton";
import { useSignGuarantor } from "../../hooks/useSignGuarantor";
import { useApprove } from "../../hooks/useApprove";
import { useRentWithGuarantor } from "../../hooks/useRentWithGuarantor";
import LIME_ABI from "../../models/LIME_ABI";
import { BigNumber } from "ethers";
import { useContractAddresses } from "../../hooks/useContractAddresses";
import { usePayments } from "../../hooks/usePayments";

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
    } else if (query.ReturnRequest) {
        return (
            <GurantarModalStep3
                isOpen={Boolean(query.ReturnRequest)}
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
        const url = new URL(location.origin + location.pathname);
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

export const GurantarModalStep2: FC<Prop> = ({
    isOpen,
    closeModal,
    selectItem,
}) => {
    const { query } = useRouter();
    const { data: signer } = useSigner();
    const account = useAccount();
    const [returnLink, setReturnLink] = useState("");
    const { signTypedDataAsync, value, approve } = useSignGuarantor(
        query.lendId as string,
        query.renter as `0x${string}`,
        query.guarantorBalance as string,
        query.guarantorFee as string
    );

    const sign = async () => {
        if (!signTypedDataAsync || !approve) return;
        const tx = await approve();
        if (!tx) return;
        await tx?.wait();
        const signature = await signTypedDataAsync();
        const url = new URL(location.origin + location.pathname);
        url.searchParams.set("ReturnRequest", "true");
        url.searchParams.set("lendId", query.lendId as string);
        url.searchParams.set("guarantor", account.address as `0x${string}`);
        url.searchParams.set("guarantorFee", value.guarantorFee.toString());
        url.searchParams.set("signature", signature);
        url.searchParams.set(
            "guarantorBalance",
            value.guarantorBalance.toString()
        );
        setReturnLink(url.toString());
    };
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <Steps step={2} />
            {!returnLink ? (
                <>
                    <div className="text-[#707B84] mex-auto font-bold mt-4">
                        <div className="text-center">内容が正しいか</div>
                        <div className="text-center">
                            確認して署名してください
                        </div>
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
                        <div className="font-bold text-black mb-2">
                            担保金額
                        </div>
                        <Input
                            right="ETH"
                            disabled
                            value={query.guarantorBalance}
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        {signer ? (
                            <Button onClick={sign}>受け入れる</Button>
                        ) : (
                            <CustomConnectButton />
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div className="text-[#707B84] mex-auto font-bold mt-8">
                        <div className="text-center">生成した署名を</div>
                        <div className="text-center">
                            おくりかえしてください
                        </div>
                    </div>
                    <div>
                        <div className="mt-20">
                            <div className="text-xs font-bold mt-8">
                                署名済みリンク
                            </div>
                            <div className="w-full border bg-[#F1F5F9] border-[#D8E5EF] rounded-md mt-2 overflow-x-auto text-slate-600 p-2">
                                {returnLink}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <Button onClick={() => copy(returnLink)}>Copy</Button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export const GurantarModalStep3: FC<{
    isOpen: boolean;
    closeModal: () => void;
}> = ({ isOpen, closeModal }) => {
    const { query } = useRouter();
    console.log(query.signature);
    const { rentWithGuarantor, refetch } = useRentWithGuarantor(
        query.lendId as string,
        query.guarantor as `0x${string}`,
        query.guarantorBalance as string,
        query.guarantorFee as string,
        query.signature as string
    );
    const Contract = useContractAddresses();
    const { data: lendCondition } = useContractRead({
        address: Contract?.MARKET,
        abi: LIME_ABI,
        functionName: "lendCondition",
        args: [BigNumber.from(query.lendId)],
    });
    const payments = usePayments();
    const price = lendCondition?.totalPrice?.sub(
        query?.guarantorBalance as string
    );
    const { approve } = useApprove(payments[0], price?.toString());
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <Steps step={3} />
            <>
                <div className="text-[#707B84] mex-auto font-bold mt-4">
                    <div className="text-center">内容が正しいか</div>
                    <div className="text-center">確認して借りてください</div>
                </div>
                <div className="w-[120px] h-[120px] relative mx-auto mt-2">
                    {/* <Image
                        src={imageValidation(selectItem?.tokenImage)}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                        alt=""
                    /> */}
                </div>
                <div className="flex justify-center">
                    {rentWithGuarantor ? (
                        <Button
                            onClick={() => {
                                rentWithGuarantor()
                                    .then((tx: any) => tx.wait())
                                    .then(() => console.log("Rent: Success"));
                            }}
                        >
                            Rent With Guarantor
                        </Button>
                    ) : (
                        <Button
                            onClick={() =>
                                approve()
                                    .then((tx: any) => tx.wait())
                                    .then(() => refetch())
                            }
                        >
                            Approve
                        </Button>
                    )}
                </div>
            </>
        </Modal>
    );
};

export default GurantarModalStep1;
