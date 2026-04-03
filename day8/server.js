//day 8: added JWT token storage in cookies with express backend
require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db");
const userroute = require("./routes/user.route");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDb();

app.use("/api/user", userroute);

app.listen(3000, () => {
  console.log("server running on port 3000");
});