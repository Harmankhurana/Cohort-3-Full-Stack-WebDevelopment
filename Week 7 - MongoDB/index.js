const express = require("express");
// importing UserModel and TodoModel from ./db file
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Connecting the DB with the Backend server
mongoose.connect("mongodb+srv://harmankhurana19_db_user:4zNnk75HLObWDrvS@cluster0.a77wlqy.mongodb.net/todo-app-database");

const app = express();
app.use(express.json());
dotenv.config();
const JWT_SECRET = "USER_APP";
const PORT = process.env.PORT;


app.post("/signup" , async function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({    // it will hung here, cause I didn't connected the DB but 
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
    const user = await UserModel.findOne({ // it's not a sync call, it returns a promise
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

// Auth middleware
function auth(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify({
        token,
    }, JWT_SECRET);

    if (response) {
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds",
        })
    }
}
// Create a todo in the database
app.post("/todo" , auth, function (req, res) {

});


// Get all the todo from the database
app.get("/todos" , auth, function (req, res) {

});


app.listen(PORT, () => {
    console.log(`Server is running`);
})