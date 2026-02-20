import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.js';
import { courseRouter } from './routes/course.js';
import { adminRouter } from './routes/admin.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const DB = process.env.DB;

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);


// connecting the Database first and then running the server
async function connectionFirst() {
    await mongoose.connect(DB);
    console.log("MongoDB is connected");
    app.listen(PORT, () => {
        console.log(`Server is running`);
    });    
};

// calling the function here
connectionFirst();

