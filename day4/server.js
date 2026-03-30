// Day 4:ROUTES + CONTROLLERS (MVC START)
// Import express
const express = require("express")

// Import DB connection
const connectDb = require("./config/db")

// Import routes
const chefRoute = require("./routes/chefRoute")

const app = express()

// Middleware to parse JSON
app.use(express.json())

// Connect to MongoDB
connectDb();

// Use routes with base path /api
app.use("/api", chefRoute)

// Start server
app.listen(3000, () => {
  console.log("server running on port 3000")
})