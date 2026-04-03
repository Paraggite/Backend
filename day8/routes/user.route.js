const express = require("express");
const {
  registercontroller,
  getallcontroller,
  getsinglecontroller,
  updateusercontroller,
  deletecontroller,
} = require("../controllers/usercontroller");

const router = express.Router();

router.post("/register", registercontroller);
router.get("/all", getallcontroller);
router.get("/single/:id", getsinglecontroller);
router.put("/update/:id", updateusercontroller);
router.delete("/delete/:id", deletecontroller);

module.exports = router;