/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Escrow, EscrowInterface } from "../../contracts/Escrow";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "AgreementCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "FundsReleased",
    type: "event",
  },
  {
    inputs: [],
    name: "agreementCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "agreements",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCompleted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "autoRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "createAgreement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "loyaltyToken",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
    ],
    name: "releaseFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_loyaltyToken",
        type: "address",
      },
    ],
    name: "setLoyaltyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506117528061001f6000396000f3fe6080604052600436106100705760003560e01c8063a6ac87e31161004e578063a6ac87e3146100f2578063bb7bb2781461011b578063bd14de9614610146578063bf466cf71461018857610070565b8063459b860e146100755780634d68282f1461009e578063770aa84d146100c7575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190611007565b6101b8565b005b3480156100aa57600080fd5b506100c560048036038101906100c09190611007565b6105cd565b005b3480156100d357600080fd5b506100dc610a40565b6040516100e99190611075565b60405180910390f35b3480156100fe57600080fd5b50610119600480360381019061011491906110bc565b610a66565b005b34801561012757600080fd5b50610130610b3b565b60405161013d91906110f8565b60405180910390f35b34801561015257600080fd5b5061016d60048036038101906101689190611007565b610b41565b60405161017f9695949392919061112e565b60405180910390f35b6101a2600480360381019061019d919061118f565b610bea565b6040516101af91906110f8565b60405180910390f35b8060008082815260200190815260200160002060050160009054906101000a900460ff161561021c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021390611253565b60405180910390fd5b600080600084815260200190815260200160002090508060040154421015610279576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610270906112bf565b60405180910390fd5b60018160050160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610362578060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f1935050505015801561035c573d6000803e3d6000fd5b5061042e565b8060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600201546040518363ffffffff1660e01b81526004016103e99291906112df565b6020604051808303816000875af1158015610408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042c9190611334565b505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105605760006064826002015461049791906113bf565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161051a9291906112df565b6020604051808303816000875af1158015610539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055d9190611334565b50505b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f8f5073d0a7a22ba450e278541077e181af457be74bea91e61f1f99e6bb40748e60405160405180910390a3505050565b8060008082815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066890611462565b60405180910390fd5b8160008082815260200190815260200160002060050160009054906101000a900460ff16156106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90611253565b60405180910390fd5b6000806000858152602001908152602001600020905060018160050160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036107d4578060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f193505050501580156107ce573d6000803e3d6000fd5b506108a0565b8060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600201546040518363ffffffff1660e01b815260040161085b9291906112df565b6020604051808303816000875af115801561087a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089e9190611334565b505b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109d25760006064826002015461090991906113bf565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161098c9291906112df565b6020604051808303816000875af11580156109ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cf9190611334565b50505b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16847f8f5073d0a7a22ba450e278541077e181af457be74bea91e61f1f99e6bb40748e60405160405180910390a350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610af7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aee906114ce565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60015481565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050160009054906101000a900460ff16905086565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c519061153a565b60405180910390fd5b60008411610c9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c94906115a6565b60405180910390fd5b600060016000815480929190610cb2906115c6565b91905055905060008342610cc6919061160e565b90506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020016000151581525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550905050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610ed357853414610ece576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec59061168e565b60405180910390fd5b610f55565b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b8152600401610f10939291906116ae565b6020604051808303816000875af1158015610f2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f539190611334565b505b8673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837f2aee9fc468e21fc7a8d1a4b4feea66f09e9090be2efa2481218c7b4c54761b6d898986604051610fb7939291906116e5565b60405180910390a48192505050949350505050565b600080fd5b6000819050919050565b610fe481610fd1565b8114610fef57600080fd5b50565b60008135905061100181610fdb565b92915050565b60006020828403121561101d5761101c610fcc565b5b600061102b84828501610ff2565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061105f82611034565b9050919050565b61106f81611054565b82525050565b600060208201905061108a6000830184611066565b92915050565b61109981611054565b81146110a457600080fd5b50565b6000813590506110b681611090565b92915050565b6000602082840312156110d2576110d1610fcc565b5b60006110e0848285016110a7565b91505092915050565b6110f281610fd1565b82525050565b600060208201905061110d60008301846110e9565b92915050565b60008115159050919050565b61112881611113565b82525050565b600060c0820190506111436000830189611066565b6111506020830188611066565b61115d60408301876110e9565b61116a6060830186611066565b61117760808301856110e9565b61118460a083018461111f565b979650505050505050565b600080600080608085870312156111a9576111a8610fcc565b5b60006111b7878288016110a7565b94505060206111c887828801610ff2565b93505060406111d9878288016110a7565b92505060606111ea87828801610ff2565b91505092959194509250565b600082825260208201905092915050565b7f41677265656d656e7420697320616c726561647920636f6d706c657465640000600082015250565b600061123d601e836111f6565b915061124882611207565b602082019050919050565b6000602082019050818103600083015261126c81611230565b9050919050565b7f446561646c696e65206e6f742072656163686564000000000000000000000000600082015250565b60006112a96014836111f6565b91506112b482611273565b602082019050919050565b600060208201905081810360008301526112d88161129c565b9050919050565b60006040820190506112f46000830185611066565b61130160208301846110e9565b9392505050565b61131181611113565b811461131c57600080fd5b50565b60008151905061132e81611308565b92915050565b60006020828403121561134a57611349610fcc565b5b60006113588482850161131f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113ca82610fd1565b91506113d583610fd1565b9250826113e5576113e4611361565b5b828204905092915050565b7f4f6e6c792062757965722063616e20706572666f726d2074686973206163746960008201527f6f6e000000000000000000000000000000000000000000000000000000000000602082015250565b600061144c6022836111f6565b9150611457826113f0565b604082019050919050565b6000602082019050818103600083015261147b8161143f565b9050919050565b7f4c6f79616c747920746f6b656e20616c72656164792073657400000000000000600082015250565b60006114b86019836111f6565b91506114c382611482565b602082019050919050565b600060208201905081810360008301526114e7816114ab565b9050919050565b7f53656c6c657220616464726573732063616e6e6f74206265207a65726f000000600082015250565b6000611524601d836111f6565b915061152f826114ee565b602082019050919050565b6000602082019050818103600083015261155381611517565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f600082015250565b60006115906020836111f6565b915061159b8261155a565b602082019050919050565b600060208201905081810360008301526115bf81611583565b9050919050565b60006115d182610fd1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361160357611602611390565b5b600182019050919050565b600061161982610fd1565b915061162483610fd1565b925082820190508082111561163c5761163b611390565b5b92915050565b7f496e636f72726563742045544820616d6f756e742073656e7400000000000000600082015250565b60006116786019836111f6565b915061168382611642565b602082019050919050565b600060208201905081810360008301526116a78161166b565b9050919050565b60006060820190506116c36000830186611066565b6116d06020830185611066565b6116dd60408301846110e9565b949350505050565b60006060820190506116fa60008301866110e9565b6117076020830185611066565b61171460408301846110e9565b94935050505056fea26469706673582212200237718e297ae591c603ebc7dd6c349ca48f9b2e881b58908af846967493058c64736f6c634300081c0033";

type EscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  override connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}
