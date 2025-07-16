const express = require("express");
const productController = require("../Controllers/ProductControllers");

const router = express.Router();

//add product so POST
//dynamicaaly firm-id in route bcz we are getting using params
router.post("/add-product/:firmId", productController.addProduct);
//getting products using firm_id --> get
//dynamicaaly firm-id in route bcz we are getting using params
router.get("/:firmId/products", productController.getProductByFirm);
//ROUTE FOR HANDLING IMAGES
router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.headersSent("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "..", "uploads", imageName));
});
//delete product bu id
router.delete("/:productId",productController.deleteProductById)

module.exports = router;
