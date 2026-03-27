const express=require("express")
//express= framework of nodejs help to make server
const app=express()
// Create Express application
app.get("/",(req,res)=>{
res.send("hello world")
})
// get is used to fetch details 
app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})
// started server with command = listen 