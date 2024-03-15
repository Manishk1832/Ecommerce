require('dotenv').config()

const  {v2: cloudinary} = require("cloudinary");
const  fs = require("fs");;

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME
const api_key = process.env.CLOUDINARY_API_KEY
const api_secret = process.env.CLOUDINARY_API_SECRET

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return;
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        const responseData = response.url
        //file has been uploaded 
        return responseData
    } catch (error) {
        fs.unlinkSync(localFilePath)  //remove the locally saved temporary file as the upload operation got failed
        return null
    }

}


module.exports = {uploadOnCloudinary};
