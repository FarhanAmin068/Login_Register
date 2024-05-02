const EmployeeModel = require('../models/Employee');

// Function to check if the email already exists
const isEmailUnique = async (email) => {
    const existingUser = await EmployeeModel.findOne({ email });
    return !existingUser;
};

// Function to register a new user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if any required field is missing
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email is unique
    const isUnique = await isEmailUnique(email);
    if (!isUnique) {
        return res.status(400).json({ message: "Email is already registered" });
    }

    try {
        const newUser = await EmployeeModel.create({ username, email, password });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Function to login a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await EmployeeModel.findOne({ username, password });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        return res.status(200).json({ message: "Success" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { registerUser, loginUser };
