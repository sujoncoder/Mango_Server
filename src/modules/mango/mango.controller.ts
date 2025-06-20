import { Request, Response } from "express";
import Mango from "./mango.model";


// CREATE MANGO
export const createMango = async (req: Request, res: Response) => {
    try {
        const bodyData = req.body;

        const mango = await Mango.create(bodyData);

        res.status(201).json({
            success: true,
            message: "Mango create successfully",
            data: mango
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    };
};

// GET ALL MANGO
export const getALlMango = async (req: Request, res: Response) => {
    try {
        const mangos = await Mango.find();

        res.status(200).json({
            success: true,
            message: "Get all mango successfully",
            data: mangos
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    };
};


// GET A MANGO
export const getMango = async (req: Request, res: Response) => {
    try {
        const id = req.params.mangoId;
        const mango = await Mango.findById(id);

        res.status(200).json({
            success: true,
            message: "Get mango successfully",
            data: mango
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    };
};

// UPDATE A MANGO
export const updateMango = async (req: Request, res: Response) => {
    try {
        const id = req.params.mangoId;
        const bodyData = req.body;

        const updateMango = await Mango.findByIdAndUpdate(id, bodyData, { new: true, runValidators: true });

        res.status(200).json({
            success: true,
            message: "Update mango successfully",
            data: updateMango
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    };
};

// DELETE A MANGO
export const deleteMango = async (req: Request, res: Response) => {
    try {
        const id = req.params.mangoId;

        const deleteMango = await Mango.findByIdAndDelete(id, { new: true });

        res.status(200).json({
            success: true,
            message: "Delete mango successfully",
            data: deleteMango
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    };
};