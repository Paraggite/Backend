// Basic Express server with MongoDB using Mongoose
// Day 2: Creating and storing user data in database 
const express=require("express")
const mongoose=require("mongoose")
// Mongoose is used to interact with MongoDB using JavaScript
const UserModel=require("./models/usermodel") 
const app=express()

// connectDb function is used to connect to MongoDB (async function because connection takes time)
const connectDb=async()=>{
try {
    let res= await mongoose.connect("mongodb://0.0.0.0/day2")
    if (res){
        console.log("mongodb connected")
    }
} catch (error) {
    console.log("error while connecting mongodb")
}
}
// Call the database connection function
connectDb()
// GET route (for testing purpose)
app.get("/",async(req,res)=>{
       // Create a new user document in database
    let newUser= await UserModel.create({
        name:"rahul"
    })
    res.send(newUser)
    console.log(newUser.name)
})
app.listen(3000,()=>{
    console.log("server is running at 3000")
})