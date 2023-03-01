import Button from "./Button";

export default function Title() {
    let subtitle = "";
    let title = "";
    return (
        <div className="m-0">
            <div className="m-0 flex justify-center my-8">
                <div className="flex relative h-12 w-6/12  ...">
                    <div className="absolute left-0 bottom-0 ... ">
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-8">
                <div className="flex relative items-center justify-center h-24 w-6/12">
                    <div className="absolute inset-y-0 left-0 w-6/12 ...">
                        <p className="font-bold text-lg ...">{title}</p>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-6/12 ...">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}