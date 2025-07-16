const express = require("express");
const FirmController = require("../Controllers/FirmControllers");
const verifytoken = require("../middlewares/VerifyToken");

const router = express.Router();

router.post("/add-firm", verifytoken, FirmController.addFirm);
//ROUTE FOR HANDLING IMAGES
router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.headersSent("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "..", "uploads", imageName));
});
//delete firm by id
router.delete("/:firmId", FirmController.deleteFirmById);

module.exports = router;
