const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
    },
    mobileno: {
        required: true,
        type: Number
    }
});

const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;