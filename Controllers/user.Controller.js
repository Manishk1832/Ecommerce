const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const { uploadOnCloudinary } = require('../utils/cloudinary');
// const { signupmail, transporter } = require('../utils/nodemailer');



const register = async (req, res) => {

    try {
        const { firstname, lastname, username, email, password } = req.body;
        console.log(firstname, lastname, username, email, password)

        if ([firstname, lastname, username, email, password].some((field) => field?.trim().length === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }

        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) === false) {
            return res.status(400).json({ message: "Invalid email address" });
        }

        const existingUser = await User.findOne({
            $or: [
                { username }, { email }
            ]
        });

        if (existingUser) {
            return res.status(409).json({ message: "User with email or username  already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            username: username.toLowerCase(),
            email: email,
            password: hashedPassword,
        })


       
        const savedUser = await user.save();


        if (savedUser) {
            return res.status(201).json({ message: "Registered successfully"});
        }
 

    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim().length === "")) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({
        userID: user._id.toString(),
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRECT_KEY);


    const matchPassowrd = await bcrypt.compare(password, user.password);

    if (!matchPassowrd) {
        return res.status(400).json({ message: "Invalid email or password" });
    }


    return res.status(200).json({ message: "Login successful", token });

}



const UploadProfilePic = async (req, res) => {
    try {
        const { email } = req.body;

        const response = await User.findOne({ email });

        if (response.isProfilePic) {
            return res.status(400).json({ message: "Profile pic already uploaded" });
        }

        const profilePicPath = req.files?.profilePic[0]?.path;
        if (!profilePicPath) {
            return res.status(400).json({ message: "Profile pic is required" });
        }

        const avatar = await uploadOnCloudinary(profilePicPath)


        const setprofilePic = await User.updateOne({ email }, {
            $set: {
                isProfilePic: true,
                profilePic: avatar.url
            }
        });

        if (setprofilePic) {
            return res.status(200).json({ message: "Profile pic uploaded successfully" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Profile pic upload failed" });
    }

}


module.exports = {
    register,
    UploadProfilePic,
    login
}