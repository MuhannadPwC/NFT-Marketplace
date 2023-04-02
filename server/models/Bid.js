const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bidSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    nft: {
      type: Schema.Types.ObjectId,
      ref: "NFT"
    },
    auction: {
      type: Schema.Types.ObjectId,
      ref: "Auction"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bid", bidSchema);
