/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurveV1Adapter,
  CurveV1AdapterInterface,
} from "../CurveV1Adapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nCoins",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "creditFilter",
    outputs: [
      {
        internalType: "contract ICreditFilter",
        name: "",
        type: "address",
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
        internalType: "contract ICreditManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "curvePoolAddress",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610df7380380610df78339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561010157600080fd5b505afa158015610115573d6000803e3d6000fd5b505050506040513d602081101561012b57600080fd5b8101908080519060200190929190505050600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561022757600080fd5b505afa15801561023b573d6000803e3d6000fd5b505050506040513d602081101561025157600080fd5b8101908080519060200190929190505050905060005b838110156103695760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c6610657836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156102e557600080fd5b505af11580156102f9573d6000803e3d6000fd5b505050506040513d602081101561030f57600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561035b57600193505b508080600101915050610267565b50816040518060400160405280600281526020017f565500000000000000000000000000000000000000000000000000000000000081525090610447576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561040c5780820151818401526020810190506103f1565b50505050905090810190601f1680156104395780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050505061099b8061045c6000396000f3fe6080604052600436106100435760003560e01c80633df021241461005c5780637a9f93f3146100bb578063c12c21c0146100fc578063f93f515b1461013d57610052565b366100525761005061017e565b005b61005a61017e565b005b34801561006857600080fd5b506100b96004803603608081101561007f57600080fd5b810190808035600f0b90602001909291908035600f0b90602001909291908035906020019092919080359060200190929190505050610198565b005b3480156100c757600080fd5b506100d06108a4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010857600080fd5b506101116108c8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014957600080fd5b506101526108ee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610186610914565b610196610191610916565b61093f565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561022357600080fd5b505afa158015610237573d6000803e3d6000fd5b505050506040513d602081101561024d57600080fd5b8101908080519060200190929190505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c661065787600f0b6040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156102d957600080fd5b505af11580156102ed573d6000803e3d6000fd5b505050506040513d602081101561030357600080fd5b8101908080519060200190929190505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c661065787600f0b6040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561038f57600080fd5b505af11580156103a3573d6000803e3d6000fd5b505050506040513d60208110156103b957600080fd5b81019080805190602001909291905050509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab8460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b505050506000878787876040516024018085600f0b815260200184600f0b81526020018381526020018281526020019450505050506040516020818303038152906040527f3df02124000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a3360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610663578082015181840152602081019050610648565b50505050905090810190601f1680156106905780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156106ef57600080fd5b810190808051604051939291908464010000000082111561070f57600080fd5b8382019150602082018581111561072557600080fd5b825186600182028301116401000000008211171561074257600080fd5b8083526020830192505050908051906020019080838360005b8381101561077657808201518184015260208101905061075b565b50505050905090810190601f1680156107a35780820380516001836020036101000a031916815260200191505b5060405250505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d8585858a8a6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200195505050505050600060405180830381600087803b15801561088257600080fd5b505af1158015610896573d6000803e3d6000fd5b505050505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3660008037600080366000845af43d6000803e8060008114610960573d6000f35b3d6000fdfea2646970667358221220c0bd6448b860b132c6bae3864035d7f30d07987afc023faeb50dad13a9f8321f64736f6c63430007060033";

export class CurveV1Adapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _creditManager: string,
    _curvePool: string,
    _nCoins: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurveV1Adapter> {
    return super.deploy(
      _creditManager,
      _curvePool,
      _nCoins,
      overrides || {}
    ) as Promise<CurveV1Adapter>;
  }
  getDeployTransaction(
    _creditManager: string,
    _curvePool: string,
    _nCoins: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _curvePool,
      _nCoins,
      overrides || {}
    );
  }
  attach(address: string): CurveV1Adapter {
    return super.attach(address) as CurveV1Adapter;
  }
  connect(signer: Signer): CurveV1Adapter__factory {
    return super.connect(signer) as CurveV1Adapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveV1AdapterInterface {
    return new utils.Interface(_abi) as CurveV1AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveV1Adapter {
    return new Contract(address, _abi, signerOrProvider) as CurveV1Adapter;
  }
}
