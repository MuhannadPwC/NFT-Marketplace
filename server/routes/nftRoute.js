const express = require("express");
const {
  getAllNFT,
  getNFTById,
  getCollections,
  postNFT,
} = require("../controllers/nftController");

const nftRouter = express.Router();

nftRouter.get("/", getAllNFT);
nftRouter.get("/:id", getNFTById);
nftRouter.post("/", postNFT);
nftRouter.get("/collections", getCollections);

module.exports = nftRouter;
