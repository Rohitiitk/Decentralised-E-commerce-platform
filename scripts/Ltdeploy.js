const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying LoyaltyToken with the account:", deployer.address);
  const LoyaltyToken = await ethers.getContractFactory("LoyaltyToken");
  const loyaltyToken = await LoyaltyToken.deploy();
  await loyaltyToken.deployed();
  console.log("LoyaltyToken deployed to:", loyaltyToken.address);

  console.log("Deploying updated Escrow contract...");
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();
  await escrow.deployed();
  console.log("Escrow contract deployed to:", escrow.address);

  console.log("Linking loyalty token to escrow contract...");
  await escrow.setLoyaltyToken(loyaltyToken.address);
  console.log("Loyalty token linked successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
