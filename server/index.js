const express = require("express")
const DBConnection = require("./config/db")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3002
require("./cronJob")
app.get("/",(req,res)=>{
    return res.json({message:"Server is up!!"})
})

app.listen(PORT,async()=>{
    console.log(`Server running on port ${PORT}`)
    try {
        await DBConnection
        console.log("Database connected")
    } catch (error) {
        console.log("Failed to connect to database")
    }
})