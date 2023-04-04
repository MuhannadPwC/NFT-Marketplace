const NFT = require("../models/NFT");
const Collection = require("../models/Collection");
const HttpError = require("../models/HttpError");

// Get all NFTs from the Database
const getAllNFT = async (req, res, next) => {
  let nfts;
  try {
    nfts = await NFT.find();
  } catch (err) {
    const error = new HttpError("Could not obtain NFTs, try again later.", 500);
    return next(error);
  }
  return res.status(200).json({ nfts });
};

// Get an NFT by its ID
const getNFTById = async (req, res, next) => {
  const { id } = req.params;
  let nft;
  try {
    nft = await NFT.findById(id);
  } catch (err) {
    const error = new HttpError('Failed to find NFT', 500);
    return next(error);
  }

  res.status(200).json({ nft });
};

// GET all collections from the database
const getCollections = async (req, res, next) => {
  let collections;
  try {
    collections = await Collection.find();
  } catch (err) {
    const error = new HttpError(
      "Could not obtain Collections, try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ collections });
};

// Post an NFT
const postNFT = async (req, res, next) => {
  const { name, picture } = req.body;
  if (!name || !picture) {
    const error = new HttpError("All fields must be filled", 400);
    return next(error);
  }

  const nft = await NFT.create({ name, picture });

  res.status(201).json({ nft });
};

module.exports = {
  getAllNFT,
  getNFTById,
  getCollections,
  postNFT,
};
