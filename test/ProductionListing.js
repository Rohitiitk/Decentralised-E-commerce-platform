const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ProductListing Contract", function () {
  let ProductListing;
  let productListing;
  let owner;
  let addr1;
  let addr2;
  let addr3;

  beforeEach(async function () {
    // Deploy the contract before each test
    ProductListing = await ethers.getContractFactory("ProductListing");
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    productListing = await ProductListing.deploy();
    await productListing.deployed();
  });

  it("should add a product successfully", async function () {
    const name = "Product 1";
    const price = ethers.utils.parseUnits("1", "ether");
    const metadataHash = "QmHash12345";

    // Add product
    await productListing.addProduct(name, price, metadataHash);

    // Get product by ID
    const product = await productListing.getProduct(0);

    expect(product.id).to.equal(0);
    expect(product.seller).to.equal(owner.address);
    expect(product.name).to.equal(name);
    expect(product.price).to.equal(price);
    expect(product.metadataHash).to.equal(metadataHash);
  });

  it("should fail to add a product with empty name", async function () {
    const price = ethers.utils.parseUnits("1", "ether");
    const metadataHash = "QmHash12345";

    await expect(
      productListing.addProduct("", price, metadataHash)
    ).to.be.revertedWith("Product name cannot be empty");
  });

  it("should fail to add a product with zero price", async function () {
    const name = "Product 1";
    const price = 0;
    const metadataHash = "QmHash12345";

    await expect(
      productListing.addProduct(name, price, metadataHash)
    ).to.be.revertedWith("Price must be greater than zero");
  });

  it("should fail to add a product with empty metadata hash", async function () {
    const name = "Product 1";
    const price = ethers.utils.parseUnits("1", "ether");
    const metadataHash = "";

    await expect(
      productListing.addProduct(name, price, metadataHash)
    ).to.be.revertedWith("Metadata hash cannot be empty");
  });

  it("should return products by seller", async function () {
    const name1 = "Product 1";
    const price1 = ethers.utils.parseUnits("1", "ether");
    const metadataHash1 = "QmHash12345";

    const name2 = "Product 2";
    const price2 = ethers.utils.parseUnits("2", "ether");
    const metadataHash2 = "QmHash67890";

    // Add products
    await productListing.connect(addr1).addProduct(name1, price1, metadataHash1);
    await productListing.connect(addr1).addProduct(name2, price2, metadataHash2);

    // Get products by addr1
    const products = await productListing.getProductsBySeller(addr1.address);

    expect(products.length).to.equal(2);
    expect(products[0]).to.equal(0);
    expect(products[1]).to.equal(1);
  });

  it("should return product details correctly", async function () {
    const name = "Product 1";
    const price = ethers.utils.parseUnits("1", "ether");
    const metadataHash = "QmHash12345";

    // Add product
    await productListing.addProduct(name, price, metadataHash);

    // Get product by ID
    const product = await productListing.getProduct(0);

    expect(product.name).to.equal(name);
    expect(product.price).to.equal(price);
    expect(product.metadataHash).to.equal(metadataHash);
  });

  it("should revert if trying to fetch a non-existent product", async function () {
    await expect(
      productListing.getProduct(999)
    ).to.be.revertedWith("Product does not exist");
  });
});
