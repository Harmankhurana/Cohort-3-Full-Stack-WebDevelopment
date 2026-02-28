import { Router } from 'express';
// or
// const { Router } = require('express');
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import bcrypt  from 'bcrypt';
const userRouter = Router();
import { UserModel } from '../db.js';
import { JWT_USER_PASSWORD } from '../config.js';
import { userMiddleware } from "../middlewares/user.middleware.js"

const saltRounds = 10;

userRouter.post('/signup', async function (req, res) {
        const requiredBody = z.object({
        firstName: z.string(),
        lastName:z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parseDataWithSuccess,
        })
        return;
    };

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // or
    const { firstName, lastName, email, password } = req.body;

    try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);

    await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
    });

    } catch (e) {
        res.json({
            message: "Something went wrong while signing up"
        })
    }    
    res.json({
        message: "You're signed up to user page"
    })
});

userRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body;

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response) {
        res.json({
            message: "User does not exist in our DB!"
        })
    };

    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString(),
        }, JWT_USER_PASSWORD);
        res.json({
            token: token,
        });
    } else {
        res.json({
            message: "Incorrect credentails"
        })
    }
});

userRouter.get('/purchases',userMiddleware, async function (req, res) {
    
});

export { userRouter , UserModel };