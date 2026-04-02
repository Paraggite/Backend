const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in connecting mongodb", error);
  }
};

module.exports = connectDB;