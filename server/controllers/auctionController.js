const Auction = require("../models/Auction");
const Bid = require("../models/Bid");
const HttpError = require("../models/HttpError");

const getAllAuctions = async (req, res, next) => {
  try {
    const auctions = await Auction.find().populate(["user", "nft"]);

    if (auctions.length === 0) {
      return next(new HttpError("No auctions were found.", 404));
    }

    return res.status(200).json({ auctions });
  } catch (error) {
    return next(
      new HttpError("Something went wrong while obtaining auctions", 500)
    );
  }
};

const getAuctionById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const auction = await Auction.findById(id).populate(["user", "nft"]);

    if (!auction) {
      return next(new HttpError("Could not obtain specified auction", 404));
    }

    return res.status(200).json({ auction });
  } catch (error) {
    return next(
      new HttpError("Something went wrong while obtaining auction", 500)
    );
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
    return next(
      new HttpError("Something went wrong while getting highest bid.", 500)
    );
  }
};

module.exports = {
  getAllAuctions,
  getAuctionById,
  postAuction,
  postBid,
  getHighestBid,
};
