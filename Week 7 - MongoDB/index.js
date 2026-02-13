import express from "express";

import dotenv, { config, configDotenv } from 'dotenv';

// importing UserModel and TodoModel from ./db file
const { UserModel, TodoModel } = require('./db');

const app = express();
app.use(express.json());
dotenv.config();
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
});

app.post("/login" , async function (req, res) {

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