const express = require("express");

// importing UserModel and TodoModel from ./db file
const { UserModel, TodoModel } = require("./newDB");

// importing bcrypt library for hashing the password
const bcrypt = require("bcrypt");
const saltRounds = 10; // saltRounds determines how many times the password hashing function is applied (iterations).

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const JWT_SECRET = "USER_APP";

const PORT = process.env.PORT;
const DB = process.env.DB;


// Connecting the DB with the Backend server
mongoose.connect(DB);


app.post("/signup" , async function (req, res) {
    // There should be input validation - so that no one sends the server incorrect credentials
    const name = req.body.name; // Always String
    const email = req.body.email; // should contain @
    const password = req.body.password; // should contain Uppercase, Lowercase, password > 10 char and have special char

    try {   // Right now, the server crashes if you sign up using duplicate email, How can I fix this? I can fix this using try/catch method which used for error handling
        const hashedPassword = await bcrypt.hash(password, 10); // hashing the password here (it's a promisified approch)
        console.log(hashedPassword); // console.log the hashedPassword in terminal

        await UserModel.create({    // it will hung here, cause I didn't connected the DB but when i connect it will work and send data to DB.
            name: name,
            email: email,
            password: hashedPassword,   // example - $2b$10$0T7x3xKUTBjaN0l/KSymFuOFv2G0ovxoSjuu4gGxT7NjiRVjxN8zi
        });
    } catch(e) {
        res.status(500).json({
            message: "Error while signing up"
        })
    }

    res.json({
        message: "You're Signed up",
    })

});


app.post("/signin" , async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // to read from the database
    const response = await UserModel.findOne({ // it's not a sync call, it returns a promise
        email: email,
    });

    if (!response) {
        res.status(403).json({
            message: "User does not exist in our DB!",
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch) {
        const token = jwt.sign({
             id: response._id.toString(),
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
    const token = req.headers.token;

    const response = jwt.verify({
        token,
    }, JWT_SECRET);

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds",
        })
    }
}
// Create a todo in the database
app.post("/todo" , auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title,
        userId,
        done,
    })

    res.json({
        userId: userId,
    })
});


// Get all the todo from the database
app.get("/todos" , auth, async function (req, res) {
   const userId = req.userId;
   
   const todos = await TodoModel.find({
    userId: userId,
   })

    res.json({
        todos
    })
});


app.listen(PORT, () => {
    console.log(`Server is running`);
})