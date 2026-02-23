import { jwt } from 'jsonwebtoken';

function adminMiddleware(req, res, next) {
    const token = req.headers.token;

    const response = jwt.verify({
        token,
    },JWT_ADMIN_PASSWORD)

};

export { 
    adminMiddleware,
 };