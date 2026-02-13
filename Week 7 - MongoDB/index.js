const express = require("express");
// importing UserModel and TodoModel from ./db file
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
dotenv.config();
const JWT_SECRET = "USER_APP";
const PORT = process.env.PORT;


// Connecting the DB with the Backend server
async function startServer() {
    try {
        await mongoose.connect(
          "mongodb+srv://harmankhurana19_db_user:4zNnk75HLObWDrvS@cluster0.a77wlqy.mongodb.net/todo-app-database"
        );

        console.log("✅ MongoDB connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error("❌ DB connection failed:", err.message);
        process.exit(1);
    }
}

startServer();



app.post("/signup" , async function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({    // it will hung here, cause I didn't connected the DB
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


// Create a todo in the database
app.post("/todo" , function (req, res) {

});


// Get all the todo from the database
app.get("/todo" , function (req, res) {

});


app.listen(PORT, () => {
    console.log(`Server is running`);
})