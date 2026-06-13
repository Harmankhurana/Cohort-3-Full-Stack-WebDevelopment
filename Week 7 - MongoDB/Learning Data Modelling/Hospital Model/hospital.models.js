// Data Model for Hospital data
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        specializedIn: [
            {
            type: String,
            required: true,                
            },            
        ],
    }, 
    {timestamps: true}
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);