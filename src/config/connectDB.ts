import mongoose from "mongoose";
import { MONGODB_URI } from ".";


const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database connect successfully...✅");
    } catch (error: any) {
        console.log("Database connection failed...💥", error.message)
    };
};

export default connectDB;