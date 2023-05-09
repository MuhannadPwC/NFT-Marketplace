require("dotenv").config();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoute");
const nftRouter = require("./routes/nftRoute");
const blogRouter = require("./routes/blogRoute");
const auctionRouter = require("./routes/auctionRoute");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  // );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", userRouter);
app.use("/api/nfts", nftRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/auctions", auctionRouter);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`Server is Listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
