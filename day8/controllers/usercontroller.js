const usermodel=require("../model/user.model")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");  
const registercontroller=async(req,res)=>{
    try {
        let{username,email,password,mobileno}=req.body
        if(!username||!email||!password||!mobileno){
            return res.status(400).json({
             message:"all fields required"
            })
        }
        let hashpass= await bcrypt.hash(password,10)
        let newuser=usermodel.create({
            username,
            email,
            password:hashpass,
            mobileno
        })
        if(!newuser){
            return res.status(400).json({
                message:"something went wrong"
            })
        }
        let token =jwt.sign({id:newuser._id},process.env.JWT_SECRET,{
            expiresIn:"1h"})
         res.cookie("token",token)
         return res.status(200).json({
            success:true,
            message:"user registered",
            user:newuser
         })
    } catch (error) {
         return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
    }
}
const getallcontroller=async(req,res)=>{
    try {
        let alluser=await usermodel.find()
        if(!alluser){
            return res.status(400).json({
                message:"user not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"all users",
            user:alluser
        })
    } catch (error) {
         return res.status(500).json({
      success: false,
      message: "error in getting users",
      error,
    });
    }
}
const getsinglecontroller=async(req,res)=>{
    try {
      let id=req.params.id
      if(!id){
        return res.status(400).json({
            message:"id not found"
        })
      }
      let user=await usermodel.findbyId(id)
      if(!user){
        return res.status(400).json({
            message:"user not found"
        })
         return res.status(200).json({
            success:true,
            message:"user found",
            user
         })
      }  
    } catch (error) {
         return res.status(500).json({
      success: false,
      message: "error in getting dingle users",
      error,
    })
    }
}
const updateusercontroller=async(req,res)=>{
    try {
        let id=req.params.id
        if(!id){
            return res.status(400).json({
                message:"id not found"
            })
        }
        let existinguser= await usermodel.findbyId(id)
        if(!existinguser){
            return res.status(400).json({
                message:"user not found"
            })
        }
        let{username,email,password,mobileno}=req.body
        if(!username||!email||!password||!mobileno){
            return res.status(400).json({
             message:"all fields required"
            })
        }
        let updateduser=await usermodel.findByIdAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
        mobile,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
        success:true,
        message:"user updated",
        user:updateduser
    })
    } catch (error) {
       return res.status(500).json({
      success: false,
      message: "error in update",
      error,
    })  
    }
}
const deletecontroller=async(req,res)=>{
     try {
    let id = req.params.id;

    if (!id)
      return res.status(404).json({
        message: "Id not found",
      });

    let delUser = await usermodel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
}
module.exports={
    registercontroller,
    getallcontroller,
     getsinglecontroller,
     updateusercontroller,
     deletecontroller
}