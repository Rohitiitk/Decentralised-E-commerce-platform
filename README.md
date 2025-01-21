# Decentralized E-Commerce Platform

A decentralized e-commerce platform built on Ethereum that enables secure product listings, escrow payments, decentralized reviews, and loyalty rewards. This project leverages smart contracts, IPFS, and blockchain technology to create a transparent and trustless marketplace.

---

## Features

1. **Product Listing**:
   - Sellers can list products with details such as name, price, and metadata stored on IPFS.
   - Buyers can view all available products.

2. **Escrow Payments**:
   - Supports secure payments using ETH or ERC20 tokens.
   - Funds are held in escrow and released to the seller upon buyer confirmation or after a deadline.

3. **Decentralized Reviews**:
   - Buyers can submit tamper-proof reviews (rating and comments) for purchased products.
   - Average ratings and detailed reviews are displayed for each product.

4. **Loyalty Program**:
   - Buyers earn loyalty tokens (ERC20) as rewards for successful transactions.
   - Tokens can be redeemed for discounts or offers in future transactions.

---

## Tech Stack

### Smart Contracts
- **Solidity**: For writing Ethereum smart contracts.
- **OpenZeppelin**: To implement ERC20 token standards.
- **Hardhat**: Development framework for testing and deploying contracts.

### Frontend
- **React.js**: Frontend library for building the user interface.
- **Tailwind CSS**: For styling.
- **Ethers.js**: To interact with Ethereum blockchain and smart contracts.

### Backend
- **Ethereum Blockchain**: Used for decentralized storage and execution.
- **IPFS**: To store product metadata.

---

## Installation and Setup

### Prerequisites
1. [Node.js](https://nodejs.org/) (v16 or higher)
2. [MetaMask Wallet](https://metamask.io/)
3. Hardhat (installed globally):
   ```bash
   npm install --global hardhat
   ```

### Clone the Repository
```bash
git clone https://github.com/your-username/decentralized-ecommerce.git
cd decentralized-ecommerce
```

### Install Dependencies
```bash
npm install
```

### Compile Smart Contracts
```bash
npx hardhat compile
```

### Deploy Contracts
1. Start a local Hardhat node:
   ```bash
   npx hardhat node
   ```
2. Deploy contracts to the local network:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

### Start the Frontend
1. Navigate to the `src/utils/constants.js` file and update the deployed contract addresses and ABIs.
2. Start the React development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contracts Overview

### 1. **Escrow.sol**
Manages escrow agreements for secure transactions:
- ETH and ERC20 payments.
- Auto-release after deadline.
- Rewards buyers with loyalty tokens.

### 2. **ProductListing.sol**
Handles product listings:
- Allows sellers to add products with metadata stored on IPFS.
- Buyers can view product details.

### 3. **ReviewSystem.sol**
Facilitates decentralized reviews:
- Buyers can submit reviews with ratings and comments.
- Retrieves average ratings and reviews for products.

### 4. **LoyaltyToken.sol**
ERC20 token for loyalty rewards:
- Rewards buyers after successful purchases.
- Minted and managed by the platform.

---

## Testing

1. Run the test suite:
   ```bash
   npx hardhat test
   ```

2. Ensure all tests pass, including:
   - Product listing functionality.
   - Escrow payments with ETH and ERC20.
   - Loyalty token rewards.
   - Decentralized review submission and retrieval.

---

## Screenshots

1. **Homepage**:
   - Displays all listed products.
2. **Create Product**:
   - Form for sellers to add new products.
3. **Escrow Agreement**:
   - Form to create agreements for secure payments.
4. **Reviews**:
   - View and submit reviews for purchased products.
5. **Loyalty Balance**:
   - Displays buyer's loyalty token balance.

---

## Future Enhancements

- Implement loyalty token redemption for discounts.
- Enable cross-chain compatibility.
- Add support for off-chain storage and oracle integration.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
- OpenZeppelin for reusable contract standards.
- Hardhat for a robust development environment.
- IPFS for decentralized file storage.

