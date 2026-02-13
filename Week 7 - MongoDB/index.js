import express from "express";
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment
import dotenv, { config, configDotenv } from 'dotenv';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;

app.post("/signup" , function (req, res) {

});

app.post("/login" , function (req, res) {

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