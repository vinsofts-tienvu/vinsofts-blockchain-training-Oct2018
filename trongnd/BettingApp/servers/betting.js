const Web3= require('web3');
const Tx = require('ethereumjs-tx');
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/d0e9991cafe044a7979d1f4998e0a4ff"));
// chay metamask
const web3 = new Web3("http://localhost:7545");// lay address + privateKey = ganache
// chay local
const abi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_numbeOwner",
				"type": "uint256"
			}
		],
		"name": "changeNumberOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInfoBetting",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"name": "id",
						"type": "address"
					},
					{
						"name": "number",
						"type": "uint256"
					},
					{
						"name": "money",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMoneyContract",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sendMoneyToContract",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHistory",
		"outputs": [
			{
				"components": [
					{
						"name": "time",
						"type": "uint256"
					},
					{
						"name": "id",
						"type": "address"
					},
					{
						"name": "number",
						"type": "uint256"
					},
					{
						"name": "addmoney",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "registered",
		"type": "event"
	}
];
const addressContract='0xe958d39c97216b45b46dc45c846931f12e99d78f';
BettingContract= new web3.eth.Contract(abi, addressContract);
module.exports = {
	web3, Tx, BettingContract, addressContract
}
