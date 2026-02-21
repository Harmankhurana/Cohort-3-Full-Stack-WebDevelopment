import { Router } from 'express';
import { bcrypt } from 'bcrypt';
import { jwt } from 'jsonwebtoken';
import { z } from 'zod';
const adminRouter = Router();
import { AdminModel } from '../db.js';
import { parse } from 'dotenv';

const saltRounds = 10;
const JWT_SECRET = USER_APP;

adminRouter.post('/signup', async function(req, res) {
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

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
    const hashedPassword = bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);

    await AdminModel.create({
        name: name,
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

adminRouter.post('/signin', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const response = bcrypt.compare(password, hashedPassword);
    if(!response){
        res.json({
            message: "Incorrect credentials",
        });
    }

    
});

adminRouter.post('/', function(req, res) {
    
});

adminRouter.put('/', function(req, res) {
    
});

adminRouter.get('/bulk', function(req, res) {
    
});

export { adminRouter , AdminModel };