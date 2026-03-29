// Day 3: Creating and storing user data in database using get and post method and code spliting
// Import required modules
const express = require("express");

// Import product model (used to interact with products collection)
const productModel = require("./models/product.model");

// Import database connection function
const connectDb = require("./config/db");

// Create Express app
const app = express();

// Middleware to parse JSON data from request body
app.use(express.json());

// Connect to MongoDB database
connectDb();

// Test route to check server is working
app.get("/", (req, res) => {
    res.send("mil gaya"); // response message
});

// POST route to create a new product
app.post("/products", async (req, res) => {

    // Destructure data from request body
    let { productName, price, description } = req.body;

    // Create new product document in database
    let newProduct = await productModel.create({
        productName: productName,
        price: price,
        description: description
    });

    // Send created product as response
    res.send(newProduct);
});


app.listen(3000, () => {
    console.log("server connected at port 3000");
});