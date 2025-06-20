import mongoose from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [true, "User name must be required."],
        trim: true
    },
    email: {
        type: String,
        required: [true, "User email must be required."],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props) => `${props.value} is not valid email`
        }
    },
    phone: {
        type: String,
        required: [true, "User phone number must be required."]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Customer"]
    },
}, { timestamps: true });

const User = mongoose.model<IUser>("User", userSchema);

export default User;