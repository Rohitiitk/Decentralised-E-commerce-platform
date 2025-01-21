// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the contract
    const ReviewSystem = await ethers.getContractFactory("ReviewSystem");
    const reviewSystem = await ReviewSystem.deploy();
    console.log("ReviewSystem deployed to:", reviewSystem.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
