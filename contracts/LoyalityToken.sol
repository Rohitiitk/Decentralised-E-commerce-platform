// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LoyaltyToken is ERC20 {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() ERC20("Loyalty Token", "LOYAL") {
        owner = msg.sender;
        _mint(owner, 1000000 * 10 ** decimals()); // Mint 1,000,000 tokens to the owner
    }

    function reward(address recipient, uint256 amount) external onlyOwner {
        _mint(recipient, amount);
    }
}
