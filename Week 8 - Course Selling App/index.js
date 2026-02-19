import express from 'express';
import { userRouter } from './routes/user';
import { courseRouter } from './routes/course'

const app = express();

app.use('/user', userRouter);
app.use('/course', courseRouter);

app.listen(PORT, () => {
    console.log(`Server is running`);
});