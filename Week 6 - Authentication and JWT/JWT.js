import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const users = [];

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

    
});

app.get('/me');

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});