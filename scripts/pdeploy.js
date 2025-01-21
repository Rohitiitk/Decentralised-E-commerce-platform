async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Get the ProductListing contract factory
    const ProductListing = await ethers.getContractFactory("ProductListing");
  
    // Deploy the contract
    const productListing = await ProductListing.deploy();
  
    console.log("ProductListing contract deployed to:", productListing.address);
  }
  
  // Call the main function and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  