import clsx from "clsx";
import { useMemo } from "react";

export const useClsx = (...args: Parameters<typeof clsx>) => {
    const className = useMemo(() => clsx(...args), [args]);
    return className;
};
