import { AdapterInterface } from "../contracts/adapters";
import {
  contractParams,
  contractsByAddress,
  contractsByNetwork,
  ConvexPoolParams,
  LidoParams,
  SupportedContract,
} from "../contracts/contracts";
import { NetworkType } from "../core/chains";
import { SupportedToken, tokenDataByNetwork } from "../tokens/token";
import { MultiCallStruct } from "../types/@gearbox-protocol/router/contracts/interfaces/IClosePathResolver";
import { TypedObjectUtils } from "../utils/mappers";
import { AbstractParser } from "./abstractParser";
import { AddressProviderParser } from "./addressProviderParser";
import { AirdropDistributorParser } from "./airdropDistributorParser";
import { ConvexBaseRewardPoolAdapterParser } from "./convexBaseRewardPoolAdapterParser";
import { ConvexBoosterAdapterParser } from "./convexBoosterAdapterParser";
import { ConvexRewardPoolParser } from "./convextRewardPoolParser";
import { CreditFacadeParser } from "./creditFacadeParser";
import { CreditManagerParser } from "./creditManagerParser";
import { CurveAdapterParser } from "./curveAdapterParser";
import { DataCompressorParser } from "./dataCompressorParser";
import { ERC20Parser } from "./ERC20Parser";
import { IParser } from "./iParser";
import { LidoAdapterParser } from "./lidoAdapterParser";
import { LidoOracleParser } from "./lidoOracleParser";
import { LidoSTETHParser } from "./lidoSTETHParser";
import { MulticallParser } from "./multicallParser";
import { OffchainOracleParserParser } from "./offchainOracleParser";
import { PoolParser } from "./poolParser";
import { PriceOracleParser } from "./priceOracleParser";
import { UniswapV2AdapterParser } from "./uniV2AdapterParser";
import { UniswapV3AdapterParser } from "./uniV3AdapterParser";
import { WstETHAdapterParser } from "./wstETHAdapterParser";
import { YearnV2AdapterParser } from "./yearnV2AdapterParser";

export interface AdapterForParser {
  adapter: string;
  contract: string;
}

interface ParseData {
  contract: string;
  adapterName: string;
}

export class TxParser {
  protected static parsers: Record<string, IParser & AbstractParser> = {};

  public static parse(address: string, calldata: string): string {
    const parser = TxParser.getParser(address);
    return parser.parse(calldata);
  }

  public static parseToObject(address: string, calldata: string) {
    const parser = TxParser.getParser(address);
    return parser.parseToObject(address, calldata);
  }

  public static getParseData(address: string): ParseData {
    const parser = TxParser.getParser(address);
    return { contract: parser.contract, adapterName: parser.adapterName };
  }

  public static parseMultiCall(calls: Array<MultiCallStruct>): Array<string> {
    return calls.map(call =>
      TxParser.parse(call.target, call.callData.toString()),
    );
  }

  public static parseToObjectMultiCall(calls: Array<MultiCallStruct>) {
    return calls.map(call =>
      TxParser.parseToObject(call.target, call.callData.toString()),
    );
  }

  public static addAdapters(adapters: Array<AdapterForParser>) {
    for (let a of adapters) {
      const contract = contractsByAddress[a.contract.toLowerCase()];
      if (contract && contractParams[contract]) {
        TxParser.chooseContractParser(
          a.adapter,
          contract,
          contractParams[contract].type,
          false,
        );
      } else {
        console.error(`Unknown address: ${contract} at ${a.contract}`);
      }
    }
  }

  public static addContracts(network: NetworkType) {
    TypedObjectUtils.entries(contractParams).forEach(
      ([contract, contractData]) => {
        const address = contractsByNetwork[network][contract];

        TxParser.chooseContractParser(
          address,
          contract,
          contractData.type,
          true,
        );

        if (contractData.type === AdapterInterface.CONVEX_V1_BASE_REWARD_POOL) {
          (contractData as ConvexPoolParams).extraRewards.forEach(r => {
            const extraAddress = r.poolAddress[network];

            TxParser._addParser(
              extraAddress,
              new ConvexRewardPoolParser(r.rewardToken),
            );
          });
        }

        if (contractData.type === AdapterInterface.LIDO_V1) {
          const extraAddress = (contractData as LidoParams).oracle[network];
          TxParser._addParser(extraAddress, new LidoOracleParser());
        }
      },
    );
  }

