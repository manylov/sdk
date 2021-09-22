/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ACL, ACLInterface } from "../ACL";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "PausableAdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "PausableAdminRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "UnpausableAdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "UnpausableAdminRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "addPausableAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "addUnpausableAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isConfigurator",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "isPausableAdmin",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "isUnpausableAdmin",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pausableAdminSet",
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
        name: "admin",
        type: "address",
      },
    ],
    name: "removePausableAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "removeUnpausableAdmin",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "unpausableAdminSet",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b610e57806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063819ad68e11610071578063819ad68e1461026f5780638da5cb5b146102b3578063adce758d146102e7578063ba306df11461032b578063d4eb5db01461036f578063f2fde38b146103c9576100b4565b806335914829146100b95780633a41ec64146101135780634910832f1461016d5780635f259aba146101b1578063715018a61461020b5780637328181914610215575b600080fd5b6100fb600480360360208110156100cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040d565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042d565b60405180821515815260200191505060405180910390f35b6101af6004803603602081101561018357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610483565b005b6101f3600480360360208110156101c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105cf565b60405180821515815260200191505060405180910390f35b61021361060e565b005b6102576004803603602081101561022b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077b565b60405180821515815260200191505060405180910390f35b6102b16004803603602081101561028557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079b565b005b6102bb6108e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610329600480360360208110156102fd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610911565b005b61036d6004803603602081101561034157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a5e565b005b6103b16004803603602081101561038557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bab565b60405180821515815260200191505060405180910390f35b61040b600480360360208110156103df57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c01565b005b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b61048b610df3565b73ffffffffffffffffffffffffffffffffffffffff166104a96108e8565b73ffffffffffffffffffffffffffffffffffffffff1614610532576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fae26b1cfe9454ba87274a4e8330b6654684362d0f3d7bbd17f7449a1d38387c660405160405180910390a250565b60006105d96108e8565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b610616610df3565b73ffffffffffffffffffffffffffffffffffffffff166106346108e8565b73ffffffffffffffffffffffffffffffffffffffff16146106bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60026020528060005260406000206000915054906101000a900460ff1681565b6107a3610df3565b73ffffffffffffffffffffffffffffffffffffffff166107c16108e8565b73ffffffffffffffffffffffffffffffffffffffff161461084a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fd400da6c0c0a894dacc0981730b88af0545d00272ee8fff1437bf560ff245fc460405160405180910390a250565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610919610df3565b73ffffffffffffffffffffffffffffffffffffffff166109376108e8565b73ffffffffffffffffffffffffffffffffffffffff16146109c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f1998397e7203f7baca9d6f41b9e4da6e768daac5caad4234fb9bf5869d27154560405160405180910390a250565b610a66610df3565b73ffffffffffffffffffffffffffffffffffffffff16610a846108e8565b73ffffffffffffffffffffffffffffffffffffffff1614610b0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f28b01395b7e25d20552a0c8dc8ecd3b1d4abc986f14dad7885fd45b6fd73c8d960405160405180910390a250565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b610c09610df3565b73ffffffffffffffffffffffffffffffffffffffff16610c276108e8565b73ffffffffffffffffffffffffffffffffffffffff1614610cb0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610dfc6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60003390509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220336251c5a2ad41f53146b9f7b02e532051c44ca98eb032279317f98b74fa863a64736f6c63430007060033";

export class ACL__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ACL> {
    return super.deploy(overrides || {}) as Promise<ACL>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ACL {
    return super.attach(address) as ACL;
  }
  connect(signer: Signer): ACL__factory {
    return super.connect(signer) as ACL__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLInterface {
    return new utils.Interface(_abi) as ACLInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ACL {
    return new Contract(address, _abi, signerOrProvider) as ACL;
  }
}
