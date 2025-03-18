const mongoose = require('mongoose')
require('dotenv').config()
const DBConnection = mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
module.exports = DBConnection