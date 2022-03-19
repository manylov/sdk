import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WadRayMathTest, WadRayMathTestInterface } from "../WadRayMathTest";
export declare class WadRayMathTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WadRayMathTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WadRayMathTest;
    connect(signer: Signer): WadRayMathTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610d82806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80637df38c5b116100665780637df38c5b146101af5780639c34d880146101cd578063d2e3058514610219578063e304e1d314610265578063e57b6d3b146102835761009e565b806310de27b9146100a35780631fa89fc6146100e557806329cb5aa414610103578063416a8b2014610145578063761fdad614610163575b600080fd5b6100cf600480360360208110156100b957600080fd5b81019080803590602001909291905050506102cf565b6040518082815260200191505060405180910390f35b6100ed6102e1565b6040518082815260200191505060405180910390f35b61012f6004803603602081101561011957600080fd5b81019080803590602001909291905050506102f0565b6040518082815260200191505060405180910390f35b61014d610302565b6040518082815260200191505060405180910390f35b6101996004803603604081101561017957600080fd5b810190808035906020019092919080359060200190929190505050610311565b6040518082815260200191505060405180910390f35b6101b761032e565b6040518082815260200191505060405180910390f35b610203600480360360408110156101e357600080fd5b81019080803590602001909291908035906020019092919050505061033d565b6040518082815260200191505060405180910390f35b61024f6004803603604081101561022f57600080fd5b81019080803590602001909291908035906020019092919050505061035a565b6040518082815260200191505060405180910390f35b61026d610377565b6040518082815260200191505060405180910390f35b6102b96004803603604081101561029957600080fd5b810190808035906020019092919080359060200190929190505050610386565b6040518082815260200191505060405180910390f35b60006102da826103a3565b9050919050565b60006102eb6104a5565b905090565b60006102fb826104c3565b9050919050565b600061030c6105d6565b905090565b600061032682846105ea90919063ffffffff16565b905092915050565b6000610338610757565b905090565b6000610352828461076790919063ffffffff16565b905092915050565b600061036f828461099490919063ffffffff16565b905092915050565b6000610381610b0d565b905090565b600061039b8284610b2790919063ffffffff16565b905092915050565b600080633b9aca008302905082633b9aca0082816103bd57fe5b04146040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509061049b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610460578082015181840152602081019050610445565b50505050905090810190601f16801561048d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5080915050919050565b600060026b033b2e3c9fd0803ce8000000816104bd57fe5b04905090565b6000806002633b9aca00816104d457fe5b04905060008382019050818110156040518060400160405280600281526020017f4d32000000000000000000000000000000000000000000000000000000000000815250906105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610583578082015181840152602081019050610568565b50505050905090810190601f1680156105b05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50633b9aca0081816105cc57fe5b0492505050919050565b60006b033b2e3c9fd0803ce8000000905090565b6000808314806105fa5750600082145b156106085760009050610751565b816002670de0b6b3a76400008161061b57fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038161064557fe5b048311156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610725576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ea5780820151818401526020810190506106cf565b50505050905090810190601f1680156107175780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50670de0b6b3a76400006002670de0b6b3a76400008161074157fe5b04838502018161074d57fe5b0490505b92915050565b6000670de0b6b3a7640000905090565b6000808214156040518060400160405280600281526020017f4d3300000000000000000000000000000000000000000000000000000000000081525090610849576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561080e5780820151818401526020810190506107f3565b50505050905090810190601f16801561083b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006002838161085657fe5b0490506b033b2e3c9fd0803ce8000000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038161089057fe5b048411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610970576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561093557808201518184015260208101905061091a565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082816b033b2e3c9fd0803ce80000008602018161098a57fe5b0491505092915050565b6000808314806109a45750600082145b156109b25760009050610b07565b8160026b033b2e3c9fd0803ce8000000816109c957fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03816109f357fe5b048311156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610ad3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a98578082015181840152602081019050610a7d565b50505050905090810190601f168015610ac55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506b033b2e3c9fd0803ce800000060026b033b2e3c9fd0803ce800000081610af757fe5b048385020181610b0357fe5b0490505b92915050565b60006002670de0b6b3a764000081610b2157fe5b04905090565b6000808214156040518060400160405280600281526020017f4d3300000000000000000000000000000000000000000000000000000000000081525090610c09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bce578082015181840152602081019050610bb3565b50505050905090810190601f168015610bfb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600060028381610c1657fe5b049050670de0b6b3a7640000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0381610c4c57fe5b048411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610d2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cf1578082015181840152602081019050610cd6565b50505050905090810190601f168015610d1e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508281670de0b6b3a764000086020181610d4257fe5b049150509291505056fea26469706673582212203ca0598ee26756eae90d2f94f85b921eb478e842be5b7d6567cd9ee6be7b47b464736f6c63430007060033";
    static readonly abi: {
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
    }[];
    static createInterface(): WadRayMathTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WadRayMathTest;
}
