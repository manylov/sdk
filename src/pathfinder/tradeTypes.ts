import type {
  BalancerVaultContract,
  ConvexPoolContract,
  CurvePoolContract,
  UniswapV2Contract,
  YearnVaultContract,
} from "../contracts/contracts";
import { BalancerLPToken } from "../tokens/balancer";
import type { ConvexLPToken, ConvexStakedPhantomToken } from "../tokens/convex";
import type { CurveLPToken } from "../tokens/curveLP";
import type { NormalToken } from "../tokens/normal";
import type { YearnLPToken } from "../tokens/yearn";

export enum TradeType {
  UniswapV2Swap,
  UniswapV3Swap,
  CurveExchange,
  CurveExchangeUnderlying,
  CurveDepositLP,
  CurveWithdrawLP,
  YearnDeposit,
  YearnWithdraw,
  LidoStake,
  ConvexDepositLP,
  ConvexStake,
  ConvexDepositLPAndStake,
  ConvexWithdrawLP,
  ConvexWithdraw,
  ConvexWithdrawAndUnwrap,
  BalancerJoin,
  BalancerExit,
}

export type TradeAction =
  | {
      type: TradeType.UniswapV2Swap;
      contract: UniswapV2Contract;
      tokenOut?: NormalToken;
    }
  | {
      type: TradeType.UniswapV3Swap;
      contract: "UNISWAP_V3_ROUTER";
      tokenOut?: NormalToken;
    }
  | {
      type: TradeType.CurveExchange;
      contract: CurvePoolContract;
      tokenOut: Array<NormalToken | CurveLPToken>;
    }
  | {
      type: TradeType.CurveDepositLP;
      contract: CurvePoolContract;
      tokenOut: CurveLPToken;
    }
  | {
      type: TradeType.CurveWithdrawLP;
      contract: CurvePoolContract;
      tokenOut: Array<CurveLPToken | NormalToken>;
    }
  | {
      type: TradeType.YearnDeposit;
      contract: YearnVaultContract;
      tokenOut: YearnLPToken;
    }
  | {
      type: TradeType.YearnWithdraw;
      contract: YearnVaultContract;
      tokenOut: NormalToken | CurveLPToken;
    }
  | {
      type: TradeType.LidoStake;
      contract: "LIDO_STETH_GATEWAY";
      tokenOut: NormalToken;
    }
  | {
      type: TradeType.ConvexDepositLP;
      contract: "CONVEX_BOOSTER";
      tokenOut: ConvexLPToken;
    }
  | {
      type: TradeType.ConvexStake;
      contract: ConvexPoolContract;
      tokenOut: ConvexStakedPhantomToken;
    }
  | {
      type: TradeType.ConvexDepositLPAndStake;
      contract: "CONVEX_BOOSTER";
      tokenOut: ConvexStakedPhantomToken;
    }
  | {
      type: TradeType.ConvexWithdrawLP;
      contract: "CONVEX_BOOSTER";
      tokenOut: CurveLPToken;
    }
  | {
      type: TradeType.ConvexWithdraw;
      contract: ConvexPoolContract;
      tokenOut: ConvexLPToken;
    }
  | {
      type: TradeType.ConvexWithdrawAndUnwrap;
      contract: ConvexPoolContract;
      tokenOut: CurveLPToken;
    }
  | {
      type: TradeType.BalancerJoin;
      contract: BalancerVaultContract;
      tokenOut: BalancerLPToken;
    }
  | {
      type: TradeType.BalancerExit;
      contract: BalancerVaultContract;
      tokenOut: Array<NormalToken | BalancerLPToken>;
    };
