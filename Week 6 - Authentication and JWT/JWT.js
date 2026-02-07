import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const users = [];

const JWT_SECRET = "USER_APP";

app.post('/signup', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You're signed up"
    })

    console.log(users);

});



app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0 ; i < users.length ; i++){
        if (users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or passsword"
        })
    }
    
    console.log(users);
});

app.get('/me');

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});