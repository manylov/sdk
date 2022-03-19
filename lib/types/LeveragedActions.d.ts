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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LeveragedActionsInterface extends ethers.utils.Interface {
  functions: {
    "contractsRegister()": FunctionFragment;
    "isTransferAllowed(address)": FunctionFragment;
    "openLP(address,uint256,uint256,uint256,address,uint256,uint256)": FunctionFragment;
    "openLong(uint256,tuple,uint256)": FunctionFragment;
    "openShortCurve(address,int128,int128,uint256,uint256,tuple,uint256)": FunctionFragment;
    "openShortUniV2(address,uint256,uint256,address[],uint256,tuple,uint256)": FunctionFragment;
    "openShortUniV3(address,tuple,tuple,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "wethGateway()": FunctionFragment;
    "wethToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "contractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTransferAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "openLP",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openLong",
    values: [
      BigNumberish,
      {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openShortCurve",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openShortUniV2",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string[],
      BigNumberish,
      {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openShortUniV3",
    values: [
      string,
      {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wethGateway",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "contractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openLP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openLong", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openShortCurve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openShortUniV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openShortUniV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;

  events: {
    "Action(address,address,address,uint256,address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Action"): EventFragment;
}

export class LeveragedActions extends BaseContract {
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

  interface: LeveragedActionsInterface;

  functions: {
    contractsRegister(overrides?: CallOverrides): Promise<[string]>;

    isTransferAllowed(
      creditManager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    openLP(
      creditManager: string,
      leverageFactor: BigNumberish,
      amountIn: BigNumberish,
      lpInterface: BigNumberish,
      lpContract: string,
      amountOutMin: BigNumberish,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openLong(
      amountIn: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openShortCurve(
      curvePool: string,
      i: BigNumberish,
      j: BigNumberish,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openShortUniV2(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      deadline: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openShortUniV3(
      router: string,
      paramsV3: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    wethGateway(overrides?: CallOverrides): Promise<[string]>;

    wethToken(overrides?: CallOverrides): Promise<[string]>;
  };

  contractsRegister(overrides?: CallOverrides): Promise<string>;

  isTransferAllowed(
    creditManager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  openLP(
    creditManager: string,
    leverageFactor: BigNumberish,
    amountIn: BigNumberish,
    lpInterface: BigNumberish,
    lpContract: string,
    amountOutMin: BigNumberish,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openLong(
    amountIn: BigNumberish,
    longParams: {
      creditManager: string;
      leverageFactor: BigNumberish;
      swapInterface: BigNumberish;
      swapContract: string;
      swapCalldata: BytesLike;
      lpInterface: BigNumberish;
      lpContract: string;
      amountOutMin: BigNumberish;
    },
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openShortCurve(
    curvePool: string,
    i: BigNumberish,
    j: BigNumberish,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    longParams: {
      creditManager: string;
      leverageFactor: BigNumberish;
      swapInterface: BigNumberish;
      swapContract: string;
      swapCalldata: BytesLike;
      lpInterface: BigNumberish;
      lpContract: string;
      amountOutMin: BigNumberish;
    },
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openShortUniV2(
    router: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    deadline: BigNumberish,
    longParams: {
      creditManager: string;
      leverageFactor: BigNumberish;
      swapInterface: BigNumberish;
      swapContract: string;
      swapCalldata: BytesLike;
      lpInterface: BigNumberish;
      lpContract: string;
      amountOutMin: BigNumberish;
    },
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openShortUniV3(
    router: string,
    paramsV3: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    longParams: {
      creditManager: string;
      leverageFactor: BigNumberish;
      swapInterface: BigNumberish;
      swapContract: string;
      swapCalldata: BytesLike;
      lpInterface: BigNumberish;
      lpContract: string;
      amountOutMin: BigNumberish;
    },
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  wethGateway(overrides?: CallOverrides): Promise<string>;

  wethToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    contractsRegister(overrides?: CallOverrides): Promise<string>;

    isTransferAllowed(
      creditManager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    openLP(
      creditManager: string,
      leverageFactor: BigNumberish,
      amountIn: BigNumberish,
      lpInterface: BigNumberish,
      lpContract: string,
      amountOutMin: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openLong(
      amountIn: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openShortCurve(
      curvePool: string,
      i: BigNumberish,
      j: BigNumberish,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openShortUniV2(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      deadline: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openShortUniV3(
      router: string,
      paramsV3: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethGateway(overrides?: CallOverrides): Promise<string>;

    wethToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Action(
      tokenIn?: string | null,
      collateral?: string | null,
      asset?: string | null,
      amountIn?: null,
      shortSwapContract?: null,
      longSwapContract?: null,
      lpContract?: null,
      referralCode?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string, string, string, BigNumber],
      {
        tokenIn: string;
        collateral: string;
        asset: string;
        amountIn: BigNumber;
        shortSwapContract: string;
        longSwapContract: string;
        lpContract: string;
        referralCode: BigNumber;
      }
    >;
  };

  estimateGas: {
    contractsRegister(overrides?: CallOverrides): Promise<BigNumber>;

    isTransferAllowed(
      creditManager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    openLP(
      creditManager: string,
      leverageFactor: BigNumberish,
      amountIn: BigNumberish,
      lpInterface: BigNumberish,
      lpContract: string,
      amountOutMin: BigNumberish,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openLong(
      amountIn: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openShortCurve(
      curvePool: string,
      i: BigNumberish,
      j: BigNumberish,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openShortUniV2(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      deadline: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openShortUniV3(
      router: string,
      paramsV3: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethGateway(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTransferAllowed(
      creditManager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openLP(
      creditManager: string,
      leverageFactor: BigNumberish,
      amountIn: BigNumberish,
      lpInterface: BigNumberish,
      lpContract: string,
      amountOutMin: BigNumberish,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openLong(
      amountIn: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openShortCurve(
      curvePool: string,
      i: BigNumberish,
      j: BigNumberish,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openShortUniV2(
      router: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      deadline: BigNumberish,
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openShortUniV3(
      router: string,
      paramsV3: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      longParams: {
        creditManager: string;
        leverageFactor: BigNumberish;
        swapInterface: BigNumberish;
        swapContract: string;
        swapCalldata: BytesLike;
        lpInterface: BigNumberish;
        lpContract: string;
        amountOutMin: BigNumberish;
      },
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
