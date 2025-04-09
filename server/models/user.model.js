const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number,required:true,unique:true},
    gender:{type:String,required:true,enum:['male','female','other']}
},
{ versionKey: false })

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel