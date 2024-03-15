require('dotenv').config()
const nodemailer = require("nodemailer");
const admin  = process.env.GMAIL_USER
const pass = process.env.GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: admin,
        pass: pass
    }


});


const signupmail = (email, firstname, lastname, password) => {
    console.log(email, firstname, lastname, password ,admin,"signupmail")
    return  {
        from: admin,
        to: email,  
        subject: "Welcome to DimankFashion!",
        text: `Dear ${firstname} ${lastname}, 
Welcome to Dimank Fashion! We're excited to have you as a member of our community.

Your account has been successfully created with the following details:
Email: ${email}
Password: ${password}

Feel free to log in to your account on our website and start exploring the latest fashion trends. If you have any questions or need assistance, our customer support team is here to help.

Thank you for choosing Dimank Fashion. We look forward to providing you with a fantastic shopping experience!

Best regards,
The Dimank Fashion Team` ,

    };
};





module.exports = {
    signupmail, transporter
}