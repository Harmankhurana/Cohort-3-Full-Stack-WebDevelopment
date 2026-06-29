import mongoose from "mongoose";

const schema = mongoose.Schema;

const categorySchema = new schema(
    {
    name: {
        type: String,
        required: true,
    }
 }, 
    {timestamps: true}
);

export const Category = mongoose.model("Category", categorySchema);