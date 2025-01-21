// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("LoyaltyProgram", function () {
//     let LoyaltyProgram, loyaltyProgram, ERC20Mock, token;
//     let owner, buyer, seller;

//     beforeEach(async function () {
//         [owner, buyer, seller] = await ethers.getSigners();

//         // Deploy ERC20Mock token for loyalty points
//         ERC20Mock = await ethers.getContractFactory("ERC20Mock");
//         token = await ERC20Mock.deploy("MockLoyaltyToken", "MLT");
//         console.log("Mock ERC20 Token for Loyalty deployed to:", token.address);

//         // Deploy LoyaltyProgram contract
//         LoyaltyProgram = await ethers.getContractFactory("LoyaltyProgram");
//         loyaltyProgram = await LoyaltyProgram.deploy(token.address);
//         console.log("Loyalty Program contract deployed to:", loyaltyProgram.address);

//         // Mint some loyalty tokens for the buyer
//         await token.mint(buyer.address, ethers.utils.parseUnits("1000", 18)); // 1000 tokens
//     });

//     describe("Issuing Loyalty Tokens", function () {
//         it("should issue loyalty tokens correctly", async function () {
//             // Issue loyalty tokens for a purchase of 100 units
//             await loyaltyProgram.issueLoyaltyTokens(buyer.address, 100);
            
//             // Check the loyalty balance of the buyer
//             const balance = await loyaltyProgram.getLoyaltyBalance(buyer.address);
//             expect(balance).to.equal(100);
//         });

//         it("should not issue loyalty tokens if the buyer has insufficient tokens", async function () {
//             // Trying to issue loyalty tokens without the buyer having tokens
//             await expect(
//                 loyaltyProgram.issueLoyaltyTokens(buyer.address, 1001) // More than available tokens
//             ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
//         });
//     });

//     describe("Redeeming Loyalty Tokens", function () {
//         beforeEach(async function () {
//             // Issue loyalty tokens before testing redemption
//             await loyaltyProgram.issueLoyaltyTokens(buyer.address, 100); // Issue 100 tokens
//         });

//         it("should allow the buyer to redeem loyalty tokens", async function () {
//             // Redeem 50 tokens for a discount
//             await loyaltyProgram.redeemLoyaltyTokens(50, "10% discount");

//             // Check the loyalty balance after redemption
//             const newBalance = await loyaltyProgram.getLoyaltyBalance(buyer.address);
//             expect(newBalance).to.equal(50); // 100 - 50 = 50
//         });

//         it("should not allow redemption of more tokens than the balance", async function () {
//             // Trying to redeem more tokens than the buyer has
//             await expect(
//                 loyaltyProgram.redeemLoyaltyTokens(200, "20% discount") // 200 tokens, but buyer has 100
//             ).to.be.revertedWith("Insufficient loyalty tokens");
//         });
//     });

//     describe("Admin Functions", function () {
//         it("should allow the admin to manually adjust the loyalty balance", async function () {
//             // Adjust the loyalty balance to 500 for the buyer
//             await loyaltyProgram.adjustLoyaltyBalance(buyer.address, 500);

//             // Check the new loyalty balance
//             const newBalance = await loyaltyProgram.getLoyaltyBalance(buyer.address);
//             expect(newBalance).to.equal(500);
//         });

//         it("should allow the admin to issue loyalty tokens directly", async function () {
//             // Admin issues 100 tokens directly to the buyer
//             await loyaltyProgram.issueLoyaltyTokens(buyer.address, 100);

//             // Check the loyalty balance of the buyer
//             const balance = await loyaltyProgram.getLoyaltyBalance(buyer.address);
//             expect(balance).to.equal(100); // Total balance should be 100 after issuance
//         });
//     });
// });

