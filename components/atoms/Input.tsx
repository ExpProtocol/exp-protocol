import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<
    HTMLInputElement,
    ComponentProps<"input"> & {
        right?: React.ReactNode;
    }
>(({ right, className, ...props }, ref) => {
    return (
        <div className="flex w-full border bg-[#F1F5F9] border-[#D8E5EF] rounded-md text-lg px-4 py-2 text-black focus:ring-2 focus:ring-[[#3EA8FF]">
            <input
                ref={ref}
                className={clsx(
                    "bg-[#F1F5F9] focus:outline-none flex-1",
                    className
                )}
                {...props}
            />
            {right && (
                <div className="text-center text-black font-bold">{right}</div>
            )}
        </div>
    );
});
