const express = require("express");
const {
  getAllAuctions,
  getAuctionById,
  postAuction,
  postBid,
  getHighestBid,
} = require("../controllers/auctionController");

const auctionRouter = express.Router();

auctionRouter.get("/", getAllAuctions);
auctionRouter.get("/:id", getAuctionById);
auctionRouter.post("/", postAuction);
auctionRouter.post("/:id/bid", postBid);
auctionRouter.get("/:id/bid", getHighestBid);

module.exports = auctionRouter;
