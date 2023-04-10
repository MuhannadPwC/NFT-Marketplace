const Auction = require("../models/Auction");
const Bid = require("../models/Bid");

const getAllAuctions = async (req, res, next) => {
  try {
    const auctions = await Auction.find().populate(["user", "nft"]);

    if (auctions.length === 0) {
      return next(new Error("No auctions were found."));
    }

    return res.status(200).json({ auctions });
  } catch (error) {
    return next(new Error("Something went wrong while obtaining auctions"));
  }
};

const getAuctionById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const auction = await Auction.findById(id).populate(["user", "nft"]);

    if (!auction) {
      return next(new Error("Could not obtain specified auction"));
    }

    return res.status(200).json({ auction });
  } catch (error) {
    return next(new Error("Something went wrong while obtaining auction"));
  }
};

const postAuction = async (req, res, next) => {};

const postBid = async (req, res, next) => {};

const getHighestBid = async (req, res, next) => {
  const auctionId = req.params.id;

  try {
    const highestBid = await Bid.find({ auction: auctionId })
      .sort({ amount: "desc" })
      .populate(["user", "nft"]);

    return res.status(200).json({ highestBid });
  } catch (error) {
    console.error(error);
    return next(new Error("Something went wrong while getting highest bid."));
  }
};

module.exports = {
  getAllAuctions,
  getAuctionById,
  postAuction,
  postBid,
  getHighestBid,
};
