// test/reviewSystem.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReviewSystem Contract", function () {
    let ReviewSystem, reviewSystem;
    let owner, buyer1, buyer2;

    beforeEach(async () => {
        // Get the signers (accounts)
        [owner, buyer1, buyer2] = await ethers.getSigners();

        // Deploy the contract
        ReviewSystem = await ethers.getContractFactory("ReviewSystem");
        reviewSystem = await ReviewSystem.deploy();
        await reviewSystem.deployed();
    });

    it("Should allow a buyer to submit a review", async function () {
        const productId = 1;
        const rating = 5;
        const comment = "Excellent product!";

        // Submit the review
        await reviewSystem.connect(buyer1).submitReview(productId, rating, comment);

        // Get reviews for the product
        const reviews = await reviewSystem.getReviews(productId);

        // Assert that the review was submitted correctly
        expect(reviews).to.have.lengthOf(1);
        expect(reviews[0].buyer).to.equal(buyer1.address);
        expect(reviews[0].rating).to.equal(rating);
        expect(reviews[0].comment).to.equal(comment);
    });

    it("Should require a valid rating (1-5)", async function () {
        const productId = 1;

        // Try submitting an invalid rating
        await expect(reviewSystem.connect(buyer1).submitReview(productId, 0, "Invalid rating"))
            .to.be.revertedWith("Rating must be between 1 and 5");

        await expect(reviewSystem.connect(buyer1).submitReview(productId, 6, "Invalid rating"))
            .to.be.revertedWith("Rating must be between 1 and 5");
    });

    it("Should not allow empty comments", async function () {
        const productId = 1;
        const rating = 3;

        // Try submitting an empty comment
        await expect(reviewSystem.connect(buyer1).submitReview(productId, rating, ""))
            .to.be.revertedWith("Comment cannot be empty");
    });

    it("Should return the correct number of reviews", async function () {
        const productId = 1;

        // Submit two reviews for the product
        await reviewSystem.connect(buyer1).submitReview(productId, 5, "Great product!");
        await reviewSystem.connect(buyer2).submitReview(productId, 4, "Good product!");

        const reviewCount = await reviewSystem.getReviewCount(productId);
        expect(reviewCount).to.equal(2);
    });

    it("Should calculate the average rating correctly", async function () {
        const productId = 1;

        // Submit reviews with different ratings
        await reviewSystem.connect(buyer1).submitReview(productId, 5, "Excellent!");
        await reviewSystem.connect(buyer2).submitReview(productId, 3, "Decent!");

        const averageRating = await reviewSystem.getAverageRating(productId);
        expect(averageRating).to.equal(4); // (5 + 3) / 2 = 4
    });

    it("Should not allow submitting reviews for a product with no rating", async function () {
        const productId = 2;

        // Submit a review without rating
        await expect(reviewSystem.connect(buyer1).submitReview(productId, 0, "No rating"))
            .to.be.revertedWith("Rating must be between 1 and 5");
    });
});
