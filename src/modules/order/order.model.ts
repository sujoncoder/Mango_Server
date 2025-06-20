import mongoose, { Schema } from "mongoose";
import { IOrder } from "./order.interface";


// Embeded schema
const orderAddressSchema = new mongoose.Schema({
    zipcode: String,
    state: String,
    country: String,
    street: String
});


const orderSchema = new mongoose.Schema<IOrder>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    mangoId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    // totalPrice: {
    //     type: Number,
    //     required: true,
    //     min: 0
    // },
    address: {
        type: orderAddressSchema,
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ["Pending", "Process", "Success"],
            message: "Must be include this ${value} value"
        },
        default: "Pending"
    }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;