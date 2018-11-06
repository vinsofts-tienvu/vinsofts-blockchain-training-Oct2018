const contractAdress = '0xddff9bc038b692cf3228988e31a83a31dc6b7dfd'
const contractData = '0x608060405260008055600260015534801561001957600080fd5b50610a0b806100296000396000f3006080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166349176c06811461007c578063701e5d75146100a75780638c67f5df146100d4578063aa15efc8146100e9578063aa8c217c1461010b578063b4ce2f5314610120575b600080fd5b34801561008857600080fd5b50610091610135565b60405161009e91906109ad565b60405180910390f35b3480156100b357600080fd5b506100c76100c2366004610806565b61013c565b60405161009e9190610968565b3480156100e057600080fd5b50610091610173565b3480156100f557600080fd5b506100fe610179565b60405161009e919061097c565b34801561011757600080fd5b506100916101fb565b61013361012e3660046107e0565b610201565b005b6002545b90565b60076020528160005260406000208181548110151561015757fe5b600091825260209091200154600160a060020a03169150829050565b60015481565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156101f257600084815260209081902060408051606081018252600386029092018054600160a060020a031683526001808201548486015260029091015491830191909152908352909201910161019d565b50505050905090565b60005481565b336000908152600660205260408120548190819015156102d25760408051808201825260008082523360208084018281526002805460018101808355828752965191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81019190915590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf9091018054600160a060020a039290921673ffffffffffffffffffffffffffffffffffffffff19909216919091179055908252600690529190912060ff8216905592505b506001905060005b60035460ff82161015610328576003805433919060ff84169081106102fb57fe5b6000918252602090912060039091020154600160a060020a0316141561032057600091505b6001016102da565b60018215151461036d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103649061099d565b60405180910390fd5b60408051606081018252338152602081018681524292820192835260038054600181018255600082905292517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b93909102928301805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c82015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d90910155670de0b6b3a7640000341015610479576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103649061098d565b60008054340181558481526007602090815260408220805460018181018355918452918320909101805473ffffffffffffffffffffffffffffffffffffffff19163317905560058054808301825592527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101859055546003548115156104fd57fe5b06151561050c5761050c610512565b50505050565b6001600081815260076020527fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828805490919081908190819081101561069e57845460005481151561055f57fe5b049350600092505b845460ff8416101561062357600091505b60025460ff8316101561061857848360ff1681548110151561059657fe5b60009182526020909120015460028054600160a060020a039092169160ff85169081106105bf57fe5b6000918252602090912060016002909202010154600160a060020a0316141561060d578360028360ff168154811015156105f557fe5b60009182526020909120600290910201805490910190555b600190910190610578565b600190920191610567565b5060005b60055460ff82161015610677576007600060058360ff1681548110151561064a57fe5b90600052602060002001548152602001908152602001600020600061066f91906106c4565b600101610627565b6000808055610688906005906106c4565b60048054610698916003916106e5565b506106bc565b6106aa600560006106c4565b600480546106ba916003916106e5565b505b505050505050565b50805460008255906000526020600020908101906106e29190610774565b50565b8280548282559060005260206000209060030281019282156107645760005260206000209160030282015b82811115610764578254825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255600180840154908301556002808401549083015560039283019290910190610710565b5061077092915061078e565b5090565b61013991905b80821115610770576000815560010161077a565b61013991905b8082111561077057805473ffffffffffffffffffffffffffffffffffffffff191681556000600182018190556002820155600301610794565b60006107d98235610139565b9392505050565b6000602082840312156107f257600080fd5b60006107fe84846107cd565b949350505050565b6000806040838503121561081957600080fd5b600061082585856107cd565b9250506020610836858286016107cd565b9150509250929050565b610849816109c5565b82525050565b600061085a826109c1565b80845260208401935061086c836109bb565b60005b8281101561089c5761088286835161092c565b61088b826109bb565b60609690960195915060010161086f565b5093949350505050565b601581527f54e1bb916920746869e1bb837520312065746865720000000000000000000000602082015260400190565b602a81527f567569206cc3b26e6720c491e1bba36920c491e1babf6e206b6869207472616f60208201527f207468c6b0e1bb9f6e6700000000000000000000000000000000000000000000604082015260600190565b8051606083019061093d8482610840565b506020820151610950602085018261095f565b50604082015161050c60408501825b61084981610139565b602081016109768284610840565b92915050565b602080825281016107d9818461084f565b60208082528101610976816108a6565b60208082528101610976816108d6565b60208101610976828461095f565b60200190565b5190565b600160a060020a0316905600a265627a7a7230582003bb895ed1171f835e6931117108d6691e594c608b32e6212776f600d5cd9f176c6578706572696d656e74616cf50037'
const abi            = 

[
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
				"name": "",
				"type": "address[]"
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
			}
		],
		"name": "lichsutraothuongs",
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
		"name": "numberToOwner2",
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
	}
]


module.exports = {
     contractAdress: contractAdress,
	abi: abi,
	data: contractData,
 };