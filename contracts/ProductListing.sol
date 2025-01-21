// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductListing {
    struct Product {
        uint256 id;
        address seller;
        string name;
        uint256 price;
        string metadataHash; // IPFS hash
    }

    mapping(uint256 => Product) public products;
    mapping(address => uint256[]) public sellerProducts;

    uint256 public productCount;

    event ProductAdded(uint256 id, address seller, string name, uint256 price, string metadataHash);

    /**
     * @dev Add a new product to the marketplace.
     * @param name The name of the product.
     * @param price The price of the product in wei.
     * @param metadataHash The IPFS hash of the product metadata.
     */
    function addProduct(string memory name, uint256 price, string memory metadataHash) external {
        require(bytes(name).length > 0, "Product name cannot be empty");
        require(price > 0, "Price must be greater than zero");
        require(bytes(metadataHash).length > 0, "Metadata hash cannot be empty");

        uint256 productId = productCount++;
        products[productId] = Product({
            id: productId,
            seller: msg.sender,
            name: name,
            price: price,
            metadataHash: metadataHash
        });

        sellerProducts[msg.sender].push(productId);

        emit ProductAdded(productId, msg.sender, name, price, metadataHash);
    }

    /**
     * @dev Get the list of product IDs added by a specific seller.
     * @param seller The address of the seller.
     * @return An array of product IDs.
     */
    function getProductsBySeller(address seller) external view returns (uint256[] memory) {
        return sellerProducts[seller];
    }

    /**
     * @dev Retrieve product details by ID.
     * @param productId The ID of the product.
     * @return The product details.
     */
    function getProduct(uint256 productId) external view returns (Product memory) {
        require(productId < productCount, "Product does not exist");
        return products[productId];
    }
}
