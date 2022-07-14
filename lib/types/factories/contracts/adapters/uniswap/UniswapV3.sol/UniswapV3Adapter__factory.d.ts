import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV3Adapter, UniswapV3AdapterInterface } from "../../../../../contracts/adapters/uniswap/UniswapV3.sol/UniswapV3Adapter";
declare type UniswapV3AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniswapV3Adapter__factory extends ContractFactory {
    constructor(...args: UniswapV3AdapterConstructorParams);
    deploy(_creditManager: string, _router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV3Adapter>;
    getDeployTransaction(_creditManager: string, _router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV3Adapter;
    connect(signer: Signer): UniswapV3Adapter__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620020b2380380620020b2833981016040819052620000349162000121565b81816001600160a01b03821615806200005457506001600160a01b038116155b156200007357604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000be573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e4919062000159565b6001600160a01b0390811660a0521660c05250506001600055506200017e565b80516001600160a01b03811681146200011c57600080fd5b919050565b600080604083850312156200013557600080fd5b620001408362000104565b9150620001506020840162000104565b90509250929050565b6000602082840312156200016c57600080fd5b620001778262000104565b9392505050565b60805160a05160c051611e956200021d6000396000818161017a015281816110ef0152818161120e01526112e801526000818160d301528181610f5a015261147a0152600081816101c101528181610314015281816105620152818161070401528181610a2701528181610bbf01528181610d0501528181611145015281816111df0152818161133e0152818161150a01526115b80152611e956000f3fe6080604052600436106100bc5760003560e01c8063c12c21c011610074578063db3e21981161004e578063db3e219814610225578063f28c049814610238578063f4f18d901461024b57600080fd5b8063c12c21c0146101af578063c7fbf4de146101e3578063ce30bbdb1461020357600080fd5b806378aa73a4116100a557806378aa73a414610140578063bd90df7014610168578063c04b8d591461019c57600080fd5b80632f7a1881146100c1578063414bf3891461011f575b600080fd5b3480156100cd57600080fd5b506100f57f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61013261012d3660046116cc565b61026b565b604051908152602001610116565b34801561014c57600080fd5b50610155600281565b60405161ffff9091168152602001610116565b34801561017457600080fd5b506100f57f000000000000000000000000000000000000000000000000000000000000000081565b6101326101aa366004611702565b6104be565b3480156101bb57600080fd5b506100f57f000000000000000000000000000000000000000000000000000000000000000081565b3480156101ef57600080fd5b506101326101fe36600461173f565b6106bc565b34801561020f57600080fd5b50610218600281565b6040516101169190611751565b6101326102333660046116cc565b610983565b610132610246366004611702565b610b1b565b34801561025757600080fd5b50610132610266366004611792565b610cbd565b6000600260005414156102df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610370573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039491906117f2565b905060006103a736859003850185611991565b73ffffffffffffffffffffffffffffffffffffffff83166060820152905061049e826103d660208701876119ae565b6103e660408801602089016119ae565b6040517f414bf38900000000000000000000000000000000000000000000000000000000906104199087906024016119cb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152600180610f3d565b8060200190518101906104b19190611a46565b6001600055949350505050565b60006002600054141561052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102d6565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156105be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e291906117f2565b905060008061062e6105f48680611a5f565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113b592505050565b9150915060008561063e90611bc6565b73ffffffffffffffffffffffffffffffffffffffff8516602082015260405190915061069a908590859085907fc04b8d590000000000000000000000000000000000000000000000000000000090610419908790602401611cab565b8060200190518101906106ad9190611a46565b60016000559695505050505050565b6040517fe958b704000000000000000000000000000000000000000000000000000000008152336004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa15801561074b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076f91906117f2565b9050600061078060208501856119ae565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291909116906370a0823190602401602060405180830381865afa1580156107ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108129190611a46565b9050600181111561097c576040805161010081019091527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909101906000908061085f60208801886119ae565b73ffffffffffffffffffffffffffffffffffffffff16815260200186602001602081019061088d91906119ae565b73ffffffffffffffffffffffffffffffffffffffff1681526020016108b86060880160408901611cbe565b62ffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001866060013581526020018381526020016b033b2e3c9fd0803ce800000087608001358561090b9190611d08565b6109159190611d45565b815260200161092a60c0880160a089016119ae565b73ffffffffffffffffffffffffffffffffffffffff16905290506109658361095560208801886119ae565b6103e66040890160208a016119ae565b8060200190518101906109789190611a46565b9350505b5050919050565b6000600260005414156109f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102d6565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610a83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa791906117f2565b90506000610aba36859003850185611991565b73ffffffffffffffffffffffffffffffffffffffff831660608201528051602082015160405192935061049e92859291907fdb3e219800000000000000000000000000000000000000000000000000000000906104199087906024016119cb565b600060026000541415610b8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102d6565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3f91906117f2565b9050600080610c516105f48680611a5f565b91509150600085610c6190611bc6565b73ffffffffffffffffffffffffffffffffffffffff8516602082015260405190915061069a908590849086907ff28c04980000000000000000000000000000000000000000000000000000000090610419908790602401611cab565b6040517fe958b704000000000000000000000000000000000000000000000000000000008152336004820152600090819073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015610d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7091906117f2565b9050600080610d826105f48680611a5f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529294509092506000918416906370a0823190602401602060405180830381865afa158015610df7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1b9190611a46565b90506001811115610f34576040805160a081019091527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091019060009080610e648980611a5f565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525073ffffffffffffffffffffffffffffffffffffffff8716602080830191909152890135604080830191909152606082018590526080909101906b033b2e3c9fd0803ce800000090610eef908b013586611d08565b610ef99190611d45565b8152509050610f1d85858563c04b8d5960e01b856040516024016104199190611cab565b806020019051810190610f309190611a46565b9550505b50505050919050565b60606000803373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146110a6576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa158015610feb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100f9190611a46565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa15801561107f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a39190611a46565b90505b84156111a2576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561118957600080fd5b505af115801561119d573d6000803e3d6000fd5b505050505b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906112389033907f0000000000000000000000000000000000000000000000000000000000000000908b90600401611d80565b6000604051808303816000875af1158015611257573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261129d9190810190611dc2565b9250841561139b576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561138257600080fd5b505af1158015611396573d6000803e3d6000fd5b505050505b6113a9898989858589611462565b50509695505050505050565b60008060036113c660146002611d08565b6113d09190611e30565b8351101561140a576040517f8287466d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61141583600061161d565b915061145b61142660036014611e30565b61143260036014611e30565b601486516114409190611e48565b61144a9190611d45565b6114549190611d08565b849061161d565b9050915091565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461156b576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015286811660248301528581166044830152606482018590526084820184905282151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b15801561154e57600080fd5b505af1158015611562573d6000803e3d6000fd5b50505050611615565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b1580156115fc57600080fd5b505af1158015611610573d6000803e3d6000fd5b505050505b505050505050565b600061162a826014611e30565b83511015611694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e6473000000000000000000000060448201526064016102d6565b50818101602001516c0100000000000000000000000090045b92915050565b600061010082840312156116c657600080fd5b50919050565b600061010082840312156116df57600080fd5b6116e983836116b3565b9392505050565b600060a082840312156116c657600080fd5b60006020828403121561171457600080fd5b813567ffffffffffffffff81111561172b57600080fd5b611737848285016116f0565b949350505050565b600060c082840312156116c657600080fd5b602081016010831061178c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6000602082840312156117a457600080fd5b813567ffffffffffffffff8111156117bb57600080fd5b8201606081850312156116e957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811681146117ef57600080fd5b50565b60006020828403121561180457600080fd5b81516116e9816117cd565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156118615761186161180f565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118ae576118ae61180f565b604052919050565b80356118c1816117cd565b919050565b803562ffffff811681146118c157600080fd5b60006101008083850312156118ed57600080fd5b6040519081019067ffffffffffffffff821181831017156119105761191061180f565b8160405280925083359150611924826117cd565b818152611933602085016118b6565b6020820152611944604085016118c6565b6040820152611955606085016118b6565b60608201526080840135608082015260a084013560a082015260c084013560c082015261198460e085016118b6565b60e0820152505092915050565b600061010082840312156119a457600080fd5b6116e983836118d9565b6000602082840312156119c057600080fd5b81356116e9816117cd565b61010081016116ad828473ffffffffffffffffffffffffffffffffffffffff80825116835280602083015116602084015262ffffff60408301511660408401528060608301511660608401526080820151608084015260a082015160a084015260c082015160c08401528060e08301511660e0840152505050565b600060208284031215611a5857600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a9457600080fd5b83018035915067ffffffffffffffff821115611aaf57600080fd5b602001915036819003821315611ac457600080fd5b9250929050565b600067ffffffffffffffff821115611ae557611ae561180f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600060a08284031215611b2357600080fd5b611b2b61183e565b9050813567ffffffffffffffff811115611b4457600080fd5b8201601f81018413611b5557600080fd5b80356020611b6a611b6583611acb565b611867565b8281528682848601011115611b7e57600080fd5b828285018383013760008184018301528452611b9b8582016118b6565b8185015250505060408201356040820152606082013560608201526080820135608082015292915050565b60006116ad3683611b11565b60005b83811015611bed578181015183820152602001611bd5565b83811115611bfc576000848401525b50505050565b60008151808452611c1a816020860160208601611bd2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815160a08452611c6160a0850182611c02565b905073ffffffffffffffffffffffffffffffffffffffff60208401511660208501526040830151604085015260608301516060850152608083015160808501528091505092915050565b6020815260006116e96020830184611c4c565b600060208284031215611cd057600080fd5b6116e9826118c6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d4057611d40611cd9565b500290565b600082611d7b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152611db96060830184611c02565b95945050505050565b600060208284031215611dd457600080fd5b815167ffffffffffffffff811115611deb57600080fd5b8201601f81018413611dfc57600080fd5b8051611e0a611b6582611acb565b818152856020838501011115611e1f57600080fd5b611db9826020830160208601611bd2565b60008219821115611e4357611e43611cd9565b500190565b600082821015611e5a57611e5a611cd9565b50039056fea26469706673582212205659e0ebd4ba1665595c3a5518ef9c11fdf8e62605a6ee763003a041a85233ef64736f6c634300080a0033";
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
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    static createInterface(): UniswapV3AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV3Adapter;
}
export {};
