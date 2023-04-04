const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  postBlog,
  postComment,
} = require("../controllers/blogController");

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:id", getBlogById);

blogRouter.post("/", postBlog);

blogRouter.post("/:id/comment", postComment);

module.exports = blogRouter;
