import mongoose from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Customers"]
    },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;