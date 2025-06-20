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

// GET ALL USER
export const getAllUser = async (req: Request, res: Response) => {
    try {

        const allUsers = await User.find();
        res.status(200).json({
            success: true,
            message: "Fetch all user successfully.",
            users: allUsers
        });
    } catch (error) {
        console.log(error)
    };
};

// GET USER
export const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId;
        console.log(id)
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: "Get user successfully.",
            user: user
        });
    } catch (error) {
        console.log(error)
    };
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId;
        const bodyData = req.body;

        const updateUser = await User.findByIdAndUpdate(id, bodyData, { new: true });

        res.status(200).json({
            success: true,
            message: "Update user successfully.",
            user: updateUser
        });
    } catch (error) {
        console.log(error)
    };
};

// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId;

        const deletedUser = await User.findByIdAndDelete(id, { new: true });

        res.status(200).json({
            success: true,
            message: "User deleted successfully.",
            user: deletedUser
        });
    } catch (error) {
        console.log(error)
    };
};