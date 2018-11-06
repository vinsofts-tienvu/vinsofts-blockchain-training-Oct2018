const contractAdress = '0xd47dea30a7587515c83cb4e5ae7d4ec1b2e80231'
const contractData = '0x6080604052600080556002600155600060025534801561001e57600080fd5b50610c098061002e6000396000f3006080604052600436106100985763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630c40d8ec811461009d5780630e35ac15146100c857806349176c06146100f7578063701e5d751461010c5780638c67f5df14610139578063aa8c217c1461014e578063b4ce2f5314610163578063c8691b2a14610178578063cb910c6f146101a5575b600080fd5b3480156100a957600080fd5b506100b26101ba565b6040516100bf9190610bab565b60405180910390f35b3480156100d457600080fd5b506100e86100e33660046109dc565b6101c0565b6040516100bf93929190610b52565b34801561010357600080fd5b506100b261020b565b34801561011857600080fd5b5061012c6101273660046109dc565b610212565b6040516100bf9190610b3e565b34801561014557600080fd5b506100b2610249565b34801561015a57600080fd5b506100b261024f565b6101766101713660046109b6565b610255565b005b34801561018457600080fd5b506101986101933660046109b6565b610567565b6040516100bf9190610b7a565b3480156101b157600080fd5b506101986105ff565b60025481565b600a602052816000526040600020818154811015156101db57fe5b6000918252602090912060039091020180546001820154600290920154600160a060020a03909116935090915083565b6006545b90565b60086020528160005260406000208181548110151561022d57fe5b600091825260209091200154600160a060020a03169150829050565b60015481565b60005481565b33600090815260076020526040812054819081901515610325576040805180820182526000808252336020808401828152600380546001810180835591865295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b60029097029687015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c909501805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0390961695909517909455908252600790529190912060ff8216905592505b506001905060005b60045460ff8216101561037b576004805433919060ff841690811061034e57fe5b6000918252602090912060039091020154600160a060020a0316141561037357600091505b60010161032d565b6001821515146103c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b790610b9b565b60405180910390fd5b6040805160608101825233815260208101868152429282019283526004805460018101825560009190915291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b6003909302928301805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c82015590517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d90910155670de0b6b3a76400003410156104ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b790610b8b565b60008054340181558481526008602090815260408220805460018181018355918452918320909101805473ffffffffffffffffffffffffffffffffffffffff19163317905560068054808301825592527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f9091018590555460045481151561055257fe5b06151561056157610561610681565b50505050565b6060600a6000600184038152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156105f457600084815260209081902060408051606081018252600386029092018054600160a060020a031683526001808201548486015260029091015491830191909152908352909201910161059f565b505050509050919050565b60606004805480602002602001604051908101604052809291908181526020016000905b8282101561067857600084815260209081902060408051606081018252600386029092018054600160a060020a0316835260018082015484860152600290910154918301919091529083529092019101610623565b50505050905090565b6001600081815260086020527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f805490919081908190819081101561086b5784546000548115156106ce57fe5b049350600092505b845460ff841610156107f057600091505b60045460ff831610156107e5576004805460ff841690811061070557fe5b60009182526020909120600390910201548554600160a060020a0390911690869060ff861690811061073357fe5b600091825260209091200154600160a060020a031614156107da576002546000908152600a602052604090206004805460ff851690811061077057fe5b60009182526020808320845460018181018755958552919093206003928302909301805491909202909201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0390931692909217825582810154928201929092556002918201549101555b6001909101906106e7565b6001909201916106d6565b5060005b60065460ff82161015610844576008600060068360ff1681548110151561081757fe5b90600052602060002001548152602001908152602001600020600061083c919061089a565b6001016107f4565b60008080556108559060069061089a565b60058054610865916004916108bb565b50610889565b6108776006600061089a565b60058054610887916004916108bb565b505b505060028054600101905550505050565b50805460008255906000526020600020908101906108b8919061094a565b50565b82805482825590600052602060002090600302810192821561093a5760005260206000209160030282015b8281111561093a578254825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039091161782556001808401549083015560028084015490830155600392830192909101906108e6565b50610946929150610964565b5090565b61020f91905b808211156109465760008155600101610950565b61020f91905b8082111561094657805473ffffffffffffffffffffffffffffffffffffffff19168155600060018201819055600282015560030161096a565b60006109af823561020f565b9392505050565b6000602082840312156109c857600080fd5b60006109d484846109a3565b949350505050565b600080604083850312156109ef57600080fd5b60006109fb85856109a3565b9250506020610a0c858286016109a3565b9150509250929050565b610a1f81610bc3565b82525050565b6000610a3082610bbf565b808452602084019350610a4283610bb9565b60005b82811015610a7257610a58868351610b02565b610a6182610bb9565b606096909601959150600101610a45565b5093949350505050565b601581527f54e1bb916920746869e1bb837520312065746865720000000000000000000000602082015260400190565b602a81527f567569206cc3b26e6720c491e1bba36920c491e1babf6e206b6869207472616f60208201527f207468c6b0e1bb9f6e6700000000000000000000000000000000000000000000604082015260600190565b80516060830190610b138482610a16565b506020820151610b266020850182610b35565b50604082015161056160408501825b610a1f8161020f565b60208101610b4c8284610a16565b92915050565b60608101610b608286610a16565b610b6d6020830185610b35565b6109d46040830184610b35565b602080825281016109af8184610a25565b60208082528101610b4c81610a7c565b60208082528101610b4c81610aac565b60208101610b4c8284610b35565b60200190565b5190565b600160a060020a0316905600a265627a7a72305820dc47a32cc1e9cece479018302474ef8795cc7c74d2e25a17901463df9680f6af6c6578706572696d656e74616cf50037'
const abi =

[
	{
		"constant": true,
		"inputs": [],
		"name": "sovongdatraothuong",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numberToOwnerLS",
		"outputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "number",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLenthCustomers",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "numberToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "soNguoiSeQuayThuong",
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
		"constant": true,
		"inputs": [],
		"name": "amount",
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
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "ChonSo",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_traothuonglanthumay",
				"type": "uint256"
			}
		],
		"name": "getHistory",
		"outputs": [
			{
				"components": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "number",
						"type": "uint256"
					},
					{
						"name": "time",
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
		"name": "getCacuoc",
		"outputs": [
			{
				"components": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "number",
						"type": "uint256"
					},
					{
						"name": "time",
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
	}
]


module.exports = {
	contractAdress: contractAdress,
	abi: abi,
	data: contractData,
};