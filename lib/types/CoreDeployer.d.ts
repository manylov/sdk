/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CoreDeployerInterface extends ethers.utils.Interface {
  functions: {
    "accountFactory()": FunctionFragment;
    "acl()": FunctionFragment;
    "addPriceFeeds(tuple[],tuple[])": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "contractsRegister()": FunctionFragment;
    "dataCompressor()": FunctionFragment;
    "gearToken()": FunctionFragment;
    "leveragedActions()": FunctionFragment;
    "owner()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wethGateway()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "acl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addPriceFeeds",
    values: [
      { token: string; priceFeed: string }[],
      {
        yVault: string;
        yearnLowerBound: BigNumberish;
        yearnMaxAPY: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dataCompressor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gearToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "leveragedActions",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "wethGateway",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addPriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dataCompressor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gearToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "leveragedActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethGateway",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CoreDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CoreDeployerInterface;

  functions: {
    accountFactory(overrides?: CallOverrides): Promise<[string]>;

    acl(overrides?: CallOverrides): Promise<[string]>;

    addPriceFeeds(
      priceFeeds: { token: string; priceFeed: string }[],
      yPFConfig: {
        yVault: string;
        yearnLowerBound: BigNumberish;
        yearnMaxAPY: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    contractsRegister(overrides?: CallOverrides): Promise<[string]>;

    dataCompressor(overrides?: CallOverrides): Promise<[string]>;

    gearToken(overrides?: CallOverrides): Promise<[string]>;

    leveragedActions(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wethGateway(overrides?: CallOverrides): Promise<[string]>;
  };

  accountFactory(overrides?: CallOverrides): Promise<string>;

  acl(overrides?: CallOverrides): Promise<string>;

  addPriceFeeds(
    priceFeeds: { token: string; priceFeed: string }[],
    yPFConfig: {
      yVault: string;
      yearnLowerBound: BigNumberish;
      yearnMaxAPY: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  contractsRegister(overrides?: CallOverrides): Promise<string>;

  dataCompressor(overrides?: CallOverrides): Promise<string>;

  gearToken(overrides?: CallOverrides): Promise<string>;

  leveragedActions(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wethGateway(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountFactory(overrides?: CallOverrides): Promise<string>;

    acl(overrides?: CallOverrides): Promise<string>;

    addPriceFeeds(
      priceFeeds: { token: string; priceFeed: string }[],
      yPFConfig: {
        yVault: string;
        yearnLowerBound: BigNumberish;
        yearnMaxAPY: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    contractsRegister(overrides?: CallOverrides): Promise<string>;

    dataCompressor(overrides?: CallOverrides): Promise<string>;

    gearToken(overrides?: CallOverrides): Promise<string>;

    leveragedActions(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wethGateway(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    accountFactory(overrides?: CallOverrides): Promise<BigNumber>;

    acl(overrides?: CallOverrides): Promise<BigNumber>;

    addPriceFeeds(
      priceFeeds: { token: string; priceFeed: string }[],
      yPFConfig: {
        yVault: string;
        yearnLowerBound: BigNumberish;
        yearnMaxAPY: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    contractsRegister(overrides?: CallOverrides): Promise<BigNumber>;

    dataCompressor(overrides?: CallOverrides): Promise<BigNumber>;

    gearToken(overrides?: CallOverrides): Promise<BigNumber>;

    leveragedActions(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wethGateway(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addPriceFeeds(
      priceFeeds: { token: string; priceFeed: string }[],
      yPFConfig: {
        yVault: string;
        yearnLowerBound: BigNumberish;
        yearnMaxAPY: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dataCompressor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gearToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    leveragedActions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wethGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
