// Model for Doctor's data
import mongoose from "mongoose";

// Adding mongoose.Schema in a variable called Schema
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true,
    },
    workInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
    ],
}, {timestamps : true});

export const Doctor = mongoose.model("Doctor", doctorSchema);