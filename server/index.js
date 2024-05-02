const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { registerUser, loginUser } = require('./controllers/UserController');

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

// Define route handlers
app.post('/login', loginUser);
app.post('/register', registerUser);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
