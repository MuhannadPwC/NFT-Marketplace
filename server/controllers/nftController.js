const { validationResult } = require("express-validator");
const NFT = require("../models/NFT");
const Collection = require("../models/NFT-Collection");

// Get all NFTs from the Database
const getAllNFT = async (req, res, next) => {
  try {
    const nfts = await NFT.find();

    return res.status(200).json({ nfts });
  } catch (error) {
    return next(new Error("Could not obtain NFTs, please try again."));
  }
};

// Get an NFT by its ID
const getNFTById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const nft = await NFT.findById(id);

    return res.status(200).json({ nft });
  } catch (err) {
    return next(new Error("Failed to find NFT"));
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
    return next(new Error(errorMessage));
  }

  const { name, picture, price, description, category } = req.body;

  try {
    const nft = await NFT.create({
      name,
      picture,
      price,
      description,
      category,
    });

    return res.status(201).json({ nft });
  } catch (error) {
    return next(new Error("Could not create NFT."));
  }
};

const getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();

    return res.status(200).json({ collections });
  } catch (error) {
    return next(new Error("Could not obtain NFT collections"));
  }
};

module.exports = {
  getAllNFT,
  getNFTById,
  postNFT,
  getCollections,
};
