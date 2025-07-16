const Vendor = require("../models/VendorModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotEnv = require("dotenv");

dotEnv.config();
const secretKey = process.env.MAGICALKEY;

const vendorRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const vendorEmail = await Vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json({ message: "Email already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendor = new Vendor({
      username,
      email,
      password: hashedPassword,
    });
    await newVendor.save();

    res.status(201).json({ message: "Vendor Registered Successfully" });
    console.log("Registered");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Error" });
  }
};

const vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const vendor = await Vendor.findOne({ email });

    if (!vendor) {
      return res
        .status(404)
        .json({ error: "Email not Found . Please Register your self" });
    }

    const isPasswordValid = await bcrypt.compare(password, vendor.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Invalid Password. Please verify and try again" });
    }

    const token = jwt.sign({ vendorId: vendor._id }, secretKey, {
      expiresIn: "2h",
    });

    res.status(200).json({ success: "Login Successful", token });
    console.log(email, " ", token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Error" });
  }
};

const getAllvendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate("firm");
    res.json({ vendors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getVendorById = async (req, res) => {
  const vendorId = req.params.id;
  try {
    const vendor = await Vendor.findById(vendorId).populate("firm");
    if (!vendor) {
      return res.status(404).json({ error: "Vendor Not Found" });
    }
    res.status(200).json({ vendor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { vendorRegister, vendorLogin, getAllvendors, getVendorById };
