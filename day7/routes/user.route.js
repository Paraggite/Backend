const express = require("express");
const {
  registerController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/register", registerController);
router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.put("/update/:id", updateUserController);
router.delete("/delete/:id", deleteUserController);

module.exports = router;