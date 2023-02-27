import Head from "next/head";
import LendingNftCard from "../components/LendingNftCard";

export default function Lending() {
    return (
        <div>
            <Head>
                <title>Exp Protocol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="m-0">
                    <div className="m-0 flex justify-center my-8">
                        <div className="flex relative h-12 w-6/12  ...">
                            <div className="absolute left-0 bottom-0 ... ">
                                <p>←Back to Collection Page</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-0 flex justify-center my-8">
                        <div className="flex relative items-center justify-center h-24 w-6/12">
                            <div className="absolute inset-y-0 left-0 w-6/12 ...">
                                <p className="font-bold text-lg ...">Lending</p>
                            </div>
                            <div className="absolute inset-y-0 right-0 w-6/12 ...">
                                <button className="absolute items-center bg-blue-500 hover:bg-blue-700 text-white right-0 font-bold py-2 px-4 rounded ...">
                                    Lend
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="flex relative items-center justify-center h-24 w-6/12">
                        <LendingNftCard />
                        <LendingNftCard />
                        <LendingNftCard />
                        <LendingNftCard />
                    </div>

                </div>

            </main>
        </div>
    )
}