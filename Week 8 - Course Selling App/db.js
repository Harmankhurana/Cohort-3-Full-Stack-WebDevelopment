import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DB;

mongoose.connect(DB);

const { Schema } = mongoose;
// or const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "admin"
    },
});

const adminSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    firstName: String,
    lastName: String,
});

const purchaseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },    
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "course",
    },
});


const UserModel = mongoose.model('user', userSchema);
const CourseModel = mongoose.model('course', courseSchema);
const AdminModel = mongoose.model('admin', adminSchema);
const PurchasesModel = mongoose.model('purchase', purchaseSchema);

export {
    UserModel,
    CourseModel,
    AdminModel,
    PurchasesModel,
};
