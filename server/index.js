const express = require("express")
const DBConnection = require("./config/db")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3002
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