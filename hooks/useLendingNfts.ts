import { useQuery } from "@tanstack/react-query";
import { useAccount, useNetwork } from "wagmi";
import { collection, getDocs, query, where } from "@firebase/firestore";

import { db } from "../libs/Firebase";
import { LendType } from "../types/LendType";

export const useLendingNfts = () => {
    const account = useAccount();
    const { chain } = useNetwork();

    const { data: nfts, ...other } = useQuery({
        queryKey: ["lendingNfts", chain?.id, account.address],
        queryFn: () => {
            return getDocs(
                query(
                    collection(db, "lend"),
                    where("lender", "==", account.address?.toLocaleLowerCase()),
                    where("isActive", "==", true)
                )
            ).then((res) => res.docs.map((doc) => doc.data() as LendType));
        },

        enabled: Boolean(chain || account.address),
    });
    return { nfts: nfts || [], ...other };
};
