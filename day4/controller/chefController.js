// Import chef model
const chefModel = require("../model/chef.model")

// Controller to create a new chef
const createChefController = async (req, res) => {
  try {
    // Create chef using request body data
    const newChef = await chefModel.create(req.body)

    // Send created chef as response
    res.send(newChef)

  } catch (error) {
    // Log actual error in console
    console.log(error.message)

    // Send error response
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Controller to get all chefs
const getAllChefController = async (req, res) => {
  try {
    // Fetch all chefs from database
    const chef = await chefModel.find()

    // Send data as response
    res.send(chef)

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in getting api"
    })
  }
}

// Export controllers
module.exports = {
  createChefController,
  getAllChefController
}