import { Request, Response } from "express";
import Order from "./order.model";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.create(req.body);

        res.status(201).json({
            success: true,
            message: "Order create successfully",
            order: order
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};