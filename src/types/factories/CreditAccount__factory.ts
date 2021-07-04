/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CreditAccount } from "../CreditAccount";

export class CreditAccount__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CreditAccount> {
    return super.deploy(overrides || {}) as Promise<CreditAccount>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreditAccount {
    return super.attach(address) as CreditAccount;
  }
  connect(signer: Signer): CreditAccount__factory {
    return super.connect(signer) as CreditAccount__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditAccount {
    return new Contract(address, _abi, signerOrProvider) as CreditAccount;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapContract",
        type: "address",
      },
    ],
    name: "approveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowedAmount",
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
    name: "creditManager",
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
    inputs: [],
    name: "cumulativeIndexAtOpen",
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
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cumulativeIndexAtOpen",
        type: "uint256",
      },
    ],
    name: "setGenericParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "since",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_borrowedAmount",
        type: "uint256",
      },
    ],
    name: "updateBorrowedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b611777806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063779048131161008c578063beabacc811610066578063beabacc81461038a578063c12c21c0146103f8578063c4d66de81461042c578063f2fde38b14610470576100cf565b806377904813146102f05780638da5cb5b1461031e578063abaf48f514610352576100cf565b806303105b04146100d457806317d11a15146101385780631afbb7a4146101565780631cff79cd146101745780633dc54b40146102c8578063715018a6146102e6575b600080fd5b610136600480360360408110156100ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104b4565b005b61014061065d565b6040518082815260200191505060405180910390f35b61015e610663565b6040518082815260200191505060405180910390f35b61024d6004803603604081101561018a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101c757600080fd5b8201836020820111156101d957600080fd5b803590602001918460018302840111640100000000831117156101fb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610669565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028d578082015181840152602081019050610272565b50505050905090810190601f1680156102ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d06107ca565b6040518082815260200191505060405180910390f35b6102ee6107d0565b005b61031c6004803603602081101561030657600080fd5b810190808035906020019092919050505061093d565b005b610326610a75565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103886004803603604081101561036857600080fd5b810190808035906020019092919080359060200190929190505050610a9e565b005b6103f6600480360360608110156103a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bde565b005b610400610d3c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61046e6004803603602081101561044257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d62565b005b6104b26004803603602081101561048657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e5c565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f4131000000000000000000000000000000000000000000000000000000000000815250906105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156105a657808201518184015260208101905061058b565b50505050905090810190601f1680156105d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061060e8160008473ffffffffffffffffffffffffffffffffffffffff1661104e9092919063ffffffff16565b610659817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8473ffffffffffffffffffffffffffffffffffffffff1661104e9092919063ffffffff16565b5050565b60035481565b60025481565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f413100000000000000000000000000000000000000000000000000000000000081525090610798576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561075d578082015181840152602081019050610742565b50505050905090810190601f16801561078a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506107c2828473ffffffffffffffffffffffffffffffffffffffff1661121390919063ffffffff16565b905092915050565b60045481565b6107d861125d565b73ffffffffffffffffffffffffffffffffffffffff166107f6610a75565b73ffffffffffffffffffffffffffffffffffffffff161461087f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f413100000000000000000000000000000000000000000000000000000000000081525090610a6a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a2f578082015181840152602081019050610a14565b50505050905090810190601f168015610a5c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508060028190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f413100000000000000000000000000000000000000000000000000000000000081525090610bcb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b90578082015181840152602081019050610b75565b50505050905090810190601f168015610bbd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081600281905550806003819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f413100000000000000000000000000000000000000000000000000000000000081525090610d0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cd0578082015181840152602081019050610cb5565b50505050905090810190601f168015610cfd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610d3782828573ffffffffffffffffffffffffffffffffffffffff166112659092919063ffffffff16565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610d6a61125d565b73ffffffffffffffffffffffffffffffffffffffff16610d88610a75565b73ffffffffffffffffffffffffffffffffffffffff1614610e11576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504360048190555050565b610e6461125d565b73ffffffffffffffffffffffffffffffffffffffff16610e82610a75565b73ffffffffffffffffffffffffffffffffffffffff1614610f0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116966026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081148061111c575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156110df57600080fd5b505afa1580156110f3573d6000803e3d6000fd5b505050506040513d602081101561110957600080fd5b8101908080519060200190929190505050145b611171576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061170c6036913960400191505060405180910390fd5b61120e8363095ea7b360e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611307565b505050565b606061125583836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c656400008152506113f6565b905092915050565b600033905090565b6113028363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611307565b505050565b6000611369826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113f69092919063ffffffff16565b90506000815111156113f15780806020019051602081101561138a57600080fd5b81019080805190602001909291905050506113f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806116e2602a913960400191505060405180910390fd5b5b505050565b6060611405848460008561140e565b90509392505050565b606082471015611469576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116bc6026913960400191505060405180910390fd5b611472856115b6565b6114e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106115335780518252602082019150602081019050602083039250611510565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611595576040519150601f19603f3d011682016040523d82523d6000602084013e61159a565b606091505b50915091506115aa8282866115c9565b92505050949350505050565b600080823b905060008111915050919050565b606083156115d95782905061168e565b6000835111156115ec5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611653578082015181840152602081019050611638565b50505050905090810190601f1680156116805780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220a57a298beda3d466d6eea96c3111c1ce2b00af24c98231e104b4306b0097861764736f6c63430007060033";
