import express from 'express';
import { jwt } from 'jsonwebtoken';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.post('/login', async function (req, res) {
    
});

app.post('/signup', async function (req, res) {
    
});

app.post('/purchase', async function (req, res) {
    
});

app.post('/course', async function (req, res) {
    
});

app.listen(PORT, () => {
    console.log(`Server is running`);
});