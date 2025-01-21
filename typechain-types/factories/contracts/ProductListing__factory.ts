/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ProductListing,
  ProductListingInterface,
} from "../../contracts/ProductListing";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataHash",
        type: "string",
      },
    ],
    name: "ProductAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadataHash",
        type: "string",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
    ],
    name: "getProduct",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadataHash",
            type: "string",
          },
        ],
        internalType: "struct ProductListing.Product",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "getProductsBySeller",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productCount",
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
    name: "products",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadataHash",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sellerProducts",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506113858061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80637acc0b20146100675780638f29695a1461009b578063b9db15b4146100b7578063bacdafe0146100e7578063c1302b3414610117578063e0f6ef8714610147575b600080fd5b610081600480360381019061007c9190610890565b610165565b60405161009295949392919061099d565b60405180910390f35b6100b560048036038101906100b09190610b33565b6102cb565b005b6100d160048036038101906100cc9190610890565b610535565b6040516100de9190610ca3565b60405180910390f35b61010160048036038101906100fc9190610cf1565b610733565b60405161010e9190610dcd565b60405180910390f35b610131600480360381019061012c9190610def565b6107ca565b60405161013e9190610e2f565b60405180910390f35b61014f6107fb565b60405161015c9190610e2f565b60405180910390f35b60006020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546101b490610e79565b80601f01602080910402602001604051908101604052809291908181526020018280546101e090610e79565b801561022d5780601f106102025761010080835404028352916020019161022d565b820191906000526020600020905b81548152906001019060200180831161021057829003601f168201915b50505050509080600301549080600401805461024890610e79565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610e79565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b5050505050905085565b600083511161030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030690610ef6565b60405180910390fd5b60008211610352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034990610f62565b60405180910390fd5b6000815111610396576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038d90610fce565b60405180910390fd5b6000600260008154809291906103ab9061101d565b9190505590506040518060a001604052808281526020013373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152506000808381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816104669190611211565b506060820151816003015560808201518160040190816104869190611211565b50905050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150557fab2e2db11c63f528c82e67c1354be7e62837e5885529fef73ef5f170f76c8a6b813386868660405161052795949392919061099d565b60405180910390a150505050565b61053d610801565b6002548210610581576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105789061132f565b60405180910390fd5b6000808381526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461060e90610e79565b80601f016020809104026020016040519081016040528092919081815260200182805461063a90610e79565b80156106875780601f1061065c57610100808354040283529160200191610687565b820191906000526020600020905b81548152906001019060200180831161066a57829003601f168201915b50505050508152602001600382015481526020016004820180546106aa90610e79565b80601f01602080910402602001604051908101604052809291908181526020018280546106d690610e79565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b5050505050815250509050919050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156107be57602002820191906000526020600020905b8154815260200190600101908083116107aa575b50505050509050919050565b600160205281600052604060002081815481106107e657600080fd5b90600052602060002001600091509150505481565b60025481565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61086d8161085a565b811461087857600080fd5b50565b60008135905061088a81610864565b92915050565b6000602082840312156108a6576108a5610850565b5b60006108b48482850161087b565b91505092915050565b6108c68161085a565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108f7826108cc565b9050919050565b610907816108ec565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561094757808201518184015260208101905061092c565b60008484015250505050565b6000601f19601f8301169050919050565b600061096f8261090d565b6109798185610918565b9350610989818560208601610929565b61099281610953565b840191505092915050565b600060a0820190506109b260008301886108bd565b6109bf60208301876108fe565b81810360408301526109d18186610964565b90506109e060608301856108bd565b81810360808301526109f28184610964565b90509695505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a4082610953565b810181811067ffffffffffffffff82111715610a5f57610a5e610a08565b5b80604052505050565b6000610a72610846565b9050610a7e8282610a37565b919050565b600067ffffffffffffffff821115610a9e57610a9d610a08565b5b610aa782610953565b9050602081019050919050565b82818337600083830152505050565b6000610ad6610ad184610a83565b610a68565b905082815260208101848484011115610af257610af1610a03565b5b610afd848285610ab4565b509392505050565b600082601f830112610b1a57610b196109fe565b5b8135610b2a848260208601610ac3565b91505092915050565b600080600060608486031215610b4c57610b4b610850565b5b600084013567ffffffffffffffff811115610b6a57610b69610855565b5b610b7686828701610b05565b9350506020610b878682870161087b565b925050604084013567ffffffffffffffff811115610ba857610ba7610855565b5b610bb486828701610b05565b9150509250925092565b610bc78161085a565b82525050565b610bd6816108ec565b82525050565b600082825260208201905092915050565b6000610bf88261090d565b610c028185610bdc565b9350610c12818560208601610929565b610c1b81610953565b840191505092915050565b600060a083016000830151610c3e6000860182610bbe565b506020830151610c516020860182610bcd565b5060408301518482036040860152610c698282610bed565b9150506060830151610c7e6060860182610bbe565b5060808301518482036080860152610c968282610bed565b9150508091505092915050565b60006020820190508181036000830152610cbd8184610c26565b905092915050565b610cce816108ec565b8114610cd957600080fd5b50565b600081359050610ceb81610cc5565b92915050565b600060208284031215610d0757610d06610850565b5b6000610d1584828501610cdc565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610d568383610bbe565b60208301905092915050565b6000602082019050919050565b6000610d7a82610d1e565b610d848185610d29565b9350610d8f83610d3a565b8060005b83811015610dc0578151610da78882610d4a565b9750610db283610d62565b925050600181019050610d93565b5085935050505092915050565b60006020820190508181036000830152610de78184610d6f565b905092915050565b60008060408385031215610e0657610e05610850565b5b6000610e1485828601610cdc565b9250506020610e258582860161087b565b9150509250929050565b6000602082019050610e4460008301846108bd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9157607f821691505b602082108103610ea457610ea3610e4a565b5b50919050565b7f50726f64756374206e616d652063616e6e6f7420626520656d70747900000000600082015250565b6000610ee0601c83610918565b9150610eeb82610eaa565b602082019050919050565b60006020820190508181036000830152610f0f81610ed3565b9050919050565b7f5072696365206d7573742062652067726561746572207468616e207a65726f00600082015250565b6000610f4c601f83610918565b9150610f5782610f16565b602082019050919050565b60006020820190508181036000830152610f7b81610f3f565b9050919050565b7f4d6574616461746120686173682063616e6e6f7420626520656d707479000000600082015250565b6000610fb8601d83610918565b9150610fc382610f82565b602082019050919050565b60006020820190508181036000830152610fe781610fab565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110288261085a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361105a57611059610fee565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261108a565b6110d1868361108a565b95508019841693508086168417925050509392505050565b6000819050919050565b600061110e6111096111048461085a565b6110e9565b61085a565b9050919050565b6000819050919050565b611128836110f3565b61113c61113482611115565b848454611097565b825550505050565b600090565b611151611144565b61115c81848461111f565b505050565b5b8181101561118057611175600082611149565b600181019050611162565b5050565b601f8211156111c55761119681611065565b61119f8461107a565b810160208510156111ae578190505b6111c26111ba8561107a565b830182611161565b50505b505050565b600082821c905092915050565b60006111e8600019846008026111ca565b1980831691505092915050565b600061120183836111d7565b9150826002028217905092915050565b61121a8261090d565b67ffffffffffffffff81111561123357611232610a08565b5b61123d8254610e79565b611248828285611184565b600060209050601f83116001811461127b5760008415611269578287015190505b61127385826111f5565b8655506112db565b601f19841661128986611065565b60005b828110156112b15784890151825560018201915060208501945060208101905061128c565b868310156112ce57848901516112ca601f8916826111d7565b8355505b6001600288020188555050505b505050505050565b7f50726f6475637420646f6573206e6f7420657869737400000000000000000000600082015250565b6000611319601683610918565b9150611324826112e3565b602082019050919050565b600060208201905081810360008301526113488161130c565b905091905056fea2646970667358221220f8f3668c331f657bbda41d59009d1b2de489b83515ef73a06bfbffbfb7e6fb9b64736f6c634300081c0033";

type ProductListingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProductListingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProductListing__factory extends ContractFactory {
  constructor(...args: ProductListingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProductListing> {
    return super.deploy(overrides || {}) as Promise<ProductListing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProductListing {
    return super.attach(address) as ProductListing;
  }
  override connect(signer: Signer): ProductListing__factory {
    return super.connect(signer) as ProductListing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProductListingInterface {
    return new utils.Interface(_abi) as ProductListingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProductListing {
    return new Contract(address, _abi, signerOrProvider) as ProductListing;
  }
}
