import { Router } from 'express';
// or
// const { Router } = require('express');
const userRouter = Router();
import { UserModel } from '../db.js';

userRouter.post('/signup', async function (req, res) {

});

userRouter.post('/signin', async function (req, res) {

});

userRouter.get('/purchases', async function (req, res) {
    
});

export { userRouter };