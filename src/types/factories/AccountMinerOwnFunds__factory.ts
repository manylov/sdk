/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccountMinerOwnFunds,
  AccountMinerOwnFundsInterface,
} from "../AccountMinerOwnFunds";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BalanceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "accountFactory",
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
    name: "kind",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "trader",
        type: "address",
      },
    ],
    name: "mineAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "unpause",
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
  "0x60a060405234801561001057600080fd5b50604051610e01380380610e018339818101604052602081101561003357600080fd5b810190808051906020019092919050505080818073ffffffffffffffffffffffffffffffffffffffff16639068a8686040518163ffffffff1660e01b815260040160206040518083038186803b15801561008c57600080fd5b505afa1580156100a0573d6000803e3d6000fd5b505050506040513d60208110156100b657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505060008060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff1663087376956040518163ffffffff1660e01b815260040160206040518083038186803b15801561015e57600080fd5b505afa158015610172573d6000803e3d6000fd5b505050506040513d602081101561018857600080fd5b8101908080519060200190929190505050600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600180819055505060805160601c610bfd610204600039806104b552806106845250610bfd6000f3fe6080604052600436106100595760003560e01c806304baa00b146101b65780633f4ba83a146101e15780635c975abb146101f8578063687cd9c1146102255780638456cb59146102665780639849e42f1461027d576101b1565b366101b1576100666102ce565b156100d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b60026001541415610152576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60026001819055503373ffffffffffffffffffffffffffffffffffffffff167fe96dd7a15a3974e8e7d5eb80de2cb6fd69907a1ee089170cd976cfffaedfa8ac346040518082815260200191505060405180910390a260018081905550005b600080fd5b3480156101c257600080fd5b506101cb6102e4565b6040518082815260200191505060405180910390f35b3480156101ed57600080fd5b506101f6610308565b005b34801561020457600080fd5b5061020d6102ce565b60405180821515815260200191505060405180910390f35b34801561023157600080fd5b5061023a6104b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027257600080fd5b5061027b6104d7565b005b34801561028957600080fd5b506102cc600480360360208110156102a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610682565b005b60008060009054906101000a900460ff16905090565b7f6f776e000000000000000000000000000000000000000000000000000000000081565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d4eb5db0336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561039157600080fd5b505afa1580156103a5573d6000803e3d6000fd5b505050506040513d60208110156103bb57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f4c31000000000000000000000000000000000000000000000000000000000000815250906104a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561046d578082015181840152602081019050610452565b50505050905090810190601f16801561049a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506104b1610842565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a41ec64336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561056057600080fd5b505afa158015610574573d6000803e3d6000fd5b505050506040513d602081101561058a57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f4c3100000000000000000000000000000000000000000000000000000000000081525090610677576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561063c578082015181840152602081019050610621565b50505050905090810190601f1680156106695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061068061092c565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f4633000000000000000000000000000000000000000000000000000000000000815250906107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610772578082015181840152602081019050610757565b50505050905090810190601f16801561079f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060026001541415610827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b600260018190555061083881610a17565b6001808190555050565b61084a6102ce565b6108bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6108ff610a4b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6109346102ce565b156109a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586109ea610a4b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b610a4867016345785d8a00008273ffffffffffffffffffffffffffffffffffffffff16610a5390919063ffffffff16565b50565b600033905090565b80471015610ac9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d8060008114610b29576040519150601f19603f3d011682016040523d82523d6000602084013e610b2e565b606091505b5050905080610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610b8e603a913960400191505060405180910390fd5b50505056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a26469706673582212204232a1d398eb617be38dff9d4583314eab1491a8e54c70bf6ad11a72b27d039364736f6c63430007060033";

export class AccountMinerOwnFunds__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccountMinerOwnFunds> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<AccountMinerOwnFunds>;
  }
  getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  attach(address: string): AccountMinerOwnFunds {
    return super.attach(address) as AccountMinerOwnFunds;
  }
  connect(signer: Signer): AccountMinerOwnFunds__factory {
    return super.connect(signer) as AccountMinerOwnFunds__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountMinerOwnFundsInterface {
    return new utils.Interface(_abi) as AccountMinerOwnFundsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountMinerOwnFunds {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccountMinerOwnFunds;
  }
}
