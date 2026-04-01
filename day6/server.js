//Day 6: Implemented full CRUD operations with proper validation and error handling.
const express = require("express");
const connectDb = require("./config/db");
const userroute = require("./routes/user.route");

const app = express();

connectDb();

app.use(express.json());

app.use("/", userroute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});