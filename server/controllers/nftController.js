const { validationResult } = require("express-validator");
const NFT = require("../models/NFT");
const Collection = require("../models/NFT-Collection");
const HttpError = require("../models/HttpError");

// Get all NFTs from the Database
const getAllNFT = async (req, res, next) => {
  try {
    const nfts = await NFT.find();

    if (nfts.length === 0) {
      return next(new HttpError("There were no NFTs found.", 404));
    }

    return res
      .status(200)
      .json({ nfts: nfts.map((nft) => nft.toObject({ getters: true })) });
  } catch (error) {
    return next(new HttpError("Could not obtain NFTs, please try again.", 500));
  }
};

// Get an NFT by its ID
const getNFTById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const nft = await NFT.findById(id);

    return res.status(200).json({ nft: nft.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError("Failed to find NFT.", 404));
  }
};

// Post an NFT
const postNFT = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorMessage = "";
    errorMessage = errorMessage.concat(
      errors.array().map((err) => {
        return err.msg;
      })
    );
    return next(new HttpError(errorMessage, 422));
  }

  const { name, picture, price, description, category, type, quantity } = req.body;

  try {
    const nft = await NFT.create({
      name,
      picture,
      price,
      currency: "ETH",
      type,
      status: "For Sale",
      category,
      likes: 0,
      description,
      quantity: quantity || 0,
      creator: "643289a2c3bdc4fb03379e89", // get from front end after authorization
      owner: "643289a2c3bdc4fb03379e89",  // get from front end after authorization
      _collection: "BIG BOIs",
    });

    return res.status(201).json({ nft });
  } catch (error) {
    return next(new HttpError("Could not create NFT.", 500));
  }
};

const getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();

    return res.status(200).json({
      collections: collections.map((collection) =>
        collection.toObject({ getters: true })
      ),
    });
  } catch (error) {
    return next(new HttpError("Could not obtain NFT collections", 404));
  }
};

module.exports = {
  getAllNFT,
  getNFTById,
  postNFT,
  getCollections,
};
