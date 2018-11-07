const contractAdress = '0x19861acc1bd95c15de07520b514078dff4564929'
const contractData = '0x608060405260008055600260015534801561001957600080fd5b506106fb806100296000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663aa8c217c811461005b578063b4ce2f5314610082578063c0abda2a1461008f575b600080fd5b34801561006757600080fd5b506100706100c8565b60408051918252519081900360200190f35b61008d6004356100ce565b005b34801561009b57600080fd5b506100a7600435610404565b60408051928352600160a060020a0390911660208301528051918290030190f35b60005481565b33600090815260066020526040812054819081901561019e5760408051808201825260008082523360208084018281526002805460018101808355828752965191027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace81019190915590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf9091018054600160a060020a039290921673ffffffffffffffffffffffffffffffffffffffff19909216919091179055908252600690529190912060ff8216905592505b506001905060005b60035460ff821610156101ef576003805433919060ff84169081106101c757fe5b600091825260209091200154600160a060020a031614156101e757600091505b6001016101a6565b60018215151461028657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f567569206cc3b26e6720c491e1bba36920c491e1babf6e206b6869207472616f60448201527f207468c6b0e1bb9f6e6700000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051602081019091523381526003805460018101825560009190915290517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055670de0b6b3a764000034101561036b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f54e1bb916920746869e1bb837520312065746865720000000000000000000000604482015290519081900360640190fd5b60008054340181558481526007602090815260408220805460018181018355918452918320909101805473ffffffffffffffffffffffffffffffffffffffff19163317905560058054808301825592527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101859055546003548115156103ef57fe5b0615156103fe576103fe610439565b50505050565b600280548290811061041257fe5b600091825260209091206002909102018054600190910154909150600160a060020a031682565b6001600081815260076020527fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b82880549091908190819081908110156105c557845460005481151561048657fe5b049350600092505b845460ff8416101561054a57600091505b60025460ff8316101561053f57848360ff168154811015156104bd57fe5b60009182526020909120015460028054600160a060020a039092169160ff85169081106104e657fe5b6000918252602090912060016002909202010154600160a060020a03161415610534578360028360ff1681548110151561051c57fe5b60009182526020909120600290910201805490910190555b60019091019061049f565b60019092019161048e565b5060005b60055460ff8216101561059e576007600060058360ff1681548110151561057157fe5b90600052602060002001548152602001908152602001600020600061059691906105eb565b60010161054e565b60008080556105af906005906105eb565b600480546105bf9160039161060c565b506105e3565b6105d1600560006105eb565b600480546105e19160039161060c565b505b505050505050565b50805460008255906000526020600020908101906106099190610681565b50565b8280548282559060005260206000209081019282156106715760005260206000209182015b82811115610671578254825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0390911617825560019283019290910190610631565b5061067d92915061069e565b5090565b61069b91905b8082111561067d5760008155600101610687565b90565b61069b91905b8082111561067d57805473ffffffffffffffffffffffffffffffffffffffff191681556001016106a45600a165627a7a72305820ae35769e9d75e55a742aaabf1f4bde53a88514cc31c084059376e3da1f044d310029'
const abi            = [
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "customers",
		"outputs": [
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
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