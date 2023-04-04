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

app.use("/api/users", userRouter);
app.use("/api/nfts", nftRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/auctions", auctionRouter);

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
