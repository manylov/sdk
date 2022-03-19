import { BigNumber } from "ethers";
import { TokenDataPayload } from "../payload/token";
import { NetworkType } from "./constants";
export declare class TokenData {
    readonly id: string;
    readonly symbol: string;
    readonly address: string;
    readonly decimals: number;
    readonly icon?: string;
    constructor(payload: TokenDataPayload);
    compareBySymbol(b: TokenData): number;
}
export interface TokenBalance {
    id: string;
    balance: BigNumber;
}
export interface TokenAllowance {
    id: string;
    allowance: BigNumber;
}
export declare type TokenType = "core" | "stable" | "volatile" | "lp";
export interface TokenSavedData {
    address: string;
    type: TokenType;
}
export declare const WETHToken: Record<NetworkType, string>;
export declare const connectors: Record<NetworkType, Array<string>>;
export declare function getConnectors(networkType: NetworkType): string[];
