const Blog = require("../models/Blog");
const HttpError = require("../models/HttpError");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return next(new HttpError("No blogs found", 404));
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    return next(
      new HttpError(
        "Something went wrong while retrieving blogs, please try again.",
        500
      )
    );
  }
};

const getBlogById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const blog = Blog.findById(id).populate(["comments", "author"]);

    if (!blog) {
      return next(new HttpError("Could not obtain specified blog.", 404));
    }

    return res.status(200).json({ blog });
  } catch (error) {
    return next(
      new HttpError(
        "Something went wrong while retrieving blog, please try again.",
        500
      )
    );
  }
};

const postBlog = async (req, res, next) => {};

const postComment = async (req, res, next) => {};

module.exports = {
  getAllBlogs,
  getBlogById,
  postBlog,
  postComment,
};
