import express from "express";

import { JsonWebTokenError } from "jsonwebtoken";

import dotenv, { config, configDotenv } from 'dotenv';

// importing UserModel and TodoModel from ./db file
const { UserModel, TodoModel } = require('./db');

const app = express();
app.use(express.json());
dotenv.config();
const JWT_SECRET = "USER_APP";
const PORT = process.env.PORT;

app.post("/signup" , async function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.insert({
        name: name,
        email: email,
        password: password,
    })

    res.json({
        message: "You're Signed up",
    })
});

app.post("/signin" , async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // to read from the database
    const user = UserModel.findOne({
        email: email,
        password: password,
    })

    if(user) {
        const token = jwt.sign({
             id: user._id,
        }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

// Create a todo in the database
app.post("/todo" , function (req, res) {

});

// Get all the todo from the database
app.get("/todo" , function (req, res) {

});

app.listen(PORT, () => {
    console.log(`Server is running`);
})