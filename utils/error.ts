import { toast } from "react-toastify";

export const error = (e: unknown) => {
    if (e instanceof Error) {
        console.error(e.message);
        toast.error(e.message);
    } else {
        console.error(e);
        toast.error("An unknown error occurred");
    }
};
