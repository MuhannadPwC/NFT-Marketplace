const Blog = require("../models/Blog");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return next(new Error("No blogs found"));
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    return next(
      new Error(
        "Something went wrong while retrieving blogs, please try again."
      )
    );
  }
};

const getBlogById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const blog = Blog.findById(id).populate(["comments", "author"]);

    if (!blog) {
      return next(new Error("Could not obtain specified blog."));
    }

    return res.status(200).json({ blog });
  } catch (error) {
    return next(
      new Error(
        "Something went wrong while retrieving blog, please try again."
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
