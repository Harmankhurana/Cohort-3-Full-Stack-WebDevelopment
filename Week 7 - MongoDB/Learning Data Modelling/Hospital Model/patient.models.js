t // Data Model for patient data
import mongoose from "mongoose";

// Adding mongoose.Schema in a variable called Schema
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
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
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

}, {timestamps : true});

export const Patient = mongoose.model("Patient", PatientSchema);