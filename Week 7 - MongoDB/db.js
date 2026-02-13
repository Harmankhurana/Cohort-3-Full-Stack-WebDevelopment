import mongoose from "mongoose";

const Schema = mongoose.schema;
const objectId = mongoose.objectId;

const User = new Schema({
    name: String,
    email: String,
    password: String,
})

const Todo = new schema({
    userId: objectId,
    title: String,
    done: Boolean,
})