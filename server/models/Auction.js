const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const auctionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    nft: {
      type: Schema.Types.ObjectId,
      ref: "NFT",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auction", auctionSchema);
