export const details = {
    "contractABI": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_phrase",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_keyAgain",
                    "type": "uint256"
                }
            ],
            "name": "changeKey",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_key",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_phrase",
                    "type": "string"
                }
            ],
            "name": "createWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_key",
                    "type": "uint256"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_key",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_key",
                    "type": "uint256"
                }
            ],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "contractAddress": "0x8ce022fcec5bac85260d4ba495456dc9d4149afe"
 }
 