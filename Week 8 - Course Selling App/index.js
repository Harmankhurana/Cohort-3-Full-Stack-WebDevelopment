import express from 'express';
import { jwt } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const userRouter = express();
dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.DB;
const saltRounds = 10;
const JWT_SECRET = USER_APP;

userRouter.post('/user/signup', async function (req, res) {
    const requiredBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess,
        })
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const hashedPassword = bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);

        await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        res.json({
            message: "You're signed up"
        })
    } catch (e) {
        res.json({
            message: "Error in signing up"
        })
    }
});

userRouter.post('/user/signin'), async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = jwt.sign({

    }, JWT_SECRET)
}

function auth (req, res, next){
    const response = jwt.verify({
        token,
    }, JWT_SECRET)
};

userRouter.get('/user/purchases', async function (req, res) {
    
});

userRouter.post('/course/purchase', async function (req, res) {
    
});

userRouter.get('/course', async function (req, res) {
    
});

userRouter.listen(PORT, () => {
    console.log(`Server is running`);
});





// const express = require('express');
// const Router = express.Router;
// or
const { Router } = require('express');
const userRouter = Router();

	userRouter.post('/signup', async function (req, res) {

	});

	userRouter.post('/signin', async function (req, res) {

	});

	userRouter.get('/purchases', async function (req, res) {
    
	});