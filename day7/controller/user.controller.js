const usermodel = require("../model/user.model");
const bcrypt = require("bcrypt");

// REGISTER
const registerController = async (req, res) => {
  try {
    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let hashedPass = await bcrypt.hash(password, 10);

    let newUser = await usermodel.create({
      username,
      email,
      password: hashedPass,
      mobile,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// GET ALL
const getAllUserController = async (req, res) => {
  try {
    let users = await usermodel.find();

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// GET SINGLE
const getSingleUserController = async (req, res) => {
  try {
    let user = await usermodel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// UPDATE
const updateUserController = async (req, res) => {
  try {
    let { username, email, password, mobile } = req.body;

    let hashedPass = await bcrypt.hash(password, 10);

    let updatedUser = await usermodel.findByIdAndUpdate(
      req.params.id,
      {
        username,
        email,
        password: hashedPass,
        mobile,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// DELETE
const deleteUserController = async (req, res) => {
  try {
    await usermodel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  registerController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
};