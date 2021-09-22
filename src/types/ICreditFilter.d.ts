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

interface ICreditFilterInterface extends ethers.utils.Interface {
  functions: {
    "allowContract(address,address)": FunctionFragment;
    "allowToken(address,uint256)": FunctionFragment;
    "allowedContracts(uint256)": FunctionFragment;
    "allowedContractsCount()": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "allowedTokensCount()": FunctionFragment;
    "calcCreditAccountAccruedInterest(address)": FunctionFragment;
    "calcCreditAccountHealthFactor(address)": FunctionFragment;
    "calcThresholdWeightedValue(address)": FunctionFragment;
    "calcTotalValue(address)": FunctionFragment;
    "checkAndEnableToken(address,address)": FunctionFragment;
    "checkCollateralChange(address,address,address,uint256,uint256)": FunctionFragment;
    "checkMultiTokenCollateral(address,uint256[],uint256[],address[],address[])": FunctionFragment;
    "connectCreditManager(address)": FunctionFragment;
    "contractToAdapter(address)": FunctionFragment;
    "enabledTokens(address)": FunctionFragment;
    "forbidContract(address)": FunctionFragment;
    "getCreditAccountTokenById(address,uint256)": FunctionFragment;
    "initEnabledTokens(address)": FunctionFragment;
    "isTokenAllowed(address)": FunctionFragment;
    "liquidationThresholds(address)": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "revertIfTokenNotAllowed(address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "updateUnderlyingTokenLiquidationThreshold()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContractsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokensCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcCreditAccountAccruedInterest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcCreditAccountHealthFactor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcThresholdWeightedValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calcTotalValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAndEnableToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkCollateralChange",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMultiTokenCollateral",
    values: [string, BigNumberish[], BigNumberish[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "connectCreditManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "contractToAdapter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "forbidContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountTokenById",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initEnabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationThresholds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revertIfTokenNotAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "allowContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedContractsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokensCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcCreditAccountAccruedInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcCreditAccountHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcThresholdWeightedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcTotalValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAndEnableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkCollateralChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkMultiTokenCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectCreditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractToAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forbidContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountTokenById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initEnabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationThresholds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertIfTokenNotAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    data: BytesLike
  ): Result;

  events: {
    "ContractAllowed(address,address)": EventFragment;
    "ContractForbidden(address)": EventFragment;
    "NewFastCheckParameters(uint256,uint256)": EventFragment;
    "TokenAllowed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractForbidden"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFastCheckParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
}

export class ICreditFilter extends BaseContract {
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

  interface: ICreditFilterInterface;

  functions: {
    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkMultiTokenCollateral(
      creditAccount: string,
      amountIn: BigNumberish[],
      amountOut: BigNumberish[],
      tokenIn: string[],
      tokenOut: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidationThresholds(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowContract(
    targetContract: string,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowToken(
    token: string,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedContracts(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

  allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

  calcCreditAccountAccruedInterest(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcCreditAccountHealthFactor(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcThresholdWeightedValue(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcTotalValue(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkAndEnableToken(
    creditAccount: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkCollateralChange(
    creditAccount: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkMultiTokenCollateral(
    creditAccount: string,
    amountIn: BigNumberish[],
    amountOut: BigNumberish[],
    tokenIn: string[],
    tokenOut: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  connectCreditManager(
    poolService: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractToAdapter(
    allowedContract: string,
    overrides?: CallOverrides
  ): Promise<string>;

  enabledTokens(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  forbidContract(
    targetContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreditAccountTokenById(
    creditAccount: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      token: string;
      balance: BigNumber;
      tv: BigNumber;
      twv: BigNumber;
    }
  >;

  initEnabledTokens(
    creditAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

  liquidationThresholds(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  revertIfTokenNotAllowed(
    token: string,
    overrides?: CallOverrides
  ): Promise<void>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  updateUnderlyingTokenLiquidationThreshold(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMultiTokenCollateral(
      creditAccount: string,
      amountIn: BigNumberish[],
      amountOut: BigNumberish[],
      tokenIn: string[],
      tokenOut: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    connectCreditManager(
      poolService: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<string>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forbidContract(
      targetContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        token: string;
        balance: BigNumber;
        tv: BigNumber;
        twv: BigNumber;
      }
    >;

    initEnabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

    liquidationThresholds(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ContractAllowed(
      protocol?: string | null,
      adapter?: string | null
    ): TypedEventFilter<
      [string, string],
      { protocol: string; adapter: string }
    >;

    ContractForbidden(
      protocol?: string | null
    ): TypedEventFilter<[string], { protocol: string }>;

    NewFastCheckParameters(
      chiThreshold?: null,
      fastCheckDelay?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { chiThreshold: BigNumber; fastCheckDelay: BigNumber }
    >;

    TokenAllowed(
      token?: string | null,
      liquidityThreshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; liquidityThreshold: BigNumber }
    >;
  };

  estimateGas: {
    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkMultiTokenCollateral(
      creditAccount: string,
      amountIn: BigNumberish[],
      amountOut: BigNumberish[],
      tokenIn: string[],
      tokenOut: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidationThresholds(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedContracts(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedContractsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokensCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAndEnableToken(
      creditAccount: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkCollateralChange(
      creditAccount: string,
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      amountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkMultiTokenCollateral(
      creditAccount: string,
      amountIn: BigNumberish[],
      amountOut: BigNumberish[],
      tokenIn: string[],
      tokenOut: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    connectCreditManager(
      poolService: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractToAdapter(
      allowedContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreditAccountTokenById(
      creditAccount: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationThresholds(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
