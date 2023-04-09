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

  const { firstname, lastname, username, email, password } = req.body;

  

  return res.status(201).json({ temp: "OK!" });
};

// POST Sign in the user
const postSignIn = async (req, res, next) => {};

// GET user details by their ID
const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    return res.status(200).json({ user });
  } catch (error) {
    return next(new Error("Could not get user's details"));
  }
};

// GET a specific user's orders
const getUserOrders = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("orders").select("orders");
    console.log(user);

    if (user.orders.length === 0) {
      return next(new Error("user does not have any orders"));
    }

    return res.status(200).json({ orders: user.orders });
  } catch (error) {
    return next(new Error("Could not obtain user's orders"));
  }
};

// GET the NFTs the user liked
const getUserLikes = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("likes").select("likes");
    console.log(user);

    if (user.likes.length === 0) {
      return next(new Error("user does not have any likes"));
    }

    return res.status(200).json({ likes: user.likes });
  } catch (error) {
    return next(new Error("Could not obtain user's likes"));
  }
};

// POST add NFT to user's liked list
const postUserLikes = async (req, res, next) => {};

// PATCH remove NFT from user's liked list
const patchUserLikes = async (req, res, next) => {};

// GET the users that follow the user
const getUserFollowers = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("followers").select("followers");
    console.log(user);

    if (user.followers.length === 0) {
      return next(new Error("user does not have any followers"));
    }

    return res.status(200).json({ followers: user.followers });
  } catch (error) {
    return next(new Error("Could not obtain user's followers"));
  }
};

// GET the users that the user follows
const getUserFollowing = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("following").select("following");
    console.log(user);

    if (user.following.length === 0) {
      return next(new Error("user does not have any following"));
    }

    return res.status(200).json({ following: user.following });
  } catch (error) {
    return next(new Error("Could not obtain user's following"));
  }
};

// POST add a user to user's following list
const postFollow = async (req, res, next) => {};

//PATCH remove a user from user's following list
const patchUnFollow = async (req, res, next) => {};

// GET the NFTs the user Created
const getUserCreated = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("created").select("created");
    console.log(user);

    if (user.created.length === 0) {
      return next(new Error("user does not have any NFTs created"));
    }

    return res.status(200).json({ created: user.created });
  } catch (error) {
    return next(new Error("Could not obtain user's created"));
  }
};

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
  postFollow,
  patchUnFollow,
  getUserCreated,
};
