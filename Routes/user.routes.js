const express = require('express');
const { register , UploadProfilePic, login }  = require("../Controllers/user.Controller") ;
const {upload} = require("../Middleware/multer.middleware");
const { verifyToken } = require("../Middleware/verifyToken.middleware");

const Router = express.Router();

Router.post("/register", register);
Router.post("/UploadProfilePic", upload.fields([{ name: "profilePic", maxCount: 1 }]), UploadProfilePic);
Router.post("/login", login);


module.exports = Router