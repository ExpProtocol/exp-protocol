import { Modal } from "../atoms/Modal";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Prop = {
    isOpen: boolean;
    closeModal: any;
};

const RentSuccessModal: FC<Prop> = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div className=" text-center font-bold text-2xl mt-6 text-gray-800">
                Rent Success
            </div>
            <div className="text-4xl text-center mt-8">🎉</div>
            <div className="flex justify-center mt-8 mb-6">
                <Link
                    href="/mypage"
                    className="text-center bg-[#3EA8FF] text-white px-4 py-1 rounded-lg font-bold"
                >
                    show my page
                </Link>
            </div>
        </Modal>
    );
};

export default RentSuccessModal;
