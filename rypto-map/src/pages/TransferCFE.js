import React, { useState } from 'react';
import Web3 from 'web3';

const TransferCoffeeCoin = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const contractABI = [
    {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "spender",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "spender",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
    }
    ],
    "name": "decreaseAllowance",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "spender",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
    }
    ],
    "name": "increaseAllowance",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "mint",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
    }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
    },
    {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "transfer",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "sender",
    "type": "address"
    },
    {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
    }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "owner",
    "type": "address"
    },
    {
    "internalType": "address",
    "name": "spender",
    "type": "address"
    }
    ],
    "name": "allowance",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "account",
    "type": "address"
    }
    ],
    "name": "balanceOf",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "decimals",
    "outputs": [
    {
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getOwner",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "name",
    "outputs": [
    {
    "internalType": "string",
    "name": "",
    "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "owner",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "symbol",
    "outputs": [
    {
    "internalType": "string",
    "name": "",
    "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "totalSupply",
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
    ]; 
  const contractAddress = '0xA39cb3e192eE5C4b83Fd6984045eE8F485565AF3';

  // Initialize web3 and set user's account
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setWeb3(web3);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Send tokens
  const sendTokens = async () => {
    if (web3 && account) {
      const tokenContract = new web3.eth.Contract(contractABI, contractAddress);
      const amount = web3.utils.toWei('20', 'ether'); // Adjust based on your token's decimals
      try {
        await tokenContract.methods.transfer(account, amount).send({ from: account });
        alert('Tokens sent!');
      } catch (error) {
        console.error("Error sending tokens", error);
      }
    } else {
      alert("Please connect to MetaMask first!");
    }
  };

  return (
    <div>
        <button onClick={connectWallet}>Connect MetaMask</button>
      <button onClick={sendTokens}>Send 20 Tokens</button>
    </div>
  );
};

export default TransferCoffeeCoin
