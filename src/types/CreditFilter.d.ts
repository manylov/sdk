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

interface CreditFilterInterface extends ethers.utils.Interface {
  functions: {
    "_allowedTokensMap(address)": FunctionFragment;
    "allowContract(address,address)": FunctionFragment;
    "allowToken(address,uint256)": FunctionFragment;
    "allowedAdapters(address)": FunctionFragment;
    "allowedContracts(uint256)": FunctionFragment;
    "allowedContractsCount()": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "allowedTokensCount()": FunctionFragment;
    "calcCreditAccountAccruedInterest(address)": FunctionFragment;
    "calcCreditAccountHealthFactor(address)": FunctionFragment;
    "calcMaxPossibleDrop(uint256,uint256)": FunctionFragment;
    "calcThresholdWeightedValue(address)": FunctionFragment;
    "calcTotalValue(address)": FunctionFragment;
    "changeAllowedTokenState(address,bool)": FunctionFragment;
    "checkAndEnableToken(address,address)": FunctionFragment;
    "checkCollateralChange(address,address,address,uint256,uint256)": FunctionFragment;
    "checkMultiTokenCollateral(address,uint256[],uint256[],address[],address[])": FunctionFragment;
    "chiThreshold()": FunctionFragment;
    "connectCreditManager(address)": FunctionFragment;
    "contractToAdapter(address)": FunctionFragment;
    "creditManager()": FunctionFragment;
    "enabledTokens(address)": FunctionFragment;
    "fastCheckCounter(address)": FunctionFragment;
    "forbidContract(address)": FunctionFragment;
    "getCreditAccountTokenById(address,uint256)": FunctionFragment;
    "hfCheckInterval()": FunctionFragment;
    "initEnabledTokens(address)": FunctionFragment;
    "isTokenAllowed(address)": FunctionFragment;
    "liquidationThresholds(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolService()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "revertIfTokenNotAllowed(address)": FunctionFragment;
    "setFastCheckParameters(uint256,uint256)": FunctionFragment;
    "tokenMasksMap(address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateUnderlyingTokenLiquidationThreshold()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_allowedTokensMap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedAdapters",
    values: [string]
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
    functionFragment: "calcMaxPossibleDrop",
    values: [BigNumberish, BigNumberish]
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
    functionFragment: "changeAllowedTokenState",
    values: [string, boolean]
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
    functionFragment: "chiThreshold",
    values?: undefined
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
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enabledTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "fastCheckCounter",
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
    functionFragment: "hfCheckInterval",
    values?: undefined
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
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolService",
    values?: undefined
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
    functionFragment: "setFastCheckParameters",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenMasksMap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_allowedTokensMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedAdapters",
    data: BytesLike
  ): Result;
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
    functionFragment: "calcMaxPossibleDrop",
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
    functionFragment: "changeAllowedTokenState",
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
    functionFragment: "chiThreshold",
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
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enabledTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fastCheckCounter",
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
    functionFragment: "hfCheckInterval",
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
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolService",
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
    functionFragment: "setFastCheckParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenMasksMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateUnderlyingTokenLiquidationThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {
    "ContractAllowed(address,address)": EventFragment;
    "ContractForbidden(address)": EventFragment;
    "NewFastCheckParameters(uint256,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "TokenAllowed(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractForbidden"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFastCheckParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export class CreditFilter extends BaseContract {
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

  interface: CreditFilterInterface;

  functions: {
    _allowedTokensMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

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

    allowedAdapters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowedTokens(
      arg0: BigNumberish,
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

    calcMaxPossibleDrop(
      percentage: BigNumberish,
      times: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { value: BigNumber }>;

    calcThresholdWeightedValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    calcTotalValue(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    changeAllowedTokenState(
      token: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    chiThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractToAdapter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    enabledTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fastCheckCounter(
      arg0: string,
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
        tvw: BigNumber;
      }
    >;

    hfCheckInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidationThresholds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolService(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    setFastCheckParameters(
      _chiThreshold: BigNumberish,
      _hfCheckInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenMasksMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  _allowedTokensMap(arg0: string, overrides?: CallOverrides): Promise<boolean>;

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

  allowedAdapters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

  allowedTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

  calcCreditAccountAccruedInterest(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcCreditAccountHealthFactor(
    creditAccount: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcMaxPossibleDrop(
    percentage: BigNumberish,
    times: BigNumberish,
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

  changeAllowedTokenState(
    token: string,
    state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  chiThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  connectCreditManager(
    _creditManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  enabledTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  fastCheckCounter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

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
      tvw: BigNumber;
    }
  >;

  hfCheckInterval(overrides?: CallOverrides): Promise<BigNumber>;

  initEnabledTokens(
    creditAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

  liquidationThresholds(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolService(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  revertIfTokenNotAllowed(
    token: string,
    overrides?: CallOverrides
  ): Promise<void>;

  setFastCheckParameters(
    _chiThreshold: BigNumberish,
    _hfCheckInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenMasksMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateUnderlyingTokenLiquidationThreshold(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _allowedTokensMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    allowedAdapters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedTokensCount(overrides?: CallOverrides): Promise<BigNumber>;

    calcCreditAccountAccruedInterest(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcCreditAccountHealthFactor(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcMaxPossibleDrop(
      percentage: BigNumberish,
      times: BigNumberish,
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

    changeAllowedTokenState(
      token: string,
      state: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

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

    chiThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    connectCreditManager(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractToAdapter(arg0: string, overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    enabledTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    fastCheckCounter(
      arg0: string,
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
        tvw: BigNumber;
      }
    >;

    hfCheckInterval(overrides?: CallOverrides): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isTokenAllowed(token: string, overrides?: CallOverrides): Promise<boolean>;

    liquidationThresholds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolService(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFastCheckParameters(
      _chiThreshold: BigNumberish,
      _hfCheckInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenMasksMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: CallOverrides
    ): Promise<void>;

    wethAddress(overrides?: CallOverrides): Promise<string>;
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

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    TokenAllowed(
      token?: string | null,
      liquidityThreshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; liquidityThreshold: BigNumber }
    >;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    _allowedTokensMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    allowedAdapters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    allowedTokens(
      arg0: BigNumberish,
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

    calcMaxPossibleDrop(
      percentage: BigNumberish,
      times: BigNumberish,
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

    changeAllowedTokenState(
      token: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    chiThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractToAdapter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    enabledTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    fastCheckCounter(
      arg0: string,
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

    hfCheckInterval(overrides?: CallOverrides): Promise<BigNumber>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidationThresholds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolService(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFastCheckParameters(
      _chiThreshold: BigNumberish,
      _hfCheckInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenMasksMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _allowedTokensMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    allowedAdapters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedContractsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      arg0: BigNumberish,
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

    calcMaxPossibleDrop(
      percentage: BigNumberish,
      times: BigNumberish,
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

    changeAllowedTokenState(
      token: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    chiThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractToAdapter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enabledTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fastCheckCounter(
      arg0: string,
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

    hfCheckInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initEnabledTokens(
      creditAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isTokenAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationThresholds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revertIfTokenNotAllowed(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFastCheckParameters(
      _chiThreshold: BigNumberish,
      _hfCheckInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenMasksMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateUnderlyingTokenLiquidationThreshold(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
