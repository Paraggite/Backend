const express=require("express")
const { deletecontroller, getallusercontroller, getsingleusercontroller, updateusercontroller, createusercontroller } = require("../controller/usercontroller")
const router=express.Router()
router.post("/adduser",createusercontroller)
router.get("/showalluser",getallusercontroller)
router.get("/single/:id",getsingleusercontroller)
router.put("/updateuser/:id",updateusercontroller)
router.delete("/delete/:id", deletecontroller)
module.exports=router