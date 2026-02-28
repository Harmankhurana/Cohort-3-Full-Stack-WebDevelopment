import dotenv from 'dotenv';
dotenv.config();

const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD; // different JWT password for ADMIN
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD; // different JWT password for USER

export {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD,
}