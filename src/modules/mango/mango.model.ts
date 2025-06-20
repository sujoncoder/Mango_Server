import mongoose from "mongoose";
import { IMango } from "./mango.interface";


const mangoSchema = new mongoose.Schema<IMango>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    variety: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["KG", "TON"],
            message: "Value must be in KG and TON"
        },
        default: "KG"
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    origin: {
        type: String,
        default: "Unknown"
    },
    seasion: {
        type: String,
        required: true,
        enum: {
            values: ["Summer", "Winter"],
            message: "Value must be in KG and TON"
        },
    }
}, { timestamps: true });


const Mango = mongoose.model<IMango>("Mango", mangoSchema);

export default Mango;