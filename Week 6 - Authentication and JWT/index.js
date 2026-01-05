// Creating my own authentication(auth) code
const express = require("express");
// const { useInsertionEffect } = require("react");
const app = express();
const port = 3000;

app.use(express.json()); // it's a middleware which helps in parsing the post body

// Making an In memory variable to store the users and passwords
const users = [];

// Making a function which randomly makes a string token 
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup" , function (req,res){
    const username = req.body.username;
    const password = req.body.password;

    // Pushing the username and password to the in memory variable
    users.push({                
        username : username,
        password : password
    })
    // For responding that I have signed in with a message
    res.json({
        message : "You are Signed up"
    })
});

app.post("/signin" , function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    // now i have to check does this user exsits - if it does we can send the requested data or tell them that sorry signup required
    let foundUsers = null;

    for (let i = 0 ; i < users.length ; i++){
        if (user[i].username == username && users[i].password == password){
            foundUsers == users[i]
        }
    }

    // OR 

    // const foundUsers = user.find(function(u){
    //     if(u.username == username && u.password == password){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })

    // If i found the username and password correct then i will send the token to the user or i will tell that it's invalid
    if (foundUsers){
        const token = generateToken();
        res.json({
        message : token
    })
    } 
    else {
        res.status(403).send({
            message : "Invalid username or password"
        });
    }
});

app.listen(`${port}` , 
    console.log("Server is running")
);