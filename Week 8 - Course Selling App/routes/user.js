import { Router } from 'express';
// or
// const { Router } = require('express');
const userRouter = Router();
import { UserModel } from '../db.js';

userRouter.post('/signup', async function (req, res) {
        const requiredBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parseDataWithSuccess,
        })
    };

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // or
    const { firstName, lastName, email, password } = req.body;

    try {
    const hashedPassword = bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);

    await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
    });
    res.json({
        message: "You're signedup to admin page"
    })
    } catch (e) {
        res.json({
            message: "Something went wrong while signing up"
        })
    }
});

userRouter.post('/signin', async function (req, res) {

});

userRouter.get('/purchases', async function (req, res) {
    
});

export { userRouter , UserModel };