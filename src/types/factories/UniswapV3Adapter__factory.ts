/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3Adapter,
  UniswapV3AdapterInterface,
} from "../UniswapV3Adapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "creditFilter",
    outputs: [
      {
        internalType: "contract ICreditFilter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "path",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002989380380620029898339818101604052810190620000379190620001d0565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b158015620000de57600080fd5b505afa158015620000f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000119919062000211565b600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620002b9565b600081519050620001b38162000285565b92915050565b600081519050620001ca816200029f565b92915050565b60008060408385031215620001e457600080fd5b6000620001f485828601620001a2565b92505060206200020785828601620001a2565b9150509250929050565b6000602082840312156200022457600080fd5b60006200023484828501620001b9565b91505092915050565b60006200024a8262000265565b9050919050565b60006200025e826200023d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b62000290816200023d565b81146200029c57600080fd5b50565b620002aa8162000251565b8114620002b657600080fd5b50565b6126c080620002c96000396000f3fe6080604052600436106100705760003560e01c8063c12c21c01161004e578063c12c21c014610100578063db3e21981461012b578063f28c04981461015b578063f93f515b1461018b57610070565b8063414bf389146100755780638ea83031146100a5578063c04b8d59146100d0575b600080fd5b61008f600480360381019061008a9190611dff565b6101b6565b60405161009c91906123ea565b60405180910390f35b3480156100b157600080fd5b506100ba6106d1565b6040516100c7919061223a565b60405180910390f35b6100ea60048036038101906100e59190611dbe565b6106f7565b6040516100f791906123ea565b60405180910390f35b34801561010c57600080fd5b50610115610c31565b6040516101229190612353565b60405180910390f35b61014560048036038101906101409190611e94565b610c55565b60405161015291906123ea565b60405180910390f35b61017560048036038101906101709190611e53565b611170565b60405161018291906123ea565b60405180910390f35b34801561019757600080fd5b506101a06116aa565b6040516101ad9190612338565b60405180910390f35b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b81526004016102129190612255565b60206040518083038186803b15801561022a57600080fd5b505afa15801561023e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102629190611d54565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660000160208101906102d79190611d2b565b6040518463ffffffff1660e01b81526004016102f5939291906122ae565b600060405180830381600087803b15801561030f57600080fd5b505af1158015610323573d6000803e3d6000fd5b5050505060008380360381019061033a9190611e29565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063414bf38960e01b8260405160240161038f9190612390565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000826000015173ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b815260040161042d919061223a565b60206040518083038186803b15801561044557600080fd5b505afa158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d9190611ee8565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b815260040161050193929190612270565b600060405180830381600087803b15801561051b57600080fd5b505af115801561052f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105589190611d7d565b90508080602001905181019061056e9190611ee8565b9550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d868960000160208101906105c29190611d2b565b8a60200160208101906105d59190611d2b565b610674896000015173ffffffffffffffffffffffffffffffffffffffff166370a082318c6040518263ffffffff1660e01b8152600401610615919061223a565b60206040518083038186803b15801561062d57600080fd5b505afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190611ee8565b886116d090919063ffffffff16565b8b6040518663ffffffff1660e01b81526004016106959594939291906122e5565b600060405180830381600087803b1580156106af57600080fd5b505af11580156106c3573d6000803e3d6000fd5b505050505050505050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b81526004016107539190612255565b60206040518083038186803b15801561076b57600080fd5b505afa15801561077f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a39190611d54565b90506000806108038580600001906107bb9190612405565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611753565b9150915060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401610886939291906122ae565b600060405180830381600087803b1580156108a057600080fd5b505af11580156108b4573d6000803e3d6000fd5b505050506000856108c49061258f565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063c04b8d5960e01b82604051602401610919919061236e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016109b3919061223a565b60206040518083038186803b1580156109cb57600080fd5b505afa1580156109df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a039190611ee8565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b8152600401610a8793929190612270565b600060405180830381600087803b158015610aa157600080fd5b505af1158015610ab5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ade9190611d7d565b905080806020019051810190610af49190611ee8565b9750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d888888610bd28b73ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff1660e01b8152600401610b73919061223a565b60206040518083038186803b158015610b8b57600080fd5b505afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611ee8565b886116d090919063ffffffff16565b8d6040518663ffffffff1660e01b8152600401610bf39594939291906122e5565b600060405180830381600087803b158015610c0d57600080fd5b505af1158015610c21573d6000803e3d6000fd5b5050505050505050505050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401610cb19190612255565b60206040518083038186803b158015610cc957600080fd5b505afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d019190611d54565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866000016020810190610d769190611d2b565b6040518463ffffffff1660e01b8152600401610d94939291906122ae565b600060405180830381600087803b158015610dae57600080fd5b505af1158015610dc2573d6000803e3d6000fd5b50505050600083803603810190610dd99190611ebe565b905081816060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063db3e219860e01b82604051602401610e2e91906123ce565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506000826020015173ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401610ecc919061223a565b60206040518083038186803b158015610ee457600080fd5b505afa158015610ef8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1c9190611ee8565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b8152600401610fa093929190612270565b600060405180830381600087803b158015610fba57600080fd5b505af1158015610fce573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ff79190611d7d565b90508080602001905181019061100d9190611ee8565b9550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d868960000160208101906110619190611d2b565b8a60200160208101906110749190611d2b565b8a611114888b6020015173ffffffffffffffffffffffffffffffffffffffff166370a082318e6040518263ffffffff1660e01b81526004016110b6919061223a565b60206040518083038186803b1580156110ce57600080fd5b505afa1580156110e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111069190611ee8565b6116d090919063ffffffff16565b6040518663ffffffff1660e01b81526004016111349594939291906122e5565b600060405180830381600087803b15801561114e57600080fd5b505af1158015611162573d6000803e3d6000fd5b505050505050505050919050565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b81526004016111cc9190612255565b60206040518083038186803b1580156111e457600080fd5b505afa1580156111f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121c9190611d54565b905060008061127c8580600001906112349190612405565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611753565b9150915060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663579122ab84600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b81526004016112ff939291906122ae565b600060405180830381600087803b15801561131957600080fd5b505af115801561132d573d6000803e3d6000fd5b5050505060008561133d906125a2565b905083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600063f28c049860e01b8260405160240161139291906123ac565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b815260040161142c919061223a565b60206040518083038186803b15801561144457600080fd5b505afa158015611458573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147c9190611ee8565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636ce4074a33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518463ffffffff1660e01b815260040161150093929190612270565b600060405180830381600087803b15801561151a57600080fd5b505af115801561152e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906115579190611d7d565b90508080602001905181019061156d9190611ee8565b975050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d8786888b61164d878c73ffffffffffffffffffffffffffffffffffffffff166370a082318f6040518263ffffffff1660e01b81526004016115ef919061223a565b60206040518083038186803b15801561160757600080fd5b505afa15801561161b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163f9190611ee8565b6116d090919063ffffffff16565b6040518663ffffffff1660e01b815260040161166d9594939291906122e5565b600060405180830381600087803b15801561168757600080fd5b505af115801561169b573d6000803e3d6000fd5b50505050505050505050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082821115611748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b60008061176a60008461178a90919063ffffffff16565b915061178360148451038461178a90919063ffffffff16565b9050915091565b600081601483011015611805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f746f416464726573735f6f766572666c6f77000000000000000000000000000081525060200191505060405180910390fd5b601482018351101561187f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f746f416464726573735f6f75744f66426f756e6473000000000000000000000081525060200191505060405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b60006118b66118b18461248d565b61245c565b9050828152602081018484840111156118ce57600080fd5b6118d98482856125d9565b509392505050565b60006118f46118ef8461248d565b61245c565b90508281526020810184848401111561190c57600080fd5b6119178482856125e8565b509392505050565b60008135905061192e8161262e565b92915050565b6000815190506119438161262e565b92915050565b600082601f83011261195a57600080fd5b813561196a8482602086016118a3565b91505092915050565b600082601f83011261198457600080fd5b81516119948482602086016118e1565b91505092915050565b600060a082840312156119af57600080fd5b81905092915050565b600060a082840312156119ca57600080fd5b6119d460a061245c565b9050600082013567ffffffffffffffff8111156119f057600080fd5b6119fc84828501611949565b6000830152506020611a108482850161191f565b6020830152506040611a2484828501611d01565b6040830152506060611a3884828501611d01565b6060830152506080611a4c84828501611d01565b60808301525092915050565b60006101008284031215611a6b57600080fd5b81905092915050565b60006101008284031215611a8757600080fd5b611a9261010061245c565b90506000611aa28482850161191f565b6000830152506020611ab68482850161191f565b6020830152506040611aca84828501611cec565b6040830152506060611ade8482850161191f565b6060830152506080611af284828501611d01565b60808301525060a0611b0684828501611d01565b60a08301525060c0611b1a84828501611d01565b60c08301525060e0611b2e84828501611cd7565b60e08301525092915050565b600060a08284031215611b4c57600080fd5b81905092915050565b600060a08284031215611b6757600080fd5b611b7160a061245c565b9050600082013567ffffffffffffffff811115611b8d57600080fd5b611b9984828501611949565b6000830152506020611bad8482850161191f565b6020830152506040611bc184828501611d01565b6040830152506060611bd584828501611d01565b6060830152506080611be984828501611d01565b60808301525092915050565b60006101008284031215611c0857600080fd5b81905092915050565b60006101008284031215611c2457600080fd5b611c2f61010061245c565b90506000611c3f8482850161191f565b6000830152506020611c538482850161191f565b6020830152506040611c6784828501611cec565b6040830152506060611c7b8482850161191f565b6060830152506080611c8f84828501611d01565b60808301525060a0611ca384828501611d01565b60a08301525060c0611cb784828501611d01565b60c08301525060e0611ccb84828501611cd7565b60e08301525092915050565b600081359050611ce681612645565b92915050565b600081359050611cfb8161265c565b92915050565b600081359050611d1081612673565b92915050565b600081519050611d2581612673565b92915050565b600060208284031215611d3d57600080fd5b6000611d4b8482850161191f565b91505092915050565b600060208284031215611d6657600080fd5b6000611d7484828501611934565b91505092915050565b600060208284031215611d8f57600080fd5b600082015167ffffffffffffffff811115611da957600080fd5b611db584828501611973565b91505092915050565b600060208284031215611dd057600080fd5b600082013567ffffffffffffffff811115611dea57600080fd5b611df68482850161199d565b91505092915050565b60006101008284031215611e1257600080fd5b6000611e2084828501611a58565b91505092915050565b60006101008284031215611e3c57600080fd5b6000611e4a84828501611a74565b91505092915050565b600060208284031215611e6557600080fd5b600082013567ffffffffffffffff811115611e7f57600080fd5b611e8b84828501611b3a565b91505092915050565b60006101008284031215611ea757600080fd5b6000611eb584828501611bf5565b91505092915050565b60006101008284031215611ed157600080fd5b6000611edf84828501611c11565b91505092915050565b600060208284031215611efa57600080fd5b6000611f0884828501611d16565b91505092915050565b611f1a81612535565b82525050565b611f29816124ea565b82525050565b611f38816124ea565b82525050565b6000611f49826124bd565b611f5381856124c8565b9350611f638185602086016125e8565b611f6c8161261d565b840191505092915050565b6000611f82826124bd565b611f8c81856124d9565b9350611f9c8185602086016125e8565b611fa58161261d565b840191505092915050565b611fb981612547565b82525050565b611fc88161256b565b82525050565b600060a0830160008301518482036000860152611feb8282611f3e565b91505060208301516120006020860182611f20565b506040830151612013604086018261221c565b506060830151612026606086018261221c565b506080830151612039608086018261221c565b508091505092915050565b6101008201600082015161205b6000850182611f20565b50602082015161206e6020850182611f20565b506040820151612081604085018261220d565b5060608201516120946060850182611f20565b5060808201516120a7608085018261221c565b5060a08201516120ba60a085018261221c565b5060c08201516120cd60c085018261221c565b5060e08201516120e060e08501826121fe565b50505050565b600060a08301600083015184820360008601526121038282611f3e565b91505060208301516121186020860182611f20565b50604083015161212b604086018261221c565b50606083015161213e606086018261221c565b506080830151612151608086018261221c565b508091505092915050565b610100820160008201516121736000850182611f20565b5060208201516121866020850182611f20565b506040820151612199604085018261220d565b5060608201516121ac6060850182611f20565b5060808201516121bf608085018261221c565b5060a08201516121d260a085018261221c565b5060c08201516121e560c085018261221c565b5060e08201516121f860e08501826121fe565b50505050565b612207816124fc565b82525050565b6122168161251c565b82525050565b6122258161252b565b82525050565b6122348161252b565b82525050565b600060208201905061224f6000830184611f2f565b92915050565b600060208201905061226a6000830184611f11565b92915050565b60006060820190506122856000830186611f11565b6122926020830185611f2f565b81810360408301526122a48184611f77565b9050949350505050565b60006060820190506122c36000830186611f2f565b6122d06020830185611f2f565b6122dd6040830184611f2f565b949350505050565b600060a0820190506122fa6000830188611f2f565b6123076020830187611f2f565b6123146040830186611f2f565b612321606083018561222b565b61232e608083018461222b565b9695505050505050565b600060208201905061234d6000830184611fb0565b92915050565b60006020820190506123686000830184611fbf565b92915050565b600060208201905081810360008301526123888184611fce565b905092915050565b6000610100820190506123a66000830184612044565b92915050565b600060208201905081810360008301526123c681846120e6565b905092915050565b6000610100820190506123e4600083018461215c565b92915050565b60006020820190506123ff600083018461222b565b92915050565b6000808335600160200384360303811261241e57600080fd5b80840192508235915067ffffffffffffffff82111561243c57600080fd5b60208301925060018202360383131561245457600080fd5b509250929050565b6000604051905081810181811067ffffffffffffffff821117156124835761248261261b565b5b8060405250919050565b600067ffffffffffffffff8211156124a8576124a761261b565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006124f5826124fc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062ffffff82169050919050565b6000819050919050565b6000612540826125b5565b9050919050565b600061255282612559565b9050919050565b6000612564826124fc565b9050919050565b60006125768261257d565b9050919050565b6000612588826124fc565b9050919050565b600061259b36836119b8565b9050919050565b60006125ae3683611b55565b9050919050565b60006125c0826125c7565b9050919050565b60006125d2826124fc565b9050919050565b82818337600083830152505050565b60005b838110156126065780820151818401526020810190506125eb565b83811115612615576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b612637816124ea565b811461264257600080fd5b50565b61264e816124fc565b811461265957600080fd5b50565b6126658161251c565b811461267057600080fd5b50565b61267c8161252b565b811461268757600080fd5b5056fea2646970667358221220acb23359465c3fb930d9d86e1b3fb066632f4971341687c3b37e5995b15055ba64736f6c63430007060033";

export class UniswapV3Adapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _creditManager: string,
    _swapContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3Adapter> {
    return super.deploy(
      _creditManager,
      _swapContract,
      overrides || {}
    ) as Promise<UniswapV3Adapter>;
  }
  getDeployTransaction(
    _creditManager: string,
    _swapContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _swapContract,
      overrides || {}
    );
  }
  attach(address: string): UniswapV3Adapter {
    return super.attach(address) as UniswapV3Adapter;
  }
  connect(signer: Signer): UniswapV3Adapter__factory {
    return super.connect(signer) as UniswapV3Adapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3AdapterInterface {
    return new utils.Interface(_abi) as UniswapV3AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Adapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Adapter;
  }
}
