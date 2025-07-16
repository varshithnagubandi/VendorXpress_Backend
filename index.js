const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const VendorRoutes = require("./routes/VendorRoutes");
const bodyParser = require("body-parser");
const FirmRoutes = require("./routes/FirmRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const cors = require("cors");
const path = require("path");

const app = express();

const port = 4000;
//to access data in .env file
dotEnv.config();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log(`Error is ${error}`);
  });

app.use(bodyParser.json());
app.use("/vendor", VendorRoutes);
app.use("/firm", FirmRoutes);
app.use("/product", ProductRoutes);
//FOR IMAGES WE ALWAYS LIKE THIS
app.use("/uploads", express.static("uploads"));

// To start --> npm run dev
app.listen(port, () => {
  console.log(`SERVER STARTED RUNNING ON SERVER ${port}`);
});
