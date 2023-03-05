import { ComponentProps } from "react";
import { useClsx } from "../../hooks/useClsx";

export const Button: React.FC<
    ComponentProps<"button"> & { loading?: boolean }
> = ({ className, loading, ...props }) => {
    const buttonClass = useClsx(
        "bg-[#3EA8FF] px-4 py-2 text-white rounded-lg font-bold mt-4 transition",
        "active:scale-95 disabled:opacity-50",
        className
    );
    if (loading)
        return (
            <button className={buttonClass} {...props} disabled>
                Loading...
            </button>
        );
    return <button className={buttonClass} {...props} />;
};
