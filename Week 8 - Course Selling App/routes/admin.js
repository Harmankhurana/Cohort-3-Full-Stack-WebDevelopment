import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
const adminRouter = Router();
import { AdminModel } from '../db.js';
import { JWT_ADMIN_PASSWORD } from '../config.js';
import { adminMiddleware } from '../middlewares/admin.middleware.js';

const saltRounds = 10;

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
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);

    await AdminModel.create({
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
        message: "You're signed up to admin page"
    })
});

adminRouter.post('/signin', async function(req, res) {
    // const email = req.body.email;
    // const password = req.body.password;
    const { email , password } = req.body;

    const response = await AdminModel.findOne({
        email: email,
    });

    if(!response){
        res.json({
            message: "User does not exist in our DB!",
        });
    }
        
    const passwordMatch = await bcrypt.compare(password, response.password);

        if(passwordMatch){
            const token = jwt.sign({
                id: response._id.toString(),
            }, JWT_ADMIN_PASSWORD);
            res.json({
                token: token,
            });
        } else {
            res.json({
                message: "Incorrect credentials"
            });
        }
});

adminRouter.post('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, price, imageUrl } = req.body;

    // creating the course
    const course = await CourseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId,
    });

    res.json({
        message: "Course Created",
        creatorId: course._id,
    })
});

adminRouter.put('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, price, imageUrl } = req.body;
});

adminRouter.get('/course/bulk', adminMiddleware, function(req, res) {
    
});

export { adminRouter , AdminModel };