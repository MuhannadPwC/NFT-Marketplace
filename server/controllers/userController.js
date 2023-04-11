const { validationResult } = require("express-validator");
const User = require("../models/User");
const HttpError = require("../models/HttpError");

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
    return next(new HttpError(errorMessage, 422));
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

    return res.status(200).json({ user: user.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError("Could not get user's details", 404));
  }
};

// GET a specific user's orders
const getUserOrders = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("orders").select("orders");
    console.log(user);

    if (user.orders.length === 0) {
      return next(new HttpError("user does not have any orders.", 404));
    }

    return res.status(200).json({
      orders: user.orders.map((order) => order.toObject({ getters: true })),
    });
  } catch (error) {
    return next(new HttpError("Could not obtain user's orders", 500));
  }
};

// GET the NFTs the user liked
const getUserLikes = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("likes").select("likes");
    console.log(user);

    if (user.likes.length === 0) {
      return next(new HttpError("user does not have any likes.", 404));
    }

    return res.status(200).json({
      likes: user.likes.map((like) => like.toObject({ getters: true })),
    });
  } catch (error) {
    return next(new HttpError("Could not obtain user's likes", 500));
  }
};

// PATCH add or remove NFT from user's liked list
const patchUserLikes = async (req, res, next) => {};

// GET the users that follow the user
const getUserFollowers = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .populate("followers")
      .select("followers");
    console.log(user);

    if (user.followers.length === 0) {
      return next(new HttpError("user does not have any followers", 404));
    }

    return res.status(200).json({
      followers: user.followers.map((follower) =>
        follower.toObject({ getters: true })
      ),
    });
  } catch (error) {
    return next(new HttpError("Could not obtain user's followers", 500));
  }
};

// GET the users that the user follows
const getUserFollowing = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .populate("following")
      .select("following");
    console.log(user);

    if (user.following.length === 0) {
      return next(new HttpError("user does not have any following", 404));
    }

    return res.status(200).json({
      following: user.following.map((follow) =>
        follow.toObject({ getters: true })
      ),
    });
  } catch (error) {
    return next(new HttpError("Could not obtain user's following", 404));
  }
};

//PATCH add or remove a user from user's following list
const patchFollow = async (req, res, next) => {};

// GET the NFTs the user Created
const getUserCreated = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate("created").select("created");
    console.log(user);

    if (user.created.length === 0) {
      return next(new HttpError("user does not have any NFTs created", 404));
    }

    return res
      .status(200)
      .json({
        created: user.created.map((cr) => cr.toObject({ getters: true })),
      });
  } catch (error) {
    return next(new HttpError("Could not obtain user's created", 500));
  }
};

module.exports = {
  postSignUp,
  postSignIn,
  getUserById,
  getUserOrders,
  getUserLikes,
  patchUserLikes,
  getUserFollowers,
  getUserFollowing,
  patchFollow,
  getUserCreated,
};
