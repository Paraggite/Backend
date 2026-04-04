const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usermodel= require("../model/user.model");

const registercontroller=async(req,res)=>{
    try {
        let{username,email,password,mobile}=req.body
        if(!username||!email||!password||!mobile){
           return res.status(400).json({
            message:"all fields required"
           })
        }
        let hashpass= await bcrypt.hash(password,10)
        let newuser= await usermodel.create({
            username,
            email,
            password:hashpass,
            mobile
        })
        if(!newuser){
            return res.status(400).json({
                message:"something went wrong"
            })
        }
        let token=jwt.sign({id:newuser.id},process.env.JWT_SECRET,{
            expiresIn:"1h",
        })
        res.cookie("token",token);
        return res.status(200).json({
            success:true,
            message:"user registered successfully",
            user:newuser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error ",
            error
        })
    }

}
const logincontroller=async(req,res)=>{
    try {
        let {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({
                message:"all feilds required"
            })
        }
        let existeduser=await usermodel.findOne({email});
        if(!existeduser){
            return res.status(404).json({
                message:"user not registered"
            })
        }
        let checkpass= await bcrypt.compare(password,existeduser.password);
        if(!checkpass){
            return res.status(404).json({
                message:"incorrect email or password"
            })
        }
        let token = jwt.sign({id:existeduser.id},process.env.JWT_SECRET,{
            expiresIn:"1h",
        })
        res.cookie("token",token)
        return res.status(200).json({
            success:true,
            message:"user logged in",
            user:existeduser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            error
        })
    }
}
const logoutcontroller=async(req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success:true,
            message:"user log out"
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            message:"internal server error",
            error
        })
    }       
    }
 module.exports={
    registercontroller,
    logincontroller,
    logoutcontroller
 }