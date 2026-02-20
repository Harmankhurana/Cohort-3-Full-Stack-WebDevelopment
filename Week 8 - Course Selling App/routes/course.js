import { Router } from "express";
const courseRouter = Router();
import { CourseModel } from "../db.js";

courseRouter.post('/purchase', async function (req, res) {
    
});

courseRouter.get('/', async function (req, res) {
    
});

export { courseRouter , CourseModel };