import mongoose from "mongoose";
import { Product } from "./product.models";

// I can make this schema in another file also but as im just
// working this schema in this order schma only that's why i wrote it here
const orderItemsSchema = new mongoose.Schema(
    {
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        orderItems: {
            type: [orderItemsSchema]
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENFING",
        }

    },
     {timestamps: true}
);

export const Order = mongoose.model("Order", orderSchema);