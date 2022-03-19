import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressProvider, AddressProviderInterface } from "../AddressProvider";
export declare class AddressProvider__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AddressProvider>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AddressProvider;
    connect(signer: Signer): AddressProvider__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50600061002161012860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3503073ffffffffffffffffffffffffffffffffffffffff167f414444524553535f50524f5649444552000000000000000000000000000000007fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69160405160405180910390a3610130565b600033905090565b611ad88061013f6000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806376aad60511610125578063ae5a98ba116100ad578063c513c9bb1161007c578063c513c9bb146107dc578063ce3c4ae414610810578063f2fde38b14610854578063f9366f4714610898578063fca513a8146108b657610211565b8063ae5a98ba14610702578063affd924314610720578063bcaead9814610754578063c5120b391461079857610211565b806386e09c08116100f457806386e09c08146105f45780638da5cb5b146106385780639068a8681461066c5780639e9df2b9146106a0578063addc1a76146106be57610211565b806376aad6051461051a57806377532ed91461055e5780637af53532146105925780637b6757ff146105b057610211565b806326c74fc3116101a8578063530e784f11610177578063530e784f1461043857806354fd4d501461047c578063699f200f1461049a578063715018a6146104f257806372788be7146104fc57610211565b806326c74fc31461037e57806337d277d4146103b257806344b88563146103d05780634c252f911461040457610211565b80630e3b95dc116101e45780630e3b95dc146102ba578063124a6462146102d85780631ed65110146102f657806321da58371461033a57610211565b806305197d1014610216578063060678c21461023457806308737695146102685780630a19399a1461029c575b600080fd5b61021e6108ea565b6040518082815260200191505060405180910390f35b61023c61090e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027061093e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a461096e565b6040518082815260200191505060405180910390f35b6102c2610992565b6040518082815260200191505060405180910390f35b6102e06109b6565b6040518082815260200191505060405180910390f35b6103386004803603602081101561030c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109da565b005b61037c6004803603602081101561035057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ab6565b005b610386610b92565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103ba610bc2565b6040518082815260200191505060405180910390f35b6103d8610be6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040c610c16565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61047a6004803603602081101561044e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c46565b005b610484610d22565b6040518082815260200191505060405180910390f35b6104c6600480360360208110156104b057600080fd5b8101908080359060200190929190505050610d27565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104fa610d5a565b005b610504610ec7565b6040518082815260200191505060405180910390f35b61055c6004803603602081101561053057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eeb565b005b610566610fc7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61059a610ff7565b6040518082815260200191505060405180910390f35b6105f2600480360360208110156105c657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061101b565b005b6106366004803603602081101561060a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110f7565b005b6106406111d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106746111fc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106a861122c565b6040518082815260200191505060405180910390f35b610700600480360360208110156106d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611250565b005b61070a61132c565b6040518082815260200191505060405180910390f35b610728611350565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107966004803603602081101561076a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611380565b005b6107da600480360360208110156107ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061145c565b005b6107e4611538565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108526004803603602081101561082657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611568565b005b6108966004803603602081101561086a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611644565b005b6108a0611836565b6040518082815260200191505060405180910390f35b6108be61185a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b7f4143434f554e545f464143544f5259000000000000000000000000000000000081565b60006109397f444154415f434f4d50524553534f52000000000000000000000000000000000061188a565b905090565b60006109697f41434c000000000000000000000000000000000000000000000000000000000061188a565b905090565b7f50524943455f4f5241434c45000000000000000000000000000000000000000081565b7f4c45564552414745445f414354494f4e5300000000000000000000000000000081565b7f474541525f544f4b454e0000000000000000000000000000000000000000000081565b6109e26119da565b73ffffffffffffffffffffffffffffffffffffffff16610a006111d3565b73ffffffffffffffffffffffffffffffffffffffff1614610a89576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610ab37f54524541535552595f434f4e5452414354000000000000000000000000000000826119e2565b50565b610abe6119da565b73ffffffffffffffffffffffffffffffffffffffff16610adc6111d3565b73ffffffffffffffffffffffffffffffffffffffff1614610b65576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610b8f7f574554485f474154455741590000000000000000000000000000000000000000826119e2565b50565b6000610bbd7f54524541535552595f434f4e545241435400000000000000000000000000000061188a565b905090565b7f574554485f544f4b454e0000000000000000000000000000000000000000000081565b6000610c117f4c45564552414745445f414354494f4e5300000000000000000000000000000061188a565b905090565b6000610c417f574554485f544f4b454e0000000000000000000000000000000000000000000061188a565b905090565b610c4e6119da565b73ffffffffffffffffffffffffffffffffffffffff16610c6c6111d3565b73ffffffffffffffffffffffffffffffffffffffff1614610cf5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610d1f7f50524943455f4f5241434c450000000000000000000000000000000000000000826119e2565b50565b600181565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610d626119da565b73ffffffffffffffffffffffffffffffffffffffff16610d806111d3565b73ffffffffffffffffffffffffffffffffffffffff1614610e09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f444154415f434f4d50524553534f52000000000000000000000000000000000081565b610ef36119da565b73ffffffffffffffffffffffffffffffffffffffff16610f116111d3565b73ffffffffffffffffffffffffffffffffffffffff1614610f9a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610fc47f41434c0000000000000000000000000000000000000000000000000000000000826119e2565b50565b6000610ff27f574554485f47415445574159000000000000000000000000000000000000000061188a565b905090565b7f41434c000000000000000000000000000000000000000000000000000000000081565b6110236119da565b73ffffffffffffffffffffffffffffffffffffffff166110416111d3565b73ffffffffffffffffffffffffffffffffffffffff16146110ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6110f47f4c45564552414745445f414354494f4e53000000000000000000000000000000826119e2565b50565b6110ff6119da565b73ffffffffffffffffffffffffffffffffffffffff1661111d6111d3565b73ffffffffffffffffffffffffffffffffffffffff16146111a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6111d07f574554485f544f4b454e00000000000000000000000000000000000000000000826119e2565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006112277f4143434f554e545f464143544f5259000000000000000000000000000000000061188a565b905090565b7f54524541535552595f434f4e545241435400000000000000000000000000000081565b6112586119da565b73ffffffffffffffffffffffffffffffffffffffff166112766111d3565b73ffffffffffffffffffffffffffffffffffffffff16146112ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6113297f4143434f554e545f464143544f52590000000000000000000000000000000000826119e2565b50565b7f574554485f47415445574159000000000000000000000000000000000000000081565b600061137b7f474541525f544f4b454e0000000000000000000000000000000000000000000061188a565b905090565b6113886119da565b73ffffffffffffffffffffffffffffffffffffffff166113a66111d3565b73ffffffffffffffffffffffffffffffffffffffff161461142f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6114597f474541525f544f4b454e00000000000000000000000000000000000000000000826119e2565b50565b6114646119da565b73ffffffffffffffffffffffffffffffffffffffff166114826111d3565b73ffffffffffffffffffffffffffffffffffffffff161461150b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6115357f444154415f434f4d50524553534f520000000000000000000000000000000000826119e2565b50565b60006115637f434f4e5452414354535f5245474953544552000000000000000000000000000061188a565b905090565b6115706119da565b73ffffffffffffffffffffffffffffffffffffffff1661158e6111d3565b73ffffffffffffffffffffffffffffffffffffffff1614611617576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6116417f434f4e5452414354535f52454749535445520000000000000000000000000000826119e2565b50565b61164c6119da565b73ffffffffffffffffffffffffffffffffffffffff1661166a6111d3565b73ffffffffffffffffffffffffffffffffffffffff16146116f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611779576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611a7d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b7f434f4e5452414354535f5245474953544552000000000000000000000000000081565b60006118857f50524943455f4f5241434c45000000000000000000000000000000000000000061188a565b905090565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600381526020017f4150310000000000000000000000000000000000000000000000000000000000815250906119d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561199557808201518184015260208101905061197a565b50505050905090810190601f1680156119c25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5080915050919050565b600033905090565b806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16827fb37614c7d254ea8d16eb81fa11dddaeb266aa8ba4917980859c7740aff30c69160405160405180910390a3505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220867a241f3151c91b21e8cb37fe90ab1d5e89fb79efd61db271c29d805c7bdb7464736f6c63430007060033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
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
    static createInterface(): AddressProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressProvider;
}
