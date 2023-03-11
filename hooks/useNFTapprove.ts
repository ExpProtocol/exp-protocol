import { BigNumber } from "ethers";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useAccount
} from "wagmi";
import { erc721ABI } from "wagmi";
import { error } from "../utils/error";
import { useContractAddresses } from "./useContractAddresses";
import { useERC1155Abi } from "./useERC1155Abi";


export const useNFTapprove = (
    cAddr: string | undefined,
    tokenId: string | undefined,
    tokenType: string | undefined
) => {    
    const Contract = useContractAddresses();
    const { address } = useAccount();
    const ERC1155Abi = useERC1155Abi();
    let abi = erc721ABI;
    let readFunctionName:any = "getApproved";
    let writeFunctionName:any = "approve";
    let readArgs:any = [
        BigNumber.from(tokenId || "0")
    ];
    let writeArgs:any = [
        Contract?.MARKET as `0x${string}`,
        BigNumber.from(tokenId || "0")
    ];
    if (tokenType === "ERC1155") {
        abi =  ERC1155Abi;
        readFunctionName = "isApprovedForAll";
        writeFunctionName = "setApprovalForAll";
        readArgs = [
            address as `0x${string}`,
            Contract?.MARKET as `0x${string}`
        ]
        writeArgs = [
            Contract?.MARKET as `0x${string}`,
            true
        ]            
    }    
    const { data: approveFor } = useContractRead({
        address: cAddr as `0x${string}`,
        abi: abi,
        functionName: readFunctionName,
        args: readArgs,
        enabled: Boolean(cAddr && tokenId),
    });
    const { config: lendConfig } = usePrepareContractWrite({
        address: cAddr as `0x${string}`,
        abi: abi,
        functionName: writeFunctionName,
        args: writeArgs,
        enabled: Boolean(cAddr && tokenId),
        // onError: error,
    });
    

    const isApproved = approveFor === Contract?.MARKET || approveFor;
    const { writeAsync: _approve, isLoading } = useContractWrite(lendConfig);
    const approve = async () => {
        return await _approve?.().catch(error);
    };
    return { approve, isApproved, isLoading };
};
