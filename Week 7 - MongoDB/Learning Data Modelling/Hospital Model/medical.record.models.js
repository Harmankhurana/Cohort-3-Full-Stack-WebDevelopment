import mongoose, { mongo, MongooseError } from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pateint",
            required: true,
        },
        visitdate: {
            type: Number,
            required: true,
        },
        medicalHistory: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        diagnosticsReports: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },
 }, 
    {timestamps: true}
);

export const MedicalRecord = mongoose.model("medicalRecord", medicalRecordSchema);
