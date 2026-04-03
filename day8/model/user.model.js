const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    mobileno: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const usermodel = mongoose.model("Users", userSchema);

module.exports = usermodel;