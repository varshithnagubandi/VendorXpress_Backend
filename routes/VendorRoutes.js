const VendorController = require("../Controllers/VendorControllers");
const express = require("express");

const router = express.Router();

router.post("/register", VendorController.vendorRegister);
router.post("/login", VendorController.vendorLogin);

router.get("/all-vendors", VendorController.getAllvendors);
router.get("/single-vendor/:id", VendorController.getVendorById);

module.exports = router;
