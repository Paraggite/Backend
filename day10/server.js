require("dotenv").config();
const express=require ("express")
const connectDb = require("./config/db")
const userroute=require("./routes/user.route")
const authroute=require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const app=express()
connectDb();
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authroute)
app.use("/api/users",userroute)
app.listen(3000,()=>{
    console.log("server running")
})