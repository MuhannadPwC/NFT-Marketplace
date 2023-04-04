const express = require("express");
const {
  postSignUp,
  postSignIn,
  getUserById,
  getUserOrders,
  getUserLikes,
  getUserFollowers,
  getUserFollowing,
  getUserCreated,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", postSignUp);

userRouter.post("/signin", postSignIn);

userRouter.get("/:id", getUserById);

userRouter.get("/:id/orders", getUserOrders);

userRouter.get("/:id/likes", getUserLikes);

userRouter.get("/:id/followers", getUserFollowers);

userRouter.get("/:id/following", getUserFollowing);

userRouter.get("/:id/created", getUserCreated);

module.exports = userRouter;
