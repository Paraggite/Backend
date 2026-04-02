const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }
});

const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;