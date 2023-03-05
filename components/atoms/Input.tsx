import clsx from "clsx";
import { ComponentProps } from "react";
import { useClsx } from "../../hooks/useClsx";

export const Input: React.FC<ComponentProps<"input">> = ({
    className,
    ...props
}) => {
    const inputClass = useClsx(
        "w-full border bg-[#F1F5F9] border border-[#D8E5EF] rounded-md text-lg px-4 py-2",
        className
    );
    return <input className={inputClass} {...props} />;
};
