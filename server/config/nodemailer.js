const nodemailer = require("nodemailer")
require("dotenv").config()

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass : process.env.EMAIL_PASSWORD,
  }
})

module.exports = async function sendVerificationMail(email,otp){
    const mailOptions = {
        from:process.env.EMAIL,
        to:email,
        subject:"Verify your email",
        html:`<div style="text-align:center">
        <b>${otp}<b> is your OTP to continue your Bewakoof(Clone) journey. Feel free to check it's feature and functionality.
        </div>`}
        try {
            const response = await transporter.sendMail(mailOptions)
            return response
        } catch (error) {
            throw new Error(error)
        }
    
}