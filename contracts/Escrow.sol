// 

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow {
    struct Agreement {
        address buyer;
        address seller;
        uint256 amount;
        address token; // Address of ERC20 token, or address(0) for ETH
        uint256 deadline;
        bool isCompleted;
    }

    mapping(uint256 => Agreement) public agreements;
    uint256 public agreementCount;
    address public loyaltyToken;

    event AgreementCreated(
        uint256 indexed agreementId,
        address indexed buyer,
        address indexed seller,
        uint256 amount,
        address token,
        uint256 deadline
    );
    event FundsReleased(uint256 indexed agreementId, address indexed seller);

    modifier onlyBuyer(uint256 agreementId) {
        require(msg.sender == agreements[agreementId].buyer, "Only buyer can perform this action");
        _;
    }

    modifier onlyActive(uint256 agreementId) {
        require(!agreements[agreementId].isCompleted, "Agreement is already completed");
        _;
    }

    function setLoyaltyToken(address _loyaltyToken) external {
        require(loyaltyToken == address(0), "Loyalty token already set");
        loyaltyToken = _loyaltyToken;
    }

    function createAgreement(
        address seller,
        uint256 amount,
        address token,
        uint256 duration
    ) external payable returns (uint256) {
        require(seller != address(0), "Seller address cannot be zero");
        require(amount > 0, "Amount must be greater than zero");

        uint256 agreementId = agreementCount++;
        uint256 deadline = block.timestamp + duration;

        agreements[agreementId] = Agreement({
            buyer: msg.sender,
            seller: seller,
            amount: amount,
            token: token,
            deadline: deadline,
            isCompleted: false
        });

        if (token == address(0)) {
            // ETH payment
            require(msg.value == amount, "Incorrect ETH amount sent");
        } else {
            // ERC20 payment
            IERC20(token).transferFrom(msg.sender, address(this), amount);
        }

        emit AgreementCreated(agreementId, msg.sender, seller, amount, token, deadline);
        return agreementId;
    }

    function releaseFunds(uint256 agreementId) external onlyBuyer(agreementId) onlyActive(agreementId) {
        Agreement storage agreement = agreements[agreementId];
        agreement.isCompleted = true;

        if (agreement.token == address(0)) {
            // Release ETH
            payable(agreement.seller).transfer(agreement.amount);
        } else {
            // Release ERC20 tokens
            IERC20(agreement.token).transfer(agreement.seller, agreement.amount);
        }

        // Reward buyer with loyalty tokens (1% of transaction amount)
        if (loyaltyToken != address(0)) {
            uint256 rewardAmount = agreement.amount / 100;
            IERC20(loyaltyToken).transfer(agreement.buyer, rewardAmount);
        }

        emit FundsReleased(agreementId, agreement.seller);
    }

    function autoRelease(uint256 agreementId) external onlyActive(agreementId) {
        Agreement storage agreement = agreements[agreementId];
        require(block.timestamp >= agreement.deadline, "Deadline not reached");
        agreement.isCompleted = true;

        if (agreement.token == address(0)) {
            // Release ETH
            payable(agreement.seller).transfer(agreement.amount);
        } else {
            // Release ERC20 tokens
            IERC20(agreement.token).transfer(agreement.seller, agreement.amount);
        }

        // Reward buyer with loyalty tokens (1% of transaction amount)
        if (loyaltyToken != address(0)) {
            uint256 rewardAmount = agreement.amount / 100;
            IERC20(loyaltyToken).transfer(agreement.buyer, rewardAmount);
        }

        emit FundsReleased(agreementId, agreement.seller);
    }
}
