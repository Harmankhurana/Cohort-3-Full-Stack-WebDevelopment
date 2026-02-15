# Authentication and JWT

# Context

Code - https://github.com/100xdevs-cohort-3/week-6-auth-app

Today we want to understand the `most basic way` to do `authentication` in a Node.js app.

## What is authentication?

The process of letting users `sign in` / `sign out` of your website. Making sure your `routes` are protected and users can only get back their `own` data and not the data from a different user
![authentication page](./images/image.png)

## What we’ll learn

1. Auth basics
2. JWT (JSON Web tokens)
3. Authorization header
4. Creating your own auth middleware
5. localStorage

# Auth workflow (Bank example)

When you go to open a bank account in a bank, you

1. Go to the bank and give your information. - Just like signing up 
2. They give you back a `cheque book`
3. Every time you want to send money, you write it in the cheque book and send it over to the bank
4. That is how the bank identifies you.
![Auth workflow](./images/image%20copy.png)
![Auth workflow](./images/image%20copy%203.png)
- When I signup in any website, the website sends me a token
- This token is kept in my browser and when i req for any get or post, my token goes to the server and server confirms that its Harman send me the response

# Auth workflow

The workflow for authentication usually looks as follows -
![Auth workflow](./images/image%20copy%202.png)
1. The user comes to your website (courses.com)
2. The user sends a request to `/signin` with their `username` and `password`
3. The user gets back a `token`
4. In every subsequent request, the user sends the token to identify it self to the backend.
5. When I and Harkirat sends the request to get/courses we hit the same end point but cause of different tokens we send to the backend server, it response

<aside>
💡

Think of the token like a `secret` that the server has given you. You send that `secret` back to the server in every request so that the server knows who you are. 

</aside>

- A **token** is a **string (usually long and random)** that acts as a **proof of authentication or authorization**. It's used so that the server doesn't have to check your credentials (username/password) on every request.

### Flow Example:

1. **You log in** on a website with your credentials.
2. The **backend verifies** those credentials.
3. If correct, it **generates a token** (like a JWT).
4. The token is **sent back to your frontend** (browser/app).
5. You **store the token** (typically in `localStorage`, `sessionStorage`, or a cookie).
6. For **future requests**, you **send the token** (e.g., in the HTTP `Authorization` header).
7. The **backend verifies** the token to confirm your identity and permissions.
![token/cookie](./images/image%20copy%204.png)
- This is how token looks like

# Creating an express app

Lets initialise an express app that we will use to generate an `authenticated backend` today.

- Initialise an empty Node.js project
    
    ```jsx
    npm init -y
    ```
    
- Create an `index.js` file, open the project in visual studio code
    
    ```jsx
    touch index.js
    ```
    
- Add `express` as a dependency
    
    ```jsx
    npm i express
    ```
    
- Create two new  POST routes, one for `signing up` and one for `signing in`
    
    ```jsx
    const express = require('express');
    const app = express();
    
    app.post("/signup", (req, res) => {
    
    });
    
    app.post("/signin", (req, res) => {
    
    });
    
    app.listen(3000);
    ```
    
- Use `express.json` as a middleware to parse the post request body
    
    ```jsx
    app.use(express.json());
    ```
    
- Create an `in memory` variable called `users` where you store the `username` , `password` and a `token` (we will come to where this token is created later.
    
    ```jsx
    const users = []
    ```
    
- Complete the signup endpoint to store user information in the `in memory variable`
    
    ```jsx
    app.post("/signup", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        users.push({
            username,
            password
        })
        res.send({
            message: "You have signed up"
        })
    });
    ```
    
- Create a function called `generateToken` that generates a random string for you
    
    ```jsx
    function generateToken() {
        let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
        let token = "";
        for (let i = 0; i < 32; i++) {
            // use a simple function here
            token += options[Math.floor(Math.random() * options.length)];
        }
        return token;
    }
    ```
    
- Finish the signin endpoint. It should generate a token for the user and put it in the `in memory` variable for that user
    
    ```jsx
    
    app.post("/signin", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        const user = users.find(user => user.username === username && user.password === password);
    
        if (user) {
            const token = generateToken();
            user.token = token;
            res.send({
                token
            })
            console.log(users);
        } else {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }
    });
    ```
    

<aside>
💡

This can be improved further by
1. Adding zod for input validation
2. Making sure the same user cant sign up twice
3. Persisting data so it stays even if the process crashes
We’ll be covering all of this eventually

</aside>

# Creating an authenticated EP

Let’s create an endpoint (`/me` ) that returns the user their information `only if they send their

```jsx
app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const user = users.find(user => user.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})
```

# Tokens vs JWTs

Token - A randomly generated extremely long string 

There is a problem with using `stateful` tokens.

## Stateful

By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database). 

- Hitting the DB so many times

## Problem

The problem is that we need to `send a request to the database` every time the user wants to hit an `authenticated endpoint`
![Problem](./images/image%20copy%205.png)
![auth framework](./images/image%20copy%206.png)
- Some how i make token an encrypted form of the username itself
- This token is not randomly generated anymore
- This token can be decrypted back to the username

## Solution

JWTs

# JWTs

JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

**JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the `data` is stored in the token itself.
![JWT's](./images/image%20copy%207.png)
![JWT's](./images/image%20copy%209.png)

# Replace token logic with JWT

Lets change the token logic that we had to use jwts

- Add the `jsonwebtoken` library as a dependency - https://www.npmjs.com/package/jsonwebtoken
    
    ```jsx
    npm install jsonwebtoken
    ```
    
- Get rid of our `generateToken` function
    
    ```jsx
    function generateToken() {
        let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
        let token = "";
        for (let i = 0; i < 32; i++) {
            // use a simple function here
            token += options[Math.floor(Math.random() * options.length)];
        }
        return token;
    }
    ```
    
- Create a `JWT_SECRET` variable
    
    ```jsx
    const JWT_SECRET = "USER_APP";
    ```
    
- Create a jwt for the user instead of generating a token
    
    ```jsx
    app.post("/signin", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        const user = users.find(user => user.username === username && user.password === password);
    
        if (user) {
            const token = jwt.sign({
                username: user.username
            }, JWT_SECRET);
    
            user.token = token;
            res.send({
                token
            })
            console.log(users);
        } else {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }
    });
    ```
    

<aside>
💡

Notice we put the `username` inside the token. The `jwt` holds your state.
You no longer need to store the `token` in the global `users` variable

</aside>

- In the `/me` endpoint, use `jwt.verify` to verify the token
    
    ```jsx
    
    app.get("/me", (req, res) => {
        const token = req.headers.authorization;
        const userDetails = jwt.verify(token, JWT_SECRET);
    
        const username =  userDetails.username;
        const user = users.find(user => user.username === username);
    
        if (user) {
            res.send({
                username: user.username
            })
        } else {
            res.status(401).send({
                message: "Unauthorized"
            })
        }
    })
    ```
![encryption and decryption](./images/image%20copy%208.png)
- encryption and decryption can be done by the same key
    
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikhhcm1
    hbiIsImlhdCI6MTc3MDUxNDQwNH0.Oe02my0bwnmDjh2jt-BhtRVCtf7oFPqTtesL3rP6pBw
    
- This is Json Web Token, having it’s own logic to encrypt the username