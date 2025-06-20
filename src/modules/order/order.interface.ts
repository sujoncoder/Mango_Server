// userId, mangoId, Quantity, totalPrice, status,address

import { Types } from "mongoose";


export interface IOrder {
    userId: Types.ObjectId,
    mangoId: Types.ObjectId,
    quantity: number,
    totalPrice: number,
    status: "Pending" | "Process" | "Success",
    address: {
        zipcode: string,
        state: string,
        country: string,
        street: string
    }
};