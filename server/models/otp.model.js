const mongoose = require('mongoose')
const otpSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:Number,required:true},
    attempts:{type:Number,required:true,default:1}
},{
    timestamps:true,
    versionKey:false
})

const OTPModel = mongoose.model("otp",otpSchema)

module.exports = OTPModel