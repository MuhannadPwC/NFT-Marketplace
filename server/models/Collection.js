const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema(
  {
    name: {
      type: String,
    },
    nfts: [
      {
        type: Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("_Collection", collectionSchema);
