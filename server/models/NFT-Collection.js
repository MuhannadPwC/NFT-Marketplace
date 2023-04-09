const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nfts: {
    type: Schema.Types.ObjectId,
    ref: "NFT",
  },
});

module.exports = mongoose.model("NFT-Collection", collectionSchema);
