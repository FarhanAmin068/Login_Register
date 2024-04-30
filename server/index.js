const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Import the path module
const EmployeeModel = require('./models/Employee');

const port = 3000; 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

// Define a route handler for the root URL ("/")


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    EmployeeModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect password");
                }
            } else {
                res.json("No record existed");
            }
        });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