  public static addCreditFacade(
    creditFacade: string,
    underlying: SupportedToken,
  ) {
    TxParser._addParser(creditFacade, new CreditFacadeParser(underlying));
  }

  public static addTokens(network: NetworkType) {
    TypedObjectUtils.entries(tokenDataByNetwork[network]).forEach(([s, t]) => {
      if (s === "STETH") {
        TxParser._addParser(t, new LidoSTETHParser(s));
      } else {
        const contract = contractsByAddress[t.toLowerCase()];

        if (contract) {
          TxParser.chooseContractParser(
            t,
            contract,
            contractParams[contract].type,
            true,
          );
        } else {
          TxParser._addParser(t, new ERC20Parser(s));
        }
      }
    });
  }
  public static addOffchainOracleParser(address: string) {
    TxParser._addParser(address, new OffchainOracleParserParser());
  }
  public static addPriceOracle(address: string) {
    TxParser._addParser(address, new PriceOracleParser());
  }
  public static addDataCompressor(address: string) {
    TxParser._addParser(address, new DataCompressorParser());
  }
  public static addAddressProvider(address: string) {
    TxParser._addParser(address, new AddressProviderParser());
  }
  public static addMulticall(address: string) {
    TxParser._addParser(address, new MulticallParser());
  }
  public static addAirdropDistributor(address: string) {
    TxParser._addParser(address, new AirdropDistributorParser());
  }
  public static addCreditManager(address: string, version: number) {
    TxParser._addParser(address, new CreditManagerParser(version));
  }
  public static addPool(address: string, version: number) {
    TxParser._addParser(address, new PoolParser(version));
  }

  public static getParser(address: string) {
    const parser = TxParser.parsers[address.toLowerCase()];
    if (!parser) throw new Error(`Can find parser for ${address}`);
    return parser;
  }

  protected static chooseContractParser(
    address: string,
    contract: SupportedContract,
    adapterType: number,
    isContract: boolean,
  ) {
    const addressLC = address.toLowerCase();
    switch (AdapterInterface[adapterType]) {
      case "UNISWAP_V2_ROUTER":
        TxParser._addParser(
          addressLC,
          new UniswapV2AdapterParser(contract, isContract),
        );
        break;

      case "UNISWAP_V3_ROUTER":
        TxParser._addParser(
          addressLC,
          new UniswapV3AdapterParser(contract, isContract),
        );
        break;
      case "CURVE_V1_EXCHANGE_ONLY":
      case "CURVE_V1_2ASSETS":
      case "CURVE_V1_3ASSETS":
      case "CURVE_V1_4ASSETS":
      case "CURVE_V1_STECRV_POOL":
      case "CURVE_V1_WRAPPER":
        TxParser._addParser(
          addressLC,
          new CurveAdapterParser(contract, isContract),
        );
        break;
      case "YEARN_V2":
        TxParser._addParser(
          addressLC,
          new YearnV2AdapterParser(contract, isContract),
        );
        break;

      case "CONVEX_V1_BASE_REWARD_POOL":
        TxParser._addParser(
          addressLC,
          new ConvexBaseRewardPoolAdapterParser(contract, isContract),
        );
        break;

      case "CONVEX_V1_BOOSTER":
        TxParser._addParser(
          addressLC,
          new ConvexBoosterAdapterParser(contract, isContract),
        );
        break;
      case "CONVEX_V1_CLAIM_ZAP":
        break;
      case "LIDO_V1":
        TxParser._addParser(
          addressLC,
          new LidoAdapterParser(contract, isContract),
        );
        break;
      case "LIDO_WSTETH_V1":
        TxParser._addParser(
          addressLC,
          new WstETHAdapterParser(contract, isContract),
        );
        break;
    }
  }

  protected static _addParser(
    address: string,
    parser: IParser & AbstractParser,
  ) {
    TxParser.parsers[address.toLowerCase()] = parser;
  }
}
