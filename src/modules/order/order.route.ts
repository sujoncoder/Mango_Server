import { Router } from "express";
import { createOrder } from "./order.controller";

const orderRoute = Router()
    .post("/", createOrder)


export default orderRoute;