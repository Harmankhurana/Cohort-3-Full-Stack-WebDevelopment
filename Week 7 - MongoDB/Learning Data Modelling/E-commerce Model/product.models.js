import mongoose from "mongoose";

const schema = mongoose.schema;
const objectId = mongoose.Schema.Types.ObjectId

const productSchema = new schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: objectId,
        ref: "Category",
        required: true,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);