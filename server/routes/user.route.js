const UserRouter = require("express").Router();
const UserModel = require("../models/user.model");
const mongoose = require("mongoose");
const sendVerificationMail = require("../config/nodemailer");
const OTPModel = require("../models/otp.model");
const jwt = require("jsonwebtoken");
const CartModel = require("../models/cart.model");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
UserRouter.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Invalid request body" });
  try {
    const user = await UserModel.findOne({ email });
    const previousOTP = await OTPModel.findOne({ email });
    if (previousOTP) {
      if (previousOTP.attempts >= 5) {
        return res.status(429).json({
          message: "Too many OTP requests, please try after 6 hours.",
        });
      } else {
        previousOTP.attempts += 1;
        await sendVerificationMail(email, previousOTP.otp);
        await previousOTP.save();
        return res.json({ message: "OTP Sent", isRegistered: Boolean(user) });
      }
    }
    const newOTP = Math.floor(1000 + Math.random() * 9000);
    const OTP = new OTPModel({ email, otp: newOTP, attempts: 1 });
    await sendVerificationMail(email, newOTP);
    console.log(`sent otp to ${email}`);
    await OTP.save();
    return res.json({
      message: "OTP Sent, please check you email",
      isRegistered: Boolean(user),
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});
UserRouter.post("/login", async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp)
    return res.status(400).json({ message: "Invalid request body" });
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not registered" });
    const OTP = await OTPModel.findOne({ email });
    if (!user && OTP) {
      await OTPModel.deleteOne({ email });
      return res.status(500).json({ message: "Something went wrong." });
    }
    if (user && !OTP)
      return res
        .status(500)
        .json({ message: "OTP expired, please request a new one." });
    if (user && OTP && OTP.otp !== otp)
      return res.status(401).json({ message: "Incorrect OTP" });
    const token = jwt.sign({ email, date: Date.now() }, JWT_SECRET);
    await OTPModel.deleteOne({ email });
    return res.json({
      message: "Login success",
      data: { ...user._doc, token },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" });
  }
});
UserRouter.post("/register", async (req, res) => {
  const { email, mobile, name, gender, otp } = req.body;
  if (!email || !mobile || !name || !gender || !otp)
    return res.status(400).json({ message: "Invalid request body" });
  const session = await mongoose.startSession();
  try {
    const OTP = await OTPModel.findOne({ email });
    if (!OTP)
      return res
        .status(401)
        .json({ message: "OTP expired, please request a new one." });
    else if (OTP.otp !== otp)
      return res.status(401).json({ message: "Incorrect OTP" });

    session.startTransaction();
    const user = new UserModel({
      email,
      mobile,
      name,
      gender,
    });
    await user.save({ session });
    const cart = new CartModel({ userId: user._id, items: [] });
    await cart.save({ session });
    await OTPModel.deleteOne({ email }).session(session);
    const token = jwt.sign({ email, date: Date.now() }, JWT_SECRET);
    await session.commitTransaction();
    return res.json({
      message: "Account created",
      data: { ...user._doc, token },
    });
  } catch (error) {
    await session.abortTransaction();
    return res.status(500).json({ message: "Internal Server error" });
  }
});
module.exports = UserRouter;
