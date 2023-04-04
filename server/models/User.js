const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    socials: {
      type: [String],
    },
    pfp: {
      type: String,
    },
    cover: {
      type: String,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
    created: [
      {
        type: Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    owned: [
      {
        type: Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
