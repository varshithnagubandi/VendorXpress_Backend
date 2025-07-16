const Firm = require("../models/FirmModel");
const Vendor = require("../models/VendorModel");
const multer = require("multer");

//TO UPLOAD IMAGE TO DATABASE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where images will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

const addFirm = async (req, res) => {
  try {
    const { firstName, area, category, region, offer } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const vendor = await Vendor.findById(req.vendorId);
    if (!vendor) {
      console.log("usernot found");
      res.status(404).json({ message: "Vendor Not Found" });
    }

    const firm = new Firm({
      firstName,
      area,
      category,
      region,
      offer,
      image,
      vendor: vendor._id,
    });
    const savedFirm = await firm.save();
    vendor.firm.push(savedFirm);
    await vendor.save();

    return res.status(200).json({ message: "Firm added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server Error");
  }
};

//delete firm by id
const deleteFirmById = async (req, res) => {
  try {
    const firmId = req.params.firmId;
    const deletefirm = await Firm.findByIdAndDelete(firmId);

    if (!deletefirm) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addFirm: [upload.single("image"), addFirm], deleteFirmById };
