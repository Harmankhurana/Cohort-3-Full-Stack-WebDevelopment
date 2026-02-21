import { Router } from 'express';
import { bcrypt } from 'bcrypt';
import { jwt } from 'jsonwebtoken';
import { z } from 'zod';
const adminRouter = Router();
import { AdminModel } from '../db.js';

const saltRounds = 10;
const JWT_SECRET = USER_APP;

adminRouter.post('/signup', async function(req, res) {
    const requiredBody = z.object({
        firstName: z.string(),
        lastName: z.string(),
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

    await AdminModel.create({
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

adminRouter.post('/signin', async function(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const response = await AdminModel.findOne({
            email: email,
        })

        const passwordMatch = await bcrypt.compare(password, response.password);
        if(response, passwordMatch){
            const token = jwt.sign({
                id: response._id.toString(),
            }, JWT_SECRET);
        }
    } catch (e) {

    }


    
    if(!response){
        res.json({
            message: "Incorrect credentials",
        });
    }

    
});

adminRouter.post('/course', function(req, res) {
    
});

adminRouter.put('/course', function(req, res) {
    
});

adminRouter.get('/course/bulk', function(req, res) {
    
});

export { adminRouter , AdminModel };