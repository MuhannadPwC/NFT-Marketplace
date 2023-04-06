const express = require("express");
const { body } = require("express-validator");
const {
  postSignUp,
  postSignIn,
  getUserById,
  getUserOrders,
  getUserLikes,
  getUserFollowers,
  getUserFollowing,
  getUserCreated,
  postUserLikes,
  patchUserLikes,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post(
  "/signup",
  [
    body("firstname", "Please fill first name")
      .not()
      .isEmpty(),
    body("lastname", "Please fill last name")
      .not()
      .isEmpty(),
    body("email", "Please enter a vaild email").isEmail(),
    body(
      "password",
      "Password must have a minimum of 8 letters, at least one small letter, one capital letter and one number"
    ).isStrongPassword({ minSymbols: 0 }),
  ],
  postSignUp
);

userRouter.post("/signin", postSignIn);

userRouter.get("/:id", getUserById);

userRouter.get("/:id/orders", getUserOrders);

userRouter.get("/:id/likes", getUserLikes);

userRouter.post("/:id/likes", postUserLikes);

userRouter.patch("/:id/likes", patchUserLikes);

userRouter.get("/:id/followers", getUserFollowers);

userRouter.get("/:id/following", getUserFollowing);

userRouter.get("/:id/created", getUserCreated);

module.exports = userRouter;
