import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LidoV1Adapter, LidoV1AdapterInterface } from "../../../../../contracts/adapters/lido/LidoV1.sol/LidoV1Adapter";
declare type LidoV1AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LidoV1Adapter__factory extends ContractFactory {
    constructor(...args: LidoV1AdapterConstructorParams);
    deploy(_creditManager: string, _lidoGateway: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LidoV1Adapter>;
    getDeployTransaction(_creditManager: string, _lidoGateway: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LidoV1Adapter;
    connect(signer: Signer): LidoV1Adapter__factory;
    static readonly bytecode = "0x6101606040523480156200001257600080fd5b506040516200193738038062001937833981810160405260408110156200003857600080fd5b50805160209182015160408051632b853d7960e11b81529051929391926001600160a01b0385169263570a7af292600480820193918290030181865afa15801562000087573d6000803e3d6000fd5b505050506040513d60208110156200009e57600080fd5b505160408051630a55006360e21b815290516001600160a01b0390921691632954018c916004808201926020929091908290030181865afa158015620000e8573d6000803e3d6000fd5b505050506040513d6020811015620000ff57600080fd5b505182826001600160a01b03821615806200012157506001600160a01b038116155b156200014057604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa1580156200018b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b191906200048a565b6001600160a01b0390811660a05290811660c0526000805460ff19169055821615159050620001f357604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200025891906200048a565b6001600160a01b031660e0816001600160a01b03168152505050600180819055506000826001600160a01b031663570a7af26040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002ba573d6000803e3d6000fd5b505050506040513d6020811015620002d157600080fd5b505160408051630a55006360e21b815290516001600160a01b0390921691632954018c916004808201926020929091908290030181865afa1580156200031b573d6000803e3d6000fd5b505050506040513d60208110156200033257600080fd5b50516040805163183fc7c960e31b815290519192506001600160a01b0384169163c1fe3e48916004808201926020929091908290030181865afa1580156200037e573d6000803e3d6000fd5b505050506040513d60208110156200039557600080fd5b50516001600160a01b039081166101005260408051634c252f9160e01b8152905191831691634c252f91916004808201926020929091908290030181865afa158015620003e6573d6000803e3d6000fd5b505050506040513d6020811015620003fd57600080fd5b50516001600160a01b0390811661012052604080516326c74fc360e01b81529051918316916326c74fc3916004808201926020929091908290030181865afa1580156200044e573d6000803e3d6000fd5b505050506040513d60208110156200046557600080fd5b50516001600160a01b0316610140525050680ad78ebc5ac620000060025550620004bc565b6000602082840312156200049d57600080fd5b81516001600160a01b0381168114620004b557600080fd5b9392505050565b60805160a05160c05160e05161010051610120516101405161139b6200059c600039600081816101dc01526108cc01526000818161019b0152818161052a01526109570152600081816102a8015261097901526000818161023301528181610344015281816105fd01526106eb01526000818161025a01528181610d1701528181610e050152610f1401526000818161012901528181610c160152610fbd0152600081816102810152818161043a015281816107ae01528181610d4e01528181610e3c01528181610ee50152818161104d01526110fb015261139b6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638456cb5911610097578063c12c21c011610066578063c12c21c01461027c578063c1fe3e48146102a3578063ce30bbdb146102ca578063ea99c2a6146102f957600080fd5b80638456cb591461021d578063a4d66daf14610225578063a50cf2c81461022e578063bd90df701461025557600080fd5b80633fc8cef3116100d35780633fc8cef3146101965780635c975abb146101bd57806361d027b3146101d757806378aa73a4146101fe57600080fd5b806327ea6f2b146101055780632f7a18811461012457806330bebac9146101745780633f4ba83a1461018e575b600080fd5b6101226004803603602081101561011b57600080fd5b5035610316565b005b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61017c610435565b60408051918252519081900360200190f35b6101226105cf565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b60005460ff16604080519115158252519081900360200190f35b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b610206600181565b6040805161ffff9092168252519081900360200190f35b6101226106bd565b61017c60025481565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b6102d2600f81565b6040518082600f8111156102e8576102e8611163565b815260200191505060405180910390f35b61017c6004803603602081101561030f57600080fd5b50356107a9565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa1580156103a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c49190611192565b6103fa576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028190556040805182815290517fe1e1c8251499b303aefb01cf84a5ce22a95911c20ce2f3f5ae670441a6353d829181900360200190a150565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa1580156104c4573d6000803e3d6000fd5b505050506040513d60208110156104da57600080fd5b5051604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808416600483015291519293506000927f0000000000000000000000000000000000000000000000000000000000000000909216916370a08231916024808201926020929091908290030181865afa158015610578573d6000803e3d6000fd5b505050506040513d602081101561058e57600080fd5b5051905060018111156105ca577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105c78183610863565b92505b505090565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa158015610659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067d9190611192565b6106b3576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb6109be565b565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa158015610747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076b9190611192565b6107a1576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb610aa4565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa158015610838573d6000803e3d6000fd5b505050506040513d602081101561084e57600080fd5b5051905061085c8382610863565b9392505050565b60006002548311156108a1576040517f2bfcdce800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280548490039055604080516024810185905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166044808301919091528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff532e86a000000000000000000000000000000000000000000000000000000001790526109a19083907f0000000000000000000000000000000000000000000000000000000000000000907f000000000000000000000000000000000000000000000000000000000000000090600180610b64565b80602001905160208110156109b557600080fd5b50519392505050565b60005460ff16610a2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff1615610b11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610a26565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a7a3390565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526060916000918816906370a0823190602401602060405180830381865afa158015610bd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfa91906111b4565b905060003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cce576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528816906370a0823190602401602060405180830381865afa158015610ca7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccb91906111b4565b90505b8415610dab576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152606482018490527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610d9257600080fd5b505af1158015610da6573d6000803e3d6000fd5b505050505b610dba8989898986868a610ea5565b92508415610e99576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152600160648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b158015610e8057600080fd5b505af1158015610e94573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a90610f3e9033907f0000000000000000000000000000000000000000000000000000000000000000908a906004016111fd565b6000604051808303816000875af1158015610f5d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fa391908101906112a5565b90503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146110ae576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b15801561109157600080fd5b505af11580156110a5573d6000803e3d6000fd5b50505050611158565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561113f57600080fd5b505af1158015611153573d6000803e3d6000fd5b505050505b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602082840312156111a457600080fd5b8151801515811461085c57600080fd5b6000602082840312156111c657600080fd5b5051919050565b60005b838110156111e85781810151838201526020016111d0565b838111156111f7576000848401525b50505050565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015282518060608401526112428160808501602087016111cd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156112b757600080fd5b815167ffffffffffffffff808211156112cf57600080fd5b818401915084601f8301126112e357600080fd5b8151818111156112f5576112f5611276565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561133b5761133b611276565b8160405282815287602084870101111561135457600080fd5b6111588360208301602088016111cd56fea2646970667358221220c721c9f69f17d22c8df04073142d8088f543e8bca61bfc21589aad059ed3435264736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): LidoV1AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LidoV1Adapter;
}
export {};
