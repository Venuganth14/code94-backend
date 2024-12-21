const ImageDetails = require("../models/productModel");

const uploadImage = async (req, res) => {
  const { sku, description, name, qty } = req.body;
  const imageNames = req.files.map(
    (file) => `http://localhost:5000/files/${file.filename}`
  ); // Get filenames of uploaded images

  try {
    await ImageDetails.create({
      sku,
      description,
      name,
      qty,
      images: imageNames,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
};

// Get all images handler
const getImages = async (req, res) => {
  try {
    const data = await ImageDetails.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.json({ status: error });
  }
};

const getProductById = async (req, res) => {
  const { _id } = req.params;

  try {
    const product = await ImageDetails.findById(_id).select(
      "_id sku name description images qty"
    );
    if (!product) {
      return res.status(404).json({ status: "Product not found" });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const productWithImageUrls = {
      ...product._doc,
      images: product.images,
    };

    res.json({ status: "ok", product: productWithImageUrls });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
};
const updateProduct = async (req, res) => {
  const { _id } = req.params;
  const { description, name, qty, images } = req.body;

  try {
    const product = await ImageDetails.findById(_id);

    if (!product) {
      return res.status(404).json({ status: "Product not found" });
    }

    if (description) product.description = description;
    if (name) product.name = name;
    if (qty) product.qty = qty;
    if (images) product.images = images;

    await product.save();

    res.json({
      status: "ok",
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
};

const deleteProductById = async (req, res) => {
  const { _id } = req.params;

  try {
    const product = await ImageDetails.findByIdAndDelete(_id);
    if (!product) {
      return res.status(404).json({ status: "Product not found" });
    }

    res.json({ status: "ok", message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
};

module.exports = {
  uploadImage,
  getImages,
  getProductById,
  deleteProductById,
  updateProduct,
};
