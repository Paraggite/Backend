const usermodel = require("../model/user.model");
// REGISTER USER (CREATE)
const registercontroller = async (req, res) => {
    try {
        let { username, email, password, mobileno } = req.body;

        // Check if all fields are provided
        if (!username || !email || !password || !mobileno) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // Create new user
        let newuser = await usermodel.create({
            username,
            email,
            password,
            mobileno
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newuser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating user"
        });
    }
};

//  GET ALL USERS (READ)
const getallusercontroller = async (req, res) => {
    try {
        let users = await usermodel.find();

        return res.status(200).json({
            success: true,
            users: users
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all users"
        });
    }
};
//  GET SINGLE USER BY ID (READ)
const getsinglecontroller = async (req, res) => {
    try {
        let id = req.params.id;

        if (!id) {
            return res.status(400).json({
                message: "ID is required"
            });
        }

        let user = await usermodel.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting user"
        });
    }
};

//  UPDATE USER (UPDATE)
const updateusercontroller = async (req, res) => {
    try {
        let id = req.params.id;

        if (!id) {
            return res.status(400).json({
                message: "ID not found"
            });
        }

        let { username, email, password, mobileno } = req.body;

        if (!username || !email || !password || !mobileno) {
            return res.status(400).json({
                message: "All fields required"
            });
        }

        // Update user
        let updateduser = await usermodel.findByIdAndUpdate(
            id,
            {
                username,
                email,
                password,
                mobileno
            },
            { new: true } // return updated data
        );

        if (!updateduser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: updateduser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in updating"
        });
    }
};
//  DELETE USER (DELETE)
const deleteusercontroller = async (req, res) => {
    try {
        let id = req.params.id;

        if (!id) {
            return res.status(400).json({
                message: "ID not found"
            });
        }

        let deletedUser = await usermodel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting"
        });
    }
};
// Export all controllers
module.exports = {
    registercontroller,
    getallusercontroller,
    getsinglecontroller,
    updateusercontroller,
    deleteusercontroller
};