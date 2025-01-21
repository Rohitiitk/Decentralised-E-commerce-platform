// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Escrow Contract", function () {
//   let escrow, loyaltyToken, token, owner, buyer, seller;
//   let ethAmount = ethers.utils.parseEther("1");
//   let tokenAmount = ethers.utils.parseUnits("100", 18);

//   beforeEach(async function () {
//     [owner, buyer, seller] = await ethers.getSigners();

//     // Deploy LoyaltyToken
//     const LoyaltyToken = await ethers.getContractFactory("LoyaltyToken");
//     loyaltyToken = await LoyaltyToken.deploy();
//     await loyaltyToken.deployed();

//     // Deploy Mock ERC20 token
//     const Token = await ethers.getContractFactory("ERC20Mock");
//     token = await Token.deploy("MockToken", "MTK", buyer.address, tokenAmount);
//     await token.deployed();

//     // Deploy Escrow contract
//     const Escrow = await ethers.getContractFactory("Escrow");
//     escrow = await Escrow.deploy();
//     await escrow.deployed();

//     // Set Loyalty Token in Escrow
//     await escrow.setLoyaltyToken(loyaltyToken.address);
//       // Mint loyalty tokens to the Escrow contract
//     await loyaltyToken.reward(escrow.address, ethers.utils.parseEther("1000")); // Preload with 1000 tokens
//     await loyaltyToken.reward(escrow.address, preloadAmount);

//     const escrowBalance = await loyaltyToken.balanceOf(escrow.address);
//     console.log("Escrow contract token balance:", escrowBalance.toString());

// });
//   });

//   it("Should create an escrow agreement with ETH", async function () {
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       ethAmount,
//       ethers.constants.AddressZero,
//       3600, // 1 hour
//       { value: ethAmount }
//     );

//     const agreement = await escrow.agreements(0);
//     expect(agreement.buyer).to.equal(buyer.address);
//     expect(agreement.seller).to.equal(seller.address);
//     expect(agreement.amount).to.equal(ethAmount);
//     expect(agreement.token).to.equal(ethers.constants.AddressZero);
//   });

//   it("Should create an escrow agreement with ERC20 tokens", async function () {
//     await token.connect(buyer).approve(escrow.address, tokenAmount);
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       tokenAmount,
//       token.address,
//       3600 // 1 hour
//     );

//     const agreement = await escrow.agreements(0);
//     expect(agreement.buyer).to.equal(buyer.address);
//     expect(agreement.seller).to.equal(seller.address);
//     expect(agreement.amount).to.equal(tokenAmount);
//     expect(agreement.token).to.equal(token.address);
//   });

//   it("Should release ETH to the seller", async function () {
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       ethAmount,
//       ethers.constants.AddressZero,
//       3600,
//       { value: ethAmount }
//     );

//     const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);
//     await escrow.connect(buyer).releaseFunds(0);
//     const sellerBalanceAfter = await ethers.provider.getBalance(seller.address);

//     expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(ethAmount);
//   });

//   it("Should release ERC20 tokens to the seller", async function () {
//     await token.connect(buyer).approve(escrow.address, tokenAmount);
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       tokenAmount,
//       token.address,
//       3600
//     );

//     const sellerBalanceBefore = await token.balanceOf(seller.address);
//     await escrow.connect(buyer).releaseFunds(0);
//     const sellerBalanceAfter = await token.balanceOf(seller.address);

//     expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(tokenAmount);
//   });

//   it("Should reward loyalty tokens to the buyer", async function () {
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       ethAmount,
//       ethers.constants.AddressZero,
//       3600,
//       { value: ethAmount }
//     );

//     await escrow.connect(buyer).releaseFunds(0);

//     const rewardAmount = ethAmount.div(100); // 1% reward
//     const loyaltyBalance = await loyaltyToken.balanceOf(buyer.address);
//     expect(loyaltyBalance).to.equal(rewardAmount);
//   });

//   it("Should auto-release funds after the deadline", async function () {
//     await escrow.connect(buyer).createAgreement(
//       seller.address,
//       ethAmount,
//       ethers.constants.AddressZero,
//       1, // 1 second
//       { value: ethAmount }
//     );

//     await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

//     const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);
//     await escrow.connect(seller).autoRelease(0);
//     const sellerBalanceAfter = await ethers.provider.getBalance(seller.address);

//     expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(ethAmount);
//   });
// });


const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Escrow Contract", function () {
  let escrow, loyaltyToken, token, owner, buyer, seller;
  let ethAmount = ethers.utils.parseEther("1");
  let tokenAmount = ethers.utils.parseUnits("100", 18);

  beforeEach(async function () {
    [owner, buyer, seller] = await ethers.getSigners();

    // Deploy LoyaltyToken
    const LoyaltyToken = await ethers.getContractFactory("LoyaltyToken");
    loyaltyToken = await LoyaltyToken.deploy();
    await loyaltyToken.deployed();

    // Deploy Mock ERC20 token
    const Token = await ethers.getContractFactory("ERC20Mock");
    token = await Token.deploy("MockToken", "MTK", buyer.address, tokenAmount);
    await token.deployed();

    // Deploy Escrow contract
    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy();
    await escrow.deployed();

    // Set Loyalty Token in Escrow
    await escrow.setLoyaltyToken(loyaltyToken.address);
  });

  it("Should create an escrow agreement with ETH", async function () {
    await escrow.connect(buyer).createAgreement(
      seller.address,
      ethAmount,
      ethers.constants.AddressZero,
      3600, // 1 hour
      { value: ethAmount }
    );

    const agreement = await escrow.agreements(0);
    expect(agreement.buyer).to.equal(buyer.address);
    expect(agreement.seller).to.equal(seller.address);
    expect(agreement.amount).to.equal(ethAmount);
    expect(agreement.token).to.equal(ethers.constants.AddressZero);
  });

  it("Should create an escrow agreement with ERC20 tokens", async function () {
    await token.connect(buyer).approve(escrow.address, tokenAmount);
    await escrow.connect(buyer).createAgreement(
      seller.address,
      tokenAmount,
      token.address,
      3600 // 1 hour
    );

    const agreement = await escrow.agreements(0);
    expect(agreement.buyer).to.equal(buyer.address);
    expect(agreement.seller).to.equal(seller.address);
    expect(agreement.amount).to.equal(tokenAmount);
    expect(agreement.token).to.equal(token.address);
  });

  it("Should release ETH to the seller", async function () {
    await escrow.connect(buyer).createAgreement(
      seller.address,
      ethAmount,
      ethers.constants.AddressZero,
      3600,
      { value: ethAmount }
    );

    const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);
    await escrow.connect(buyer).releaseFunds(0);
    const sellerBalanceAfter = await ethers.provider.getBalance(seller.address);

    expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(ethAmount);
  });

  it("Should release ERC20 tokens to the seller", async function () {
    await token.connect(buyer).approve(escrow.address, tokenAmount);
    await escrow.connect(buyer).createAgreement(
      seller.address,
      tokenAmount,
      token.address,
      3600
    );

    const sellerBalanceBefore = await token.balanceOf(seller.address);
    await escrow.connect(buyer).releaseFunds(0);
    const sellerBalanceAfter = await token.balanceOf(seller.address);

    expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(tokenAmount);
  });

  it("Should reward loyalty tokens to the buyer", async function () {
    await escrow.connect(buyer).createAgreement(
      seller.address,
      ethAmount,
      ethers.constants.AddressZero,
      3600,
      { value: ethAmount }
    );

    await escrow.connect(buyer).releaseFunds(0);

    const rewardAmount = ethAmount.div(100); // 1% reward
    const loyaltyBalance = await loyaltyToken.balanceOf(buyer.address);
    expect(loyaltyBalance).to.equal(rewardAmount);
  });

  it("Should auto-release funds after the deadline", async function () {
    await escrow.connect(buyer).createAgreement(
      seller.address,
      ethAmount,
      ethers.constants.AddressZero,
      1, // 1 second
      { value: ethAmount }
    );

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds

    const sellerBalanceBefore = await ethers.provider.getBalance(seller.address);
    await escrow.connect(seller).autoRelease(0);
    const sellerBalanceAfter = await ethers.provider.getBalance(seller.address);

    expect(sellerBalanceAfter.sub(sellerBalanceBefore)).to.equal(ethAmount);
  });
});
