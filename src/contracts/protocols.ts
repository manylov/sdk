export enum Protocols {
  Uniswap,
  Sushiswap,
  Curve,
  Yearn,
  Convex,
  Lido,
  Gearbox,
  Balancer,
  AaveV2,
  CompoundV2,
}

export interface ProtocolData {
  name: string;
  icon: string;
}

export const protocolData: Record<Protocols, ProtocolData> = {
  [Protocols.Uniswap]: {
    name: "Uniswap",
    icon: "/protocols/uniswap.png",
  },
  [Protocols.Sushiswap]: {
    name: "Sushiswap",
    icon: "/protocols/sushi.svg",
  },
  [Protocols.Curve]: {
    name: "Curve",
    icon: "/protocols/curve.svg",
  },
  [Protocols.Yearn]: {
    name: "Yearn",
    icon: "/protocols/yearn.svg",
  },
  [Protocols.Convex]: {
    name: "Convex",
    icon: "/protocols/convex.svg",
  },
  [Protocols.Lido]: {
    name: "Lido",
    icon: "/protocols/lido.svg",
  },
  [Protocols.Gearbox]: {
    name: "Gearbox",
    icon: "",
  },
  [Protocols.Balancer]: {
    name: "Balancer",
    icon: "",
  },
  [Protocols.AaveV2]: {
    name: "AaveV2",
    icon: "",
  },
  [Protocols.CompoundV2]: {
    name: "CompoundV2",
    icon: "",
  },
};
