/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILPWorkerOptions,
  ILPWorkerOptionsInterface,
} from "../../../../../contracts/pathfinder/interfaces/ILPWorker.sol/ILPWorkerOptions";

const _abi = [
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
    inputs: [
      {
        internalType: "enum TokenType",
        name: "ttIn",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
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
    name: "getUnderlyings",
    outputs: [
      {
        internalType: "address[]",
        name: "tokensIn",
        type: "address[]",
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
        name: "",
        type: "tuple",
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

export class ILPWorkerOptions__factory {
  static readonly abi = _abi;
  static createInterface(): ILPWorkerOptionsInterface {
    return new utils.Interface(_abi) as ILPWorkerOptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILPWorkerOptions {
    return new Contract(address, _abi, signerOrProvider) as ILPWorkerOptions;
  }
}
