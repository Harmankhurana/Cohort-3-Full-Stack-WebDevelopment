import express from 'express';
import dotenv, { configDotenv } from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.post('/signup');

app.post('/signin');

app.get('/me');

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});