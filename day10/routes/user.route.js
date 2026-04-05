const express=require("express")
const { getallusercontroller, deletingcontroller, updateuser, getsingle } = require("../controllers/user.controller")
const router=express.Router()
router.get("/all",getallusercontroller)
router.get("/single/:id",getsingle)
router.put("/update/:id",updateuser)
router.delete("/delete/:id",deletingcontroller)
module.exports=router