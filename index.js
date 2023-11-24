import { details } from './details.js';
import {ethers} from "ethers";
const contractABI = details.contractABI;
const contractAddress = details.contractAddress;

const provider = new ethers.providers.Web3Provider(window.ethereum);
provider.send("eth_requestAccounts", []);
const contract = ethers.Contract(contractAddress, contractABI, provider.getSigner(address));

async function getBalance() {
    const address = document.getElementById('address').value;
    const key = Number(document.getElementById('key').value);
    const balance = await contract.getBalance(key);
    document.getElementById('balanceDisplay').innerHTML = `Balance: ${balance.toString()}`;
  }
  