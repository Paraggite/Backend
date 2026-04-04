const express=require("express")
const { logoutcontroller, logincontroller, registercontroller } = require("../controllers/auth.controller")
const router=express.Router()
router.post("/register",registercontroller)
router.post("/login", logincontroller)
router.post("/logout",logoutcontroller)
module.exports=router