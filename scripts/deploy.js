// // const { ethers } = require("hardhat");

// // async function main() {
// //   const [deployer] = await ethers.getSigners();
// //   console.log("Deploying contracts with the account:", deployer.address);

// //   const balance = await deployer.getBalance();
// //   console.log("Account balance:", ethers.utils.formatEther(balance));

// //   // Deploy the Escrow contract
// //   const Escrow = await ethers.getContractFactory("Escrow");
// //   const escrow = await Escrow.deploy();
// //   await escrow.deployed();

// //   console.log("Escrow contract deployed to:", escrow.address);
// // }

// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error(error);
// //     process.exit(1);
// //   });


// async function main() {
//     const [deployer] = await ethers.getSigners();
//     console.log("Deploying contracts with the account:", deployer.address);
  
//     // Deploy ERC20 Token
//     const Token = await ethers.getContractFactory("ERC20Mock");
//     const token = await Token.deploy("Test Token", "TST", 1000000);
//     console.log("Token deployed to:", token.address);
  
//     // Deploy Loyalty Token
//     const LoyaltyToken = await ethers.getContractFactory("ERC20Mock");
//     const loyaltyToken = await LoyaltyToken.deploy("Loyalty Token", "LOY", 1000000);
//     console.log("Loyalty Token deployed to:", loyaltyToken.address);
  
//     // Deploy Escrow Contract
//     const Escrow = await ethers.getContractFactory("Escrow");
//     const escrow = await Escrow.deploy();
//     console.log("Escrow contract deployed to:", escrow.address);
  
//     // Set Loyalty Token in Escrow
//     await escrow.setLoyaltyToken(loyaltyToken.address);
//     console.log("Loyalty Token set in Escrow contract.");
//   }
  
//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });
  
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the ERC20 token (Mock Token) with initialAccount and initialBalance
  const Token = await ethers.getContractFactory("ERC20Mock");
  const initialBalance = ethers.utils.parseUnits("1000000", 18); // 1 million tokens
  const token = await Token.deploy("Test Token", "TST", deployer.address, initialBalance);
  await token.deployed();
  console.log("ERC20 Token deployed to:", token.address);

  // Deploy the Loyalty Token (same structure as the ERC20Mock)
  const loyaltyToken = await Token.deploy("Loyalty Token", "LOY", deployer.address, initialBalance);
  await loyaltyToken.deployed();
  console.log("Loyalty Token deployed to:", loyaltyToken.address);

  // Deploy the Escrow contract
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();
  await escrow.deployed();
  console.log("Escrow contract deployed to:", escrow.address);

  // Transfer some loyalty tokens to the Escrow contract for rewards
  const loyaltyTokenAmount = ethers.utils.parseUnits("100000", 18); // Amount to transfer to escrow
  await loyaltyToken.transfer(escrow.address, loyaltyTokenAmount);
  console.log("Transferred loyalty tokens to Escrow contract:", loyaltyTokenAmount.toString());

  // Set the loyalty token in the Escrow contract
  await escrow.setLoyaltyToken(loyaltyToken.address);
  console.log("Loyalty token set in Escrow contract.");

  // Return the deployed contract addresses for reference
  return {
      tokenAddress: token.address,
      loyaltyTokenAddress: loyaltyToken.address,
      escrowAddress: escrow.address,
  };
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
