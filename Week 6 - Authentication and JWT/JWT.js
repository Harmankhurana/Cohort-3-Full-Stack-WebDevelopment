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
        const token = jwt.sign({   // sign is used for encryption the username
            username: username
        }, JWT_SECRET);

        foundUser.token = token;

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

app.get('/me', function(req, res) {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET); // verify is used for decryption the username -> {username: "Harmankhurana@gmail.com"}
    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0 ; i < user.length ; i++){
        if(users[i].toke === token) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        })
    } else {
        res.status(401).send({
            message: "token invalid", // or "Unauthorized"
        })
    }
});

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});