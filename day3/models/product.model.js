// Import mongoose
const mongoose = require("mongoose");

// Define schema for Product collection
// Schema defines structure of documents (fields + data types)
const productSchema = new mongoose.Schema({
    
    // Name of the product
    productName: {
        type: String,
        required: true
    },

    // Price of the product
    price: {
        type: Number,
        required: true
    },

    // Description of the product
    description: {
        type: String,
        required: true
    },

    // Currency (default is INR)
    currency: {
        type: String,
        default: "INR"
    }

}, {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true
});

// Create model from schema (collection name: products)
const ProductModel = mongoose.model("products", productSchema);

// Export model to use in other files
module.exports = ProductModel;