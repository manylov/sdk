/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILPWorker,
  ILPWorkerInterface,
} from "../../../../../contracts/pathfinder/interfaces/ILPWorker.sol/ILPWorker";

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
    name: "getUnderlying",
    outputs: [
      {
        internalType: "address",
        name: "tokenIn",
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

export class ILPWorker__factory {
  static readonly abi = _abi;
  static createInterface(): ILPWorkerInterface {
    return new utils.Interface(_abi) as ILPWorkerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILPWorker {
    return new Contract(address, _abi, signerOrProvider) as ILPWorker;
  }
}
