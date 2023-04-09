const express = require("express");
const { body } = require("express-validator");
const {
  getAllNFT,
  getNFTById,
  postNFT,
  getCollections,
} = require("../controllers/nftController");

const nftRouter = express.Router();

nftRouter.get("/", getAllNFT);

nftRouter.get("/collections", getCollections);

nftRouter.get("/:id", getNFTById);

nftRouter.post(
  "/",
  [
    body("name", "NFT name cannot have special characters")
      .not()
      .isEmpty()
      .isAlphanumeric(),
    body("price", "price can only be a number").not().isEmpty().isNumeric(),
    body("description").not().isEmpty(),
    body("category").not().isEmpty(),
  ],
  postNFT
);

module.exports = nftRouter;
