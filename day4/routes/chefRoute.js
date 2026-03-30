const express = require("express")

// Import controllers
const {
  createChefController,
  getAllChefController
} = require("../controller/chefController")

const router = express.Router()

// Route to create chef
router.post("/chef-details", createChefController)

// Route to get all chefs
router.get("/chefs", getAllChefController)

// Export router
module.exports = router