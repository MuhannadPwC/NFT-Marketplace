const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nftSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
    },
    type: {
      type: String,
    },
    status: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    _collection: {
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('NFT', nftSchema);
