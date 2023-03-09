import { Alchemy, getNftsForOwner, NftExcludeFilters } from "@alch/alchemy-sdk";
import { useQuery } from "@tanstack/react-query";
import { useAccount, useNetwork } from "wagmi";
import { useAlchemy } from "./useAlchemy";
import { Nft } from "../types/Nft";

export const useOwnedNfts = () => {
    const account = useAccount();
    const { chain } = useNetwork();
    const alchemy = useAlchemy();
    const { data: nfts, ...other } = useQuery({
        queryKey: ["ownedNfts", chain?.id, account.address],
        queryFn: () =>
            getNftsForOwner(
                alchemy as Alchemy,
                account.address as `0x${string}`,
                {
                    excludeFilters: [NftExcludeFilters.SPAM],
                }
            ).then((nfts) =>
                nfts.ownedNfts.map((nft): Nft => {
                    const nftMedia = nft.media[0] as any;
                    const nftData = {
                        tokenName: nft.title,
                        tokenImage: nftMedia?.thumbnail || "",
                        cAddr: nft.contract.address,
                        tokenId: nft.tokenId,
                    };
                    return nftData;
                })
            ),

        enabled: Boolean(alchemy || chain || account.address),
    });
    return { nfts: nfts || [], ...other };
};
