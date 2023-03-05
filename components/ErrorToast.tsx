import { useEffect } from "react";
import { toast } from "react-toastify";

export const ErrorToast: React.FC<{ error: Error }> = ({ error }) => {
    useEffect(() => {
        if (!error) return;
        toast(error.message, {
            type: "error",
        });
    }, [error]);
    return <></>;
};
