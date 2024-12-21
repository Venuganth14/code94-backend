const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const productController = require("../controllers/productController");

const router = express.Router();

// Ensure 'files' directory exists
const uploadDir = path.join(__dirname, "../files");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("'files' directory created.");
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Store files in 'files' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const sanitizedFileName = file.originalname.replace(/\s+/g, "_"); // Replace spaces with underscores
    cb(null, uniqueSuffix + sanitizedFileName); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

// router.post("/upload-images", upload.single("image"), imageController.uploadImage);
router.post(
  "/upload-images",
  upload.array("images", 10),
  productController.uploadImage
); // Limit to 10 images

// Route for getting all products
router.get("/get-images", productController.getImages);

// Route for getting product by id
router.get("/get-product/:_id", productController.getProductById);

// Route for updating product by id
router.put("/update-product/:_id", productController.updateProduct);

// Route for deleting product by id
router.delete("/product/:_id", productController.deleteProductById);

module.exports = router;
