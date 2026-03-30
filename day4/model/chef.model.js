const mongoose = require("mongoose")

// Define schema for Chef
const chefSchema = new mongoose.Schema({

  // Chef name
  chefName: {
    type: String,
    required: true,
    trim: true
  },

  // Years of experience
  experience: {
    type: String,
    required: true
  },

  // Chef speciality (cuisine type)
  speciality: {
    type: String,
    required: true
  },

  // Restaurant name (optional)
  restaurant: {
    type: String
  },

  // Rating (1 to 5)
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 3
  }

})

// Create model
const chefModel = mongoose.model("chef", chefSchema)

// Export model
module.exports = chefModel