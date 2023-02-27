export default function Title() {
    return (
        <div className="flex justify-center my-8">
            <div className="flex relative items-center justify-center h-24 w-6/12">
                <div className="absolute inset-y-0 left-0 w-6/12 ...">
                    <p className="font-bold text-lg ...">Collection List</p>
                </div>
                <div className="absolute inset-y-0 right-0 w-6/12 ...">
                    <button className="absolute items-center bg-blue-500 hover:bg-blue-700 text-white right-0 font-bold py-2 px-4 rounded ...">
                        Lend
                    </button>
                </div>
            </div>
        </div>
    )
}