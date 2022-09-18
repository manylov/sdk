/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPathResolver,
  IPathResolverInterface,
} from "../../../../contracts/pathfinder/interfaces/IPathResolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "typeIn",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippagePerStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "force",
            type: "bool",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "depositAdapter",
                type: "address",
              },
              {
                internalType: "address",
                name: "withdrawAdapter",
                type: "address",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "task",
        type: "tuple",
      },
    ],
    name: "findOneTokenPath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippagePerStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "force",
            type: "bool",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "depositAdapter",
                type: "address",
              },
              {
                internalType: "address",
                name: "withdrawAdapter",
                type: "address",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippagePerStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "force",
            type: "bool",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "depositAdapter",
                type: "address",
              },
              {
                internalType: "address",
                name: "withdrawAdapter",
                type: "address",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "task",
        type: "tuple",
      },
    ],
    name: "findOpenStrategyPath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            internalType: "struct Balance[]",
            name: "balances",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adapters",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "slippagePerStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "force",
            type: "bool",
          },
          {
            internalType: "enum TokenType",
            name: "targetType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "depositAdapter",
                type: "address",
              },
              {
                internalType: "address",
                name: "withdrawAdapter",
                type: "address",
              },
            ],
            internalType: "struct TokenAdapters[]",
            name: "foundAdapters",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "gasPriceTargetRAY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initTargetBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct StrategyPathTask",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getComponentId",
    outputs: [
      {
        internalType: "enum PathFinderComponent",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
];

export class IPathResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IPathResolverInterface {
    return new utils.Interface(_abi) as IPathResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPathResolver {
    return new Contract(address, _abi, signerOrProvider) as IPathResolver;
  }
}
