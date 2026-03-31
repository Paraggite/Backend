const express=require("express")
const mongoose=require("mongoose")
const connectDb = require("./config/db")
const userroute= require("./routes/userroute")
const app=express()
connectDb();
app.use(express.json())
app.use("/",userroute)
app.listen(3000,()=>{
    console.log("server running")
})