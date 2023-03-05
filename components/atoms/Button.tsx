import { ComponentProps } from "react";
import { useClsx } from "../../hooks/useClsx";

export const Button: React.FC<ComponentProps<"button">> = ({
    className,
    ...props
}) => {
    const buttonClass = useClsx(
        "bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4 transition",
        "active:scale-95",
        className
    );
    return <button className={buttonClass} {...props} />;
};
