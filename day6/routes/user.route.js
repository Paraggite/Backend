const express=require("express")
const { deleteusercontroller, updateusercontroller, getsinglecontroller, getallusercontroller, registercontroller } = require("../controller/usercontroller")
const router=express.Router()
router.post("/register",registercontroller)
router.get("/getall",getallusercontroller)
router.get("/getsingle/:id",getsinglecontroller)
router.put("/update/:id",updateusercontroller)
router.delete("/delete/:id", deleteusercontroller)
module.exports=router