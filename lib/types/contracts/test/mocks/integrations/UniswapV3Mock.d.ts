import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace ISwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactOutputParamsStruct = {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
    };
    type ExactOutputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactOutputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface UniswapV3MockInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "failed()": FunctionFragment;
        "quoteExactInput(bytes,uint256)": FunctionFragment;
        "quoteExactInputSingle(address,address,uint24,uint256,uint160)": FunctionFragment;
        "quoteExactOutput(bytes,uint256)": FunctionFragment;
        "rates(address,address,uint24)": FunctionFragment;
        "setRate(address,address,uint24,uint256)": FunctionFragment;
        "setRate(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "failed" | "quoteExactInput" | "quoteExactInputSingle" | "quoteExactOutput" | "rates" | "setRate(address,address,uint24,uint256)" | "setRate(address,address,uint256)"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "exactInput", values: [ISwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [ISwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [ISwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [ISwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteExactInput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactInputSingle", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactOutput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rates", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRate(address,address,uint24,uint256)", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRate(address,address,uint256)", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRate(address,address,uint24,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRate(address,address,uint256)", data: BytesLike): Result;
    events: {
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface UniswapV3Mock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV3MockInterface;
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
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        failed(overrides?: CallOverrides): Promise<[boolean]>;
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rates(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "setRate(address,address,uint24,uint256)"(tokenFrom: string, tokenTo: string, fee: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setRate(address,address,uint256)"(tokenFrom: string, tokenTo: string, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    failed(overrides?: CallOverrides): Promise<boolean>;
    quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rates(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "setRate(address,address,uint24,uint256)"(tokenFrom: string, tokenTo: string, fee: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setRate(address,address,uint256)"(tokenFrom: string, tokenTo: string, rate_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rates(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "setRate(address,address,uint24,uint256)"(tokenFrom: string, tokenTo: string, fee: BigNumberish, rate_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "setRate(address,address,uint256)"(tokenFrom: string, tokenTo: string, rate_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        failed(overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rates(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "setRate(address,address,uint24,uint256)"(tokenFrom: string, tokenTo: string, fee: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setRate(address,address,uint256)"(tokenFrom: string, tokenTo: string, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactInputSingle(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        failed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rates(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "setRate(address,address,uint24,uint256)"(tokenFrom: string, tokenTo: string, fee: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setRate(address,address,uint256)"(tokenFrom: string, tokenTo: string, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
