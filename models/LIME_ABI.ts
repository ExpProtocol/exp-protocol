export default [
    {
        inputs: [
            {
                internalType: "address",
                name: "receiver_",
                type: "address",
            },
            {
                internalType: "address",
                name: "erc721Adapter_",
                type: "address",
            },
            {
                internalType: "address",
                name: "erc1155Adapter_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "FeeClaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                indexed: true,
                internalType: "address",
                name: "lender",
                type: "address",
            },
        ],
        name: "LendCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                indexed: true,
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "adapter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                indexed: false,
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "LendRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint96",
                name: "oldMinimumRentTime",
                type: "uint96",
            },
            {
                indexed: false,
                internalType: "uint96",
                name: "newMinimumRentTime",
                type: "uint96",
            },
        ],
        name: "MinimumRentTimeUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint16",
                name: "oldrotocolFee",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "newProtocolFee",
                type: "uint16",
            },
        ],
        name: "ProtocolFeeUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldReceiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newReceiver",
                type: "address",
            },
        ],
        name: "ReceiverUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                indexed: true,
                internalType: "address",
                name: "lender",
                type: "address",
            },
        ],
        name: "RentClaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                indexed: true,
                internalType: "address",
                name: "renter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
        ],
        name: "RentReturned",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                indexed: true,
                internalType: "address",
                name: "renter",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "guarantor",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint120",
                name: "guarantorBalance",
                type: "uint120",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "guarantorFee",
                type: "uint16",
            },
        ],
        name: "RentStarted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "supported",
                type: "bool",
            },
        ],
        name: "SupportedInterfaceIdUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "supported",
                type: "bool",
            },
        ],
        name: "SupportedReceiveSelectorUpdated",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "GUARANTOR_REQUEST_TYPE_HASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PROTOCOL_OWNER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "cancelLend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "payment_",
                type: "address",
            },
        ],
        name: "claimFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        name: "collectedFees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "erc1155Adapter",
        outputs: [
            {
                internalType: "contract ERC1155Adapter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "erc721Adapter",
        outputs: [
            {
                internalType: "contract ERC721Adapter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getRoleMember",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleMemberCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "isBorrowable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
        ],
        name: "lend1155",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
        ],
        name: "lend721",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "lendCondition",
        outputs: [
            {
                internalType: "address",
                name: "lender",
                type: "address",
            },
            {
                internalType: "address",
                name: "adapter",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lendCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minimalRentTime",
        outputs: [
            {
                internalType: "uint96",
                name: "",
                type: "uint96",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "protocolFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "receiver",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IAdapter",
                name: "adapter",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "registerToLend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "rent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "rentCondition",
        outputs: [
            {
                internalType: "address",
                name: "payment",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "pricePerSec",
                type: "uint120",
            },
            {
                internalType: "uint120",
                name: "totalPrice",
                type: "uint120",
            },
            {
                internalType: "bool",
                name: "autoReRegister",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
            {
                internalType: "address",
                name: "guarantor",
                type: "address",
            },
            {
                internalType: "uint120",
                name: "guarantorBalance",
                type: "uint120",
            },
            {
                internalType: "uint16",
                name: "guarantorFee",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "rentWithGuarantor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "lendId",
                type: "uint96",
            },
        ],
        name: "returnToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "receiver_",
                type: "address",
            },
        ],
        name: "setReceiver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
            {
                internalType: "bool",
                name: "supported",
                type: "bool",
            },
        ],
        name: "setSupportedInterface",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
            {
                internalType: "bool",
                name: "supported",
                type: "bool",
            },
        ],
        name: "setSupportedReceiveSelector",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "supportsReceiveSelector",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint96",
                name: "minimalRentTime_",
                type: "uint96",
            },
        ],
        name: "updateMinimalRentTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "rentFee_",
                type: "uint16",
            },
        ],
        name: "updateRentFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "usedNonces",
        outputs: [
            {
                internalType: "uint24",
                name: "",
                type: "uint24",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
] as const;
