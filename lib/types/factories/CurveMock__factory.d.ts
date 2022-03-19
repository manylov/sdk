import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveMock, CurveMockInterface } from "../CurveMock";
export declare class CurveMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveMock>;
    getDeployTransaction(_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveMock;
    connect(signer: Signer): CurveMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610e64380380610e648339818101604052602081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b8382019150602082018581111561006957600080fd5b825186602082028301116401000000008211171561008657600080fd5b8083526020830192505050908051906020019060200280838360005b838110156100bd5780820151818401526020810190506100a2565b5050505090500160405250505080600090805190602001906100e09291906100e7565b505061018e565b828054828255906000526020600020908101928215610160579160200282015b8281111561015f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610107565b5b50905061016d9190610171565b5090565b5b8082111561018a576000816000905550600101610172565b5090565b610cc78061019d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806307211ef7146100675780633df02124146100c35780635e0d443f14610115578063a6417ed614610171578063bb7b8b80146101c3578063c6610657146101e1575b600080fd5b6100ad6004803603606081101561007d57600080fd5b810190808035600f0b90602001909291908035600f0b906020019092919080359060200190929190505050610239565b6040518082815260200191505060405180910390f35b610113600480360360808110156100d957600080fd5b810190808035600f0b90602001909291908035600f0b90602001909291908035906020019092919080359060200190929190505050610312565b005b61015b6004803603606081101561012b57600080fd5b810190808035600f0b90602001909291908035600f0b90602001909291908035906020019092919050505061044d565b6040518082815260200191505060405180910390f35b6101c16004803603608081101561018757600080fd5b810190808035600f0b90602001909291908035600f0b90602001909291908035906020019092919080359060200190929190505050610495565b005b6101cb61056c565b6040518082815260200191505060405180910390f35b61020d600480360360208110156101f757600080fd5b8101908080359060200190929190505050610645565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156102d75780820151818401526020810190506102bc565b50505050905090810190601f1680156103045780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b600061031f85858561044d565b90508181101561037a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610c6d6025913960400191505060405180910390fd5b6103e1333085600089600f0b8154811061039057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610684909392919063ffffffff16565b6104463382600087600f0b815481106103f657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166107459092919063ffffffff16565b5050505050565b600061048c826001600087600f0b8152602001908152602001600020600086600f0b8152602001908152602001600020546107e790919063ffffffff16565b90509392505050565b6040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610531578082015181840152602081019050610516565b50505050905090810190601f16801561055e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60006040518060400160405280600281526020017f4e490000000000000000000000000000000000000000000000000000000000008152506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561060a5780820151818401526020810190506105ef565b50505050905090810190601f1680156106375780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000818154811061065557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61073f846323b872dd60e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061086d565b50505050565b6107e28363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061086d565b505050565b6000808314156107fa5760009050610867565b600082840290508284828161080b57fe5b0414610862576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c226021913960400191505060405180910390fd5b809150505b92915050565b60006108cf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661095c9092919063ffffffff16565b9050600081511115610957578080602001905160208110156108f057600080fd5b8101908080519060200190929190505050610956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610c43602a913960400191505060405180910390fd5b5b505050565b606061096b8484600085610974565b90509392505050565b6060824710156109cf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610bfc6026913960400191505060405180910390fd5b6109d885610b1c565b610a4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310610a995780518252602082019150602081019050602083039250610a76565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610afb576040519150601f19603f3d011682016040523d82523d6000602084013e610b00565b606091505b5091509150610b10828286610b2f565b92505050949350505050565b600080823b905060008111915050919050565b60608315610b3f57829050610bf4565b600083511115610b525782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bb9578082015181840152602081019050610b9e565b50505050905090810190601f168015610be65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656443757276654d6f636b3a20494e53554646494349454e545f4f55545055545f414d4f554e54a2646970667358221220774d5e05ea6208c51415f2115955af0f054c100d14dc3babeb3d23eeec1544f464736f6c63430007060033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): CurveMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveMock;
}
