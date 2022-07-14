import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConvexV1BoosterAdapter, ConvexV1BoosterAdapterInterface } from "../../../../../contracts/adapters/convex/ConvexV1_Booster.sol/ConvexV1BoosterAdapter";
declare type ConvexV1BoosterAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConvexV1BoosterAdapter__factory extends ContractFactory {
    constructor(...args: ConvexV1BoosterAdapterConstructorParams);
    deploy(_creditManager: string, _booster: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ConvexV1BoosterAdapter>;
    getDeployTransaction(_creditManager: string, _booster: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ConvexV1BoosterAdapter;
    connect(signer: Signer): ConvexV1BoosterAdapter__factory;
    static readonly bytecode = "0x6101406040523480156200001257600080fd5b50604051620023a0380380620023a083398101604081905262000035916200037b565b816001600160a01b031663570a7af26040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000074573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200009a9190620003ba565b6001600160a01b0316632954018c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000d8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000fe9190620003ba565b82826001600160a01b03821615806200011e57506001600160a01b038116155b156200013d57604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa15801562000188573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ae9190620003ba565b6001600160a01b0390811660a05290811660c0526000805460ff19169055821615159050620001f057604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200022f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002559190620003ba565b6001600160a01b0390811660e0526001805560408051636a4874a160e01b815290519184169250636a4874a19160048083019260209291908290030181865afa158015620002a7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002cd9190620003ba565b6001600160a01b0316610100816001600160a01b031681525050806001600160a01b031663075461726040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000326573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200034c9190620003ba565b6001600160a01b03166101205250620003e19050565b6001600160a01b03811681146200037857600080fd5b50565b600080604083850312156200038f57600080fd5b82516200039c8162000362565b6020840151909250620003af8162000362565b809150509250929050565b600060208284031215620003cd57600080fd5b8151620003da8162000362565b9392505050565b60805160a05160c05160e0516101005161012051611ec0620004e060003960006101a2015260006103550152600081816103c20152818161068f015281816109310152610a600152600081816103f10152818161045b0152818161055f015281816105d4015281816107e90152818161089a01528181610f4901528181610fb60152818161114e0152818161125d0152818161162f0152818161174e01526118280152600081816102c00152818161149a01526118ee01526000818161041801528181610b1a01528181610d04015281816113f7015281816116850152818161171f0152818161185f0152818161197e0152611a2c0152611ec06000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80636a4874a1116100e3578063a50cf2c81161008c578063c12c21c011610066578063c12c21c014610413578063ce30bbdb1461043a578063cfb9cfba1461044f57600080fd5b8063a50cf2c8146103bd578063ab366292146103e4578063bd90df70146103ec57600080fd5b80638456cb59116100bd5780638456cb591461039a578063958e2d31146103a25780639b51ecd3146103b557600080fd5b80636a4874a11461035057806378aa73a4146103775780637b1039991461039257600080fd5b80633f4ba83a116101455780635c975abb1161011f5780635c975abb1461032a5780635ebaf1db1461033557806360759fce1461033d57600080fd5b80633f4ba83a146102ea57806343a0d066146102f4578063441a3e701461031757600080fd5b8063251d48c011610176578063251d48c0146102855780632f7a1881146102bb578063376d771a146102e257600080fd5b8063075461721461019d578063081e3eda146101ee5780631526fe2714610204575b600080fd5b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6101f6610457565b6040519081526020016101e5565b610217610212366004611a91565b6104ed565b6040516101e59190600060c08201905073ffffffffffffffffffffffffffffffffffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401525060a0830151151560a083015292915050565b6101c4610293366004611a91565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b6101c46105d0565b6102f2610661565b005b610307610302366004611abb565b61074f565b60405190151581526020016101e5565b610307610325366004611af4565b61079b565b60005460ff16610307565b6101c46107e5565b61030761034b366004611b16565b610852565b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b61037f600181565b60405161ffff90911681526020016101e5565b6101c4610896565b6102f2610903565b6103076103b0366004611a91565b6109ef565b6102f2610a32565b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b6101c4610f45565b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b6101c47f000000000000000000000000000000000000000000000000000000000000000081565b610442600d81565b6040516101e59190611b75565b6101c4610fb2565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663081e3eda6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e89190611bb6565b905090565b6040805160c081018252600080825260208201819052818301819052606082018190526080820181905260a082015290517f1526fe270000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631526fe279060240160c060405180830381865afa1580156105a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ca9190611c27565b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663376d771a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e89190611cc8565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa1580156106eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070f9190611ce3565b610745576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074d61101f565b565b600061079384836000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061110592505050565b949350505050565b60006107de836000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061121492505050565b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635ebaf1db6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063d573d6000803e3d6000fd5b60006107de83836000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061110592505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063d573d6000803e3d6000fd5b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa15801561098d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b19190611ce3565b6109e7576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074d6112ee565b60006105ca826000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061121492505050565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610abc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae09190611ce3565b610b16576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f9aa028a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba79190611cc8565b905060008173ffffffffffffffffffffffffffffffffffffffff166350e036ff6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1a9190611bb6565b905060005b81811015610f40576040517f5094cb4f0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff851690635094cb4f90602401602060405180830381865afa158015610c95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb99190611cc8565b6040517ffdd5764500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063fdd5764590602401602060405180830381865afa158015610d4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6f9190611cc8565b905060008173ffffffffffffffffffffffffffffffffffffffff1663ce30bbdb6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de29190611d00565b9050600c81600f811115610df857610df8611b46565b1415610f325760008273ffffffffffffffffffffffffffffffffffffffff1663f10684546040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f9190611bb6565b90508273ffffffffffffffffffffffffffffffffffffffff166320b2c1516040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ebc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee09190611cc8565b60009182526002602052604090912080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790555b836001019350505050610c1f565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ab3662926040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063d573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663cfb9cfba6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063d573d6000803e3d6000fd5b60005460ff16611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b6040517f1526fe2700000000000000000000000000000000000000000000000000000000815260048101849052600090819073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631526fe279060240160c060405180830381865afa158015611195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b99190611c27565b80519091506000856111cf5782602001516111f5565b60008781526002602052604090205473ffffffffffffffffffffffffffffffffffffffff165b9050611206828287600160006113ae565b506001979650505050505050565b6040517f1526fe2700000000000000000000000000000000000000000000000000000000815260048101839052600090819073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631526fe279060240160c060405180830381865afa1580156112a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c89190611c27565b60208101518151919250906112e18282876000806113ae565b5060019695505050505050565b60005460ff161561135b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401611087565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110db3390565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015260609060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa15801561143e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114629190611cc8565b905061147281888888888861147d565b979650505050505050565b60606000803373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146115e6576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa15801561152b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154f9190611bb6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa1580156115bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e39190611bb6565b90505b84156116e2576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156116c957600080fd5b505af11580156116dd573d6000803e3d6000fd5b505050505b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906117789033907f0000000000000000000000000000000000000000000000000000000000000000908b90600401611d51565b6000604051808303816000875af1158015611797573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526117dd9190810190611dca565b925084156118bc576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152600160648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156118a357600080fd5b505af11580156118b7573d6000803e3d6000fd5b505050505b6118ca8989898585896118d6565b50509695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146119df576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015286811660248301528581166044830152606482018590526084820184905282151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b1580156119c257600080fd5b505af11580156119d6573d6000803e3d6000fd5b50505050611a89565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015611a7057600080fd5b505af1158015611a84573d6000803e3d6000fd5b505050505b505050505050565b600060208284031215611aa357600080fd5b5035919050565b8015158114611ab857600080fd5b50565b600080600060608486031215611ad057600080fd5b83359250602084013591506040840135611ae981611aaa565b809150509250925092565b60008060408385031215611b0757600080fd5b50508035926020909101359150565b60008060408385031215611b2957600080fd5b823591506020830135611b3b81611aaa565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160108310611bb0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208284031215611bc857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b805173ffffffffffffffffffffffffffffffffffffffff81168114611c2257600080fd5b919050565b600060c08284031215611c3957600080fd5b60405160c0810181811067ffffffffffffffff82111715611c5c57611c5c611bcf565b604052611c6883611bfe565b8152611c7660208401611bfe565b6020820152611c8760408401611bfe565b6040820152611c9860608401611bfe565b6060820152611ca960808401611bfe565b608082015260a0830151611cbc81611aaa565b60a08201529392505050565b600060208284031215611cda57600080fd5b6107de82611bfe565b600060208284031215611cf557600080fd5b81516107de81611aaa565b600060208284031215611d1257600080fd5b8151601081106107de57600080fd5b60005b83811015611d3c578181015183820152602001611d24565b83811115611d4b576000848401525b50505050565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301528251806060840152611d96816080850160208701611d21565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b600060208284031215611ddc57600080fd5b815167ffffffffffffffff80821115611df457600080fd5b818401915084601f830112611e0857600080fd5b815181811115611e1a57611e1a611bcf565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611e6057611e60611bcf565b81604052828152876020848701011115611e7957600080fd5b611472836020830160208801611d2156fea26469706673582212207c7e4282447de842523f32de186915c8b05661bbf1a5932bdb0cacabef155e7c64736f6c634300080a0033";
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ConvexV1BoosterAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConvexV1BoosterAdapter;
}
export {};
