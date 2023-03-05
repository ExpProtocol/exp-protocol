import { Button } from "./atoms/Button";

export const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => {
    return (
        <div className="w-full h-[100dvh] flex justify-center items-center">
            <div className="p-4 w-full">
                <h1 className="text-6xl font-bold">Some error occured.</h1>
                <p className="text-lg font-semibold">{error.message}</p>
            </div>
        </div>
    );
};
