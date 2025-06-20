import { Request, Response } from "express";
import User from "./user.model";

// CREATE USER
export const registerUser = async (req: Request, res: Response) => {
    try {
        const bodyData = req.body;

        const user = new User(bodyData);
        const data = await user.save();

        res.status(201).json({
            success: true,
            message: "User register successfully.",
            data
        });
    } catch (error) {
        console.log(error)
    };
};