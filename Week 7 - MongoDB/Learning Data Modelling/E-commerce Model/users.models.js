import mongoose, { Schema } from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
    },
    phoneNo: {
        type: Number,
        require: true,
    },
    role: {
        type: String,
        require: true
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);