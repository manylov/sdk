// SPDX-License-Identifier: UNLICENSED
// Gearbox. Generalized leverage protocol that allows to take leverage and then use it across other DeFi protocols and platforms in a composable way.
// (c) Gearbox Foundation, 2023
pragma solidity ^0.8.17;

import {Test} from "forge-std/Test.sol";
import {Contracts} from "./ContractType.sol";

struct ContractData {
    Contracts id;
    address addr;
    string name;
}

interface ISupportedContracts {
    function addressOf(Contracts c) external view returns (address);

    function nameOf(Contracts c) external view returns (string memory);

    function contractIndex(address) external view returns (Contracts);

    function contractCount() external view returns (uint256);
}

contract SupportedContracts is Test, ISupportedContracts {
    mapping(Contracts => address) public override addressOf;
    mapping(Contracts => string) public override nameOf;
    mapping(address => Contracts) public override contractIndex;
    mapping(uint256 => ContractData[]) public contractDataByNetwork;

    uint256 public override contractCount;

    constructor(uint256 _chainId) {
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.UNISWAP_V2_ROUTER,
                addr: 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D,
                name: "UNISWAP_V2_ROUTER"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.UNISWAP_V3_ROUTER,
                addr: 0xE592427A0AEce92De3Edee1F18E0157C05861564,
                name: "UNISWAP_V3_ROUTER"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.SUSHISWAP_ROUTER,
                addr: 0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F,
                name: "SUSHISWAP_ROUTER"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_3CRV_POOL,
                addr: 0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7,
                name: "CURVE_3CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_FRAX_USDC_POOL,
                addr: 0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2,
                name: "CURVE_FRAX_USDC_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_STETH_GATEWAY,
                addr: 0xEf0D72C594b28252BF7Ea2bfbF098792430815b1,
                name: "CURVE_STETH_GATEWAY"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_FRAX_POOL,
                addr: 0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B,
                name: "CURVE_FRAX_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_LUSD_POOL,
                addr: 0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA,
                name: "CURVE_LUSD_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_SUSD_POOL,
                addr: 0xA5407eAE9Ba41422680e2e00537571bcC53efBfD,
                name: "CURVE_SUSD_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_SUSD_DEPOSIT,
                addr: 0xFCBa3E75865d2d561BE8D220616520c171F12851,
                name: "CURVE_SUSD_DEPOSIT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_GUSD_POOL,
                addr: 0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956,
                name: "CURVE_GUSD_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_MIM_POOL,
                addr: 0x5a6A4D54456819380173272A5E8E9B9904BdF41B,
                name: "CURVE_MIM_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_OHMFRAXBP_POOL,
                addr: 0xFc1e8bf3E81383Ef07Be24c3FD146745719DE48D,
                name: "CURVE_OHMFRAXBP_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_CRVETH_POOL,
                addr: 0x8301AE4fc9c624d1D396cbDAa1ed877821D7C511,
                name: "CURVE_CRVETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_CVXETH_POOL,
                addr: 0xB576491F1E6e5E62f1d8F26062Ee822B40B0E0d4,
                name: "CURVE_CVXETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_3CRYPTO_POOL,
                addr: 0xf5f5B97624542D72A9E06f04804Bf81baA15e2B4,
                name: "CURVE_3CRYPTO_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_LDOETH_POOL,
                addr: 0x9409280DC1e6D33AB7A8C6EC03e5763FB61772B5,
                name: "CURVE_LDOETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_GEAR_POOL,
                addr: 0x0E9B5B092caD6F1c5E6bc7f89Ffe1abb5c95F1C2,
                name: "CURVE_GEAR_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_USDC_POOL,
                addr: 0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E,
                name: "CURVE_CRVUSD_USDC_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_USDT_POOL,
                addr: 0x390f3595bCa2Df7d23783dFd126427CCeb997BF4,
                name: "CURVE_CRVUSD_USDT_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_FRAX_POOL,
                addr: 0x0CD6f267b2086bea681E922E19D40512511BE538,
                name: "CURVE_CRVUSD_FRAX_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CURVE_TRI_CRV_POOL,
                addr: 0x4eBdF703948ddCEA3B11f675B4D1Fba9d2414A14,
                name: "CURVE_TRI_CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_DAI_VAULT,
                addr: 0xdA816459F1AB5631232FE5e97a05BBBb94970c95,
                name: "YEARN_DAI_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_USDC_VAULT,
                addr: 0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE,
                name: "YEARN_USDC_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_WETH_VAULT,
                addr: 0xa258C4606Ca8206D8aA700cE2143D7db854D168c,
                name: "YEARN_WETH_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_WBTC_VAULT,
                addr: 0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E,
                name: "YEARN_WBTC_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_CURVE_FRAX_VAULT,
                addr: 0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139,
                name: "YEARN_CURVE_FRAX_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.YEARN_CURVE_STETH_VAULT,
                addr: 0xdCD90C7f6324cfa40d7169ef80b12031770B4325,
                name: "YEARN_CURVE_STETH_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_BOOSTER,
                addr: 0xF403C135812408BFbE8713b5A23a04b3D48AAE31,
                name: "CONVEX_BOOSTER"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_3CRV_POOL,
                addr: 0x689440f2Ff927E1f24c72F1087E1FAF471eCe1c8,
                name: "CONVEX_3CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_FRAX_USDC_POOL,
                addr: 0x7e880867363A7e321f5d260Cade2B0Bb2F717B02,
                name: "CONVEX_FRAX_USDC_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_GUSD_POOL,
                addr: 0x7A7bBf95C44b144979360C3300B54A7D34b44985,
                name: "CONVEX_GUSD_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_SUSD_POOL,
                addr: 0x22eE18aca7F3Ee920D01F25dA85840D12d98E8Ca,
                name: "CONVEX_SUSD_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_STECRV_POOL,
                addr: 0x0A760466E1B4621579a82a39CB56Dda2F4E70f03,
                name: "CONVEX_STECRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_FRAX3CRV_POOL,
                addr: 0xB900EF131301B307dB5eFcbed9DBb50A3e209B2e,
                name: "CONVEX_FRAX3CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_LUSD3CRV_POOL,
                addr: 0x2ad92A7aE036a038ff02B96c88de868ddf3f8190,
                name: "CONVEX_LUSD3CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_CLAIM_ZAP,
                addr: 0x92Cf9E5e4D1Dfbf7dA0d2BB3e884a68416a65070,
                name: "CONVEX_CLAIM_ZAP"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_OHMFRAXBP_POOL,
                addr: 0x27A8c58e3DE84280826d615D80ddb33930383fE9,
                name: "CONVEX_OHMFRAXBP_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_MIM3CRV_POOL,
                addr: 0xFd5AbF66b003881b88567EB9Ed9c651F14Dc4771,
                name: "CONVEX_MIM3CRV_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_CRVETH_POOL,
                addr: 0x085A2054c51eA5c91dbF7f90d65e728c0f2A270f,
                name: "CONVEX_CRVETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_CVXETH_POOL,
                addr: 0xb1Fb0BA0676A1fFA83882c7F4805408bA232C1fA,
                name: "CONVEX_CVXETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_3CRYPTO_POOL,
                addr: 0xb05262D4aaAA38D0Af4AaB244D446ebDb5afd4A7,
                name: "CONVEX_3CRYPTO_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.CONVEX_LDOETH_POOL,
                addr: 0x8CA990E954611E5E3d2cc51C013fCC372c8c1D38,
                name: "CONVEX_LDOETH_POOL"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.LIDO_STETH_GATEWAY,
                addr: 0x6f4b4aB5142787c05b7aB9A9692A0f46b997C29D,
                name: "LIDO_STETH_GATEWAY"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.LIDO_WSTETH,
                addr: 0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0,
                name: "LIDO_WSTETH"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.BALANCER_VAULT,
                addr: 0xBA12222222228d8Ba445958a75a0704d566BF2C8,
                name: "BALANCER_VAULT"
            })
        );
        contractDataByNetwork[1].push(
            ContractData({
                id: Contracts.UNIVERSAL_ADAPTER,
                addr: 0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC,
                name: "UNIVERSAL_ADAPTER"
            })
        );

        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_USDC_POOL,
                addr: 0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E,
                name: "CURVE_CRVUSD_USDC_POOL"
            })
        );
        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_USDT_POOL,
                addr: 0x390f3595bCa2Df7d23783dFd126427CCeb997BF4,
                name: "CURVE_CRVUSD_USDT_POOL"
            })
        );
        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.CURVE_CRVUSD_FRAX_POOL,
                addr: 0x0CD6f267b2086bea681E922E19D40512511BE538,
                name: "CURVE_CRVUSD_FRAX_POOL"
            })
        );
        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.CURVE_TRI_CRV_POOL,
                addr: 0x4eBdF703948ddCEA3B11f675B4D1Fba9d2414A14,
                name: "CURVE_TRI_CRV_POOL"
            })
        );

        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.LIDO_WSTETH,
                addr: 0x5979D7b546E38E414F7E9822514be443A4800529,
                name: "LIDO_WSTETH"
            })
        );

        contractDataByNetwork[42161].push(
            ContractData({
                id: Contracts.UNIVERSAL_ADAPTER,
                addr: 0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC,
                name: "UNIVERSAL_ADAPTER"
            })
        );

        ContractData[] storage cd = contractDataByNetwork[_chainId];

        uint256 len = cd.length;
        contractCount = len;
        unchecked {
            for (uint256 i; i < len; ++i) {
                addressOf[cd[i].id] = cd[i].addr;
                nameOf[cd[i].id] = cd[i].name;
                contractIndex[cd[i].addr] = cd[i].id;

                vm.label(cd[i].addr, cd[i].name);
            }
        }
    }
}
