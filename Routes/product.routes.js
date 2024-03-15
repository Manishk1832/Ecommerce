const express = require('express');

const Product = require("../Models/ProductModel");
const { upload } = require("../Middleware/multer.middleware");

const Router = express.Router();


Router.post("/product", upload.fields([{ name: "Productimage", maxCount: 4 }]), Product);







module.exports = Router