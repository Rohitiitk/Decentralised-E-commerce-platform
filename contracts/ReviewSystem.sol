// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReviewSystem {

    // Structure to store review data
    struct Review {
        address buyer;
        uint256 productId;
        uint8 rating;  // Rating between 1 and 5
        string comment;
    }

    // Mapping from productId to an array of reviews
    mapping(uint256 => Review[]) public productReviews;

    // Event to log when a review is submitted
    event ReviewSubmitted(uint256 productId, address indexed buyer, uint8 rating, string comment);

    // Function to submit a review for a product
    function submitReview(uint256 productId, uint8 rating, string memory comment) public {
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5");
        require(bytes(comment).length > 0, "Comment cannot be empty");

        // Creating a new review struct
        Review memory newReview = Review({
            buyer: msg.sender,
            productId: productId,
            rating: rating,
            comment: comment
        });

        // Adding the review to the mapping
        productReviews[productId].push(newReview);

        // Emitting an event for review submission
        emit ReviewSubmitted(productId, msg.sender, rating, comment);
    }

    // Function to fetch all reviews for a product
    function getReviews(uint256 productId) public view returns (Review[] memory) {
        return productReviews[productId];
    }

    // Function to get the number of reviews for a product
    function getReviewCount(uint256 productId) public view returns (uint256) {
        return productReviews[productId].length;
    }

    // Function to calculate the average rating of a product
    function getAverageRating(uint256 productId) public view returns (uint8) {
        uint256 reviewCount = productReviews[productId].length;
        if (reviewCount == 0) {
            return 0;  // If no reviews exist, return 0
        }

        uint256 totalRating = 0;
        for (uint256 i = 0; i < reviewCount; i++) {
            totalRating += productReviews[productId][i].rating;
        }

        return uint8(totalRating / reviewCount);
    }
}
