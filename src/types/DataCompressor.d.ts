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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DataCompressorInterface extends ethers.utils.Interface {
  functions: {
    "WETHToken()": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "calcExpectedHf(address,address,uint256[])": FunctionFragment;
    "contractsRegister()": FunctionFragment;
    "getAdapter(address,address)": FunctionFragment;
    "getCreditAccountData(address,address)": FunctionFragment;
    "getCreditAccountDataExtended(address,address)": FunctionFragment;
    "getCreditAccountList(address)": FunctionFragment;
    "getCreditManagerData(address,address)": FunctionFragment;
    "getCreditManagersList(address)": FunctionFragment;
    "getPoolData(address)": FunctionFragment;
    "getPoolsList()": FunctionFragment;
    "getTokenData(address)": FunctionFragment;
    "hasOpenedCreditAccount(address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETHToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcExpectedHf",
    values: [string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "contractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAdapter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountDataExtended",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditAccountList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditManagerData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditManagersList",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getPoolData", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPoolsList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasOpenedCreditAccount",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "WETHToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcExpectedHf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAdapter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountDataExtended",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditAccountList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditManagerData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditManagersList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolsList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasOpenedCreditAccount",
    data: BytesLike
  ): Result;

  events: {};
}

export class DataCompressor extends BaseContract {
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

  interface: DataCompressorInterface;

  functions: {
    WETHToken(overrides?: CallOverrides): Promise<[string]>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    calcExpectedHf(
      _creditManager: string,
      borrower: string,
      balances: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractsRegister(overrides?: CallOverrides): Promise<[string]>;

    getAdapter(
      _creditManager: string,
      _allowedContract: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCreditAccountData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          boolean,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber] & { token: string; balance: BigNumber })[]
        ] & {
          addr: string;
          borrower: string;
          inUse: boolean;
          creditManager: string;
          underlyingToken: string;
          borrowedAmountPlusInterest: BigNumber;
          totalValue: BigNumber;
          healthFactor: BigNumber;
          borrowRate: BigNumber;
          balances: ([string, BigNumber] & {
            token: string;
            balance: BigNumber;
          })[];
        }
      ]
    >;

    getCreditAccountDataExtended(
      creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          boolean,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber] & { token: string; balance: BigNumber })[],
          BigNumber,
          BigNumber,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          addr: string;
          borrower: string;
          inUse: boolean;
          creditManager: string;
          underlyingToken: string;
          borrowedAmountPlusInterest: BigNumber;
          totalValue: BigNumber;
          healthFactor: BigNumber;
          borrowRate: BigNumber;
          balances: ([string, BigNumber] & {
            token: string;
            balance: BigNumber;
          })[];
          repayAmount: BigNumber;
          liquidationAmount: BigNumber;
          canBeClosed: boolean;
          borrowedAmount: BigNumber;
          cumulativeIndexAtOpen: BigNumber;
          since: BigNumber;
        }
      ]
    >;

    getCreditAccountList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          boolean,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber] & { token: string; balance: BigNumber })[]
        ] & {
          addr: string;
          borrower: string;
          inUse: boolean;
          creditManager: string;
          underlyingToken: string;
          borrowedAmountPlusInterest: BigNumber;
          totalValue: BigNumber;
          healthFactor: BigNumber;
          borrowRate: BigNumber;
          balances: ([string, BigNumber] & {
            token: string;
            balance: BigNumber;
          })[];
        })[]
      ]
    >;

    getCreditManagerData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          boolean,
          string,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string[],
          ([string, string] & { allowedContract: string; adapter: string })[]
        ] & {
          addr: string;
          hasAccount: boolean;
          underlyingToken: string;
          isWETH: boolean;
          canBorrow: boolean;
          borrowRate: BigNumber;
          minAmount: BigNumber;
          maxAmount: BigNumber;
          maxLeverageFactor: BigNumber;
          availableLiquidity: BigNumber;
          allowedTokens: string[];
          adapters: ([string, string] & {
            allowedContract: string;
            adapter: string;
          })[];
        }
      ]
    >;

    getCreditManagersList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          boolean,
          string,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string[],
          ([string, string] & { allowedContract: string; adapter: string })[]
        ] & {
          addr: string;
          hasAccount: boolean;
          underlyingToken: string;
          isWETH: boolean;
          canBorrow: boolean;
          borrowRate: BigNumber;
          minAmount: BigNumber;
          maxAmount: BigNumber;
          maxLeverageFactor: BigNumber;
          availableLiquidity: BigNumber;
          allowedTokens: string[];
          adapters: ([string, string] & {
            allowedContract: string;
            adapter: string;
          })[];
        })[]
      ]
    >;

    getPoolData(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          boolean,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          addr: string;
          isWETH: boolean;
          underlyingToken: string;
          dieselToken: string;
          linearCumulativeIndex: BigNumber;
          availableLiquidity: BigNumber;
          expectedLiquidity: BigNumber;
          expectedLiquidityLimit: BigNumber;
          totalBorrowed: BigNumber;
          depositAPY_RAY: BigNumber;
          borrowAPY_RAY: BigNumber;
          dieselRate_RAY: BigNumber;
          withdrawFee: BigNumber;
          cumulativeIndex_RAY: BigNumber;
          timestampLU: BigNumber;
        }
      ]
    >;

    getPoolsList(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          boolean,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          addr: string;
          isWETH: boolean;
          underlyingToken: string;
          dieselToken: string;
          linearCumulativeIndex: BigNumber;
          availableLiquidity: BigNumber;
          expectedLiquidity: BigNumber;
          expectedLiquidityLimit: BigNumber;
          totalBorrowed: BigNumber;
          depositAPY_RAY: BigNumber;
          borrowAPY_RAY: BigNumber;
          dieselRate_RAY: BigNumber;
          withdrawFee: BigNumber;
          cumulativeIndex_RAY: BigNumber;
          timestampLU: BigNumber;
        })[]
      ]
    >;

    getTokenData(
      addr: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, number] & {
          addr: string;
          symbol: string;
          decimals: number;
        }
      ]
    >;

    hasOpenedCreditAccount(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  WETHToken(overrides?: CallOverrides): Promise<string>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  calcExpectedHf(
    _creditManager: string,
    borrower: string,
    balances: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractsRegister(overrides?: CallOverrides): Promise<string>;

  getAdapter(
    _creditManager: string,
    _allowedContract: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getCreditAccountData(
    _creditManager: string,
    borrower: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      boolean,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      ([string, BigNumber] & { token: string; balance: BigNumber })[]
    ] & {
      addr: string;
      borrower: string;
      inUse: boolean;
      creditManager: string;
      underlyingToken: string;
      borrowedAmountPlusInterest: BigNumber;
      totalValue: BigNumber;
      healthFactor: BigNumber;
      borrowRate: BigNumber;
      balances: ([string, BigNumber] & { token: string; balance: BigNumber })[];
    }
  >;

  getCreditAccountDataExtended(
    creditManager: string,
    borrower: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      boolean,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      ([string, BigNumber] & { token: string; balance: BigNumber })[],
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      addr: string;
      borrower: string;
      inUse: boolean;
      creditManager: string;
      underlyingToken: string;
      borrowedAmountPlusInterest: BigNumber;
      totalValue: BigNumber;
      healthFactor: BigNumber;
      borrowRate: BigNumber;
      balances: ([string, BigNumber] & { token: string; balance: BigNumber })[];
      repayAmount: BigNumber;
      liquidationAmount: BigNumber;
      canBeClosed: boolean;
      borrowedAmount: BigNumber;
      cumulativeIndexAtOpen: BigNumber;
      since: BigNumber;
    }
  >;

  getCreditAccountList(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      string,
      boolean,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      ([string, BigNumber] & { token: string; balance: BigNumber })[]
    ] & {
      addr: string;
      borrower: string;
      inUse: boolean;
      creditManager: string;
      underlyingToken: string;
      borrowedAmountPlusInterest: BigNumber;
      totalValue: BigNumber;
      healthFactor: BigNumber;
      borrowRate: BigNumber;
      balances: ([string, BigNumber] & { token: string; balance: BigNumber })[];
    })[]
  >;

  getCreditManagerData(
    _creditManager: string,
    borrower: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      boolean,
      string,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string[],
      ([string, string] & { allowedContract: string; adapter: string })[]
    ] & {
      addr: string;
      hasAccount: boolean;
      underlyingToken: string;
      isWETH: boolean;
      canBorrow: boolean;
      borrowRate: BigNumber;
      minAmount: BigNumber;
      maxAmount: BigNumber;
      maxLeverageFactor: BigNumber;
      availableLiquidity: BigNumber;
      allowedTokens: string[];
      adapters: ([string, string] & {
        allowedContract: string;
        adapter: string;
      })[];
    }
  >;

  getCreditManagersList(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      boolean,
      string,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string[],
      ([string, string] & { allowedContract: string; adapter: string })[]
    ] & {
      addr: string;
      hasAccount: boolean;
      underlyingToken: string;
      isWETH: boolean;
      canBorrow: boolean;
      borrowRate: BigNumber;
      minAmount: BigNumber;
      maxAmount: BigNumber;
      maxLeverageFactor: BigNumber;
      availableLiquidity: BigNumber;
      allowedTokens: string[];
      adapters: ([string, string] & {
        allowedContract: string;
        adapter: string;
      })[];
    })[]
  >;

  getPoolData(
    _pool: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      boolean,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      addr: string;
      isWETH: boolean;
      underlyingToken: string;
      dieselToken: string;
      linearCumulativeIndex: BigNumber;
      availableLiquidity: BigNumber;
      expectedLiquidity: BigNumber;
      expectedLiquidityLimit: BigNumber;
      totalBorrowed: BigNumber;
      depositAPY_RAY: BigNumber;
      borrowAPY_RAY: BigNumber;
      dieselRate_RAY: BigNumber;
      withdrawFee: BigNumber;
      cumulativeIndex_RAY: BigNumber;
      timestampLU: BigNumber;
    }
  >;

  getPoolsList(
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      boolean,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      addr: string;
      isWETH: boolean;
      underlyingToken: string;
      dieselToken: string;
      linearCumulativeIndex: BigNumber;
      availableLiquidity: BigNumber;
      expectedLiquidity: BigNumber;
      expectedLiquidityLimit: BigNumber;
      totalBorrowed: BigNumber;
      depositAPY_RAY: BigNumber;
      borrowAPY_RAY: BigNumber;
      dieselRate_RAY: BigNumber;
      withdrawFee: BigNumber;
      cumulativeIndex_RAY: BigNumber;
      timestampLU: BigNumber;
    })[]
  >;

  getTokenData(
    addr: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      addr: string;
      symbol: string;
      decimals: number;
    }
  >;

  hasOpenedCreditAccount(
    _creditManager: string,
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    WETHToken(overrides?: CallOverrides): Promise<string>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    calcExpectedHf(
      _creditManager: string,
      borrower: string,
      balances: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractsRegister(overrides?: CallOverrides): Promise<string>;

    getAdapter(
      _creditManager: string,
      _allowedContract: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getCreditAccountData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        ([string, BigNumber] & { token: string; balance: BigNumber })[]
      ] & {
        addr: string;
        borrower: string;
        inUse: boolean;
        creditManager: string;
        underlyingToken: string;
        borrowedAmountPlusInterest: BigNumber;
        totalValue: BigNumber;
        healthFactor: BigNumber;
        borrowRate: BigNumber;
        balances: ([string, BigNumber] & {
          token: string;
          balance: BigNumber;
        })[];
      }
    >;

    getCreditAccountDataExtended(
      creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        ([string, BigNumber] & { token: string; balance: BigNumber })[],
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        addr: string;
        borrower: string;
        inUse: boolean;
        creditManager: string;
        underlyingToken: string;
        borrowedAmountPlusInterest: BigNumber;
        totalValue: BigNumber;
        healthFactor: BigNumber;
        borrowRate: BigNumber;
        balances: ([string, BigNumber] & {
          token: string;
          balance: BigNumber;
        })[];
        repayAmount: BigNumber;
        liquidationAmount: BigNumber;
        canBeClosed: boolean;
        borrowedAmount: BigNumber;
        cumulativeIndexAtOpen: BigNumber;
        since: BigNumber;
      }
    >;

    getCreditAccountList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        string,
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        ([string, BigNumber] & { token: string; balance: BigNumber })[]
      ] & {
        addr: string;
        borrower: string;
        inUse: boolean;
        creditManager: string;
        underlyingToken: string;
        borrowedAmountPlusInterest: BigNumber;
        totalValue: BigNumber;
        healthFactor: BigNumber;
        borrowRate: BigNumber;
        balances: ([string, BigNumber] & {
          token: string;
          balance: BigNumber;
        })[];
      })[]
    >;

    getCreditManagerData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        boolean,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        ([string, string] & { allowedContract: string; adapter: string })[]
      ] & {
        addr: string;
        hasAccount: boolean;
        underlyingToken: string;
        isWETH: boolean;
        canBorrow: boolean;
        borrowRate: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        maxLeverageFactor: BigNumber;
        availableLiquidity: BigNumber;
        allowedTokens: string[];
        adapters: ([string, string] & {
          allowedContract: string;
          adapter: string;
        })[];
      }
    >;

    getCreditManagersList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        boolean,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        ([string, string] & { allowedContract: string; adapter: string })[]
      ] & {
        addr: string;
        hasAccount: boolean;
        underlyingToken: string;
        isWETH: boolean;
        canBorrow: boolean;
        borrowRate: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        maxLeverageFactor: BigNumber;
        availableLiquidity: BigNumber;
        allowedTokens: string[];
        adapters: ([string, string] & {
          allowedContract: string;
          adapter: string;
        })[];
      })[]
    >;

    getPoolData(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        addr: string;
        isWETH: boolean;
        underlyingToken: string;
        dieselToken: string;
        linearCumulativeIndex: BigNumber;
        availableLiquidity: BigNumber;
        expectedLiquidity: BigNumber;
        expectedLiquidityLimit: BigNumber;
        totalBorrowed: BigNumber;
        depositAPY_RAY: BigNumber;
        borrowAPY_RAY: BigNumber;
        dieselRate_RAY: BigNumber;
        withdrawFee: BigNumber;
        cumulativeIndex_RAY: BigNumber;
        timestampLU: BigNumber;
      }
    >;

    getPoolsList(
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        boolean,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        addr: string;
        isWETH: boolean;
        underlyingToken: string;
        dieselToken: string;
        linearCumulativeIndex: BigNumber;
        availableLiquidity: BigNumber;
        expectedLiquidity: BigNumber;
        expectedLiquidityLimit: BigNumber;
        totalBorrowed: BigNumber;
        depositAPY_RAY: BigNumber;
        borrowAPY_RAY: BigNumber;
        dieselRate_RAY: BigNumber;
        withdrawFee: BigNumber;
        cumulativeIndex_RAY: BigNumber;
        timestampLU: BigNumber;
      })[]
    >;

    getTokenData(
      addr: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        addr: string;
        symbol: string;
        decimals: number;
      }
    >;

    hasOpenedCreditAccount(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    WETHToken(overrides?: CallOverrides): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    calcExpectedHf(
      _creditManager: string,
      borrower: string,
      balances: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractsRegister(overrides?: CallOverrides): Promise<BigNumber>;

    getAdapter(
      _creditManager: string,
      _allowedContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditAccountData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditAccountDataExtended(
      creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditAccountList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditManagerData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreditManagersList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolData(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolsList(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenData(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    hasOpenedCreditAccount(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETHToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calcExpectedHf(
      _creditManager: string,
      borrower: string,
      balances: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAdapter(
      _creditManager: string,
      _allowedContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditAccountData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditAccountDataExtended(
      creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditAccountList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditManagerData(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreditManagersList(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolData(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenData(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasOpenedCreditAccount(
      _creditManager: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
