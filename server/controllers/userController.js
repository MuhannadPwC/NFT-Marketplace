const { validationResult } = require("express-validator");
const User = require("../models/User");

// POST Sign up the user
const postSignUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorMessage = "";
    errorMessage = errorMessage.concat(
      errors.array().map((err) => {
        return " " + err.msg;
      })
    );
    return next(new Error(errorMessage));
  }

  return res.status(201).json({ temp: "OK!" })
};

// POST Sign in the user
const postSignIn = async (req, res, next) => {};

// GET user details by their ID
const getUserById = async (req, res, next) => {};

// GET a specific user's orders
const getUserOrders = async (req, res, next) => {};

// GET the NFTs the user liked
const getUserLikes = async (req, res, next) => {};

// POST add NFT to user's liked list
const postUserLikes = async (req, res, next) => {};

// PATCH remove NFT from user's liked list
const patchUserLikes = async (req, res, next) => {};

// GET the users that follow the user
const getUserFollowers = async (req, res, next) => {};

// GET the users that the user follows
const getUserFollowing = async (req, res, next) => {};

// GET the NFTs the user Created
const getUserCreated = async (req, res, next) => {};

module.exports = {
  postSignUp,
  postSignIn,
  getUserById,
  getUserOrders,
  getUserLikes,
  postUserLikes,
  patchUserLikes,
  getUserFollowers,
  getUserFollowing,
  getUserCreated,
};
