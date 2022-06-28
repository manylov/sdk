import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface TokenRewardContractMockInterface extends utils.Interface {
    functions: {
        "addRewardAmount(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "deposits()": FunctionFragment;
        "duration()": FunctionFragment;
        "getReward(address,address)": FunctionFragment;
        "getReward(address)": FunctionFragment;
        "operator()": FunctionFragment;
        "stake(address,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addRewardAmount" | "balanceOf" | "deposits" | "duration" | "getReward(address,address)" | "getReward(address)" | "operator" | "stake" | "totalSupply" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "addRewardAmount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "deposits", values?: undefined): string;
    encodeFunctionData(functionFragment: "duration", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getReward(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface TokenRewardContractMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenRewardContractMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addRewardAmount(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposits(overrides?: CallOverrides): Promise<[string]>;
        duration(overrides?: CallOverrides): Promise<[BigNumber]>;
        "getReward(address,address)"(_account: string, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "getReward(address)"(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addRewardAmount(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    deposits(overrides?: CallOverrides): Promise<string>;
    duration(overrides?: CallOverrides): Promise<BigNumber>;
    "getReward(address,address)"(_account: string, _token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "getReward(address)"(_token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operator(overrides?: CallOverrides): Promise<string>;
    stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addRewardAmount(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposits(overrides?: CallOverrides): Promise<string>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward(address,address)"(_account: string, _token: string, overrides?: CallOverrides): Promise<boolean>;
        "getReward(address)"(_token: string, overrides?: CallOverrides): Promise<boolean>;
        operator(overrides?: CallOverrides): Promise<string>;
        stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        addRewardAmount(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposits(overrides?: CallOverrides): Promise<BigNumber>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward(address,address)"(_account: string, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "getReward(address)"(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addRewardAmount(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getReward(address,address)"(_account: string, _token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "getReward(address)"(_token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
