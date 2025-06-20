import express, { Request, Response } from "express";
import cors from "cors";
import userRoute from "./modules/user/user.route";
import mangoRoute from "./modules/mango/mango.route";
import orderRoute from "./modules/order/order.route";


const app = express();

//APPLICATION LAYER
app.use(cors());
app.use(express.json());

// ROUTE LAYER
app.use("/users", userRoute);
app.use("/mangos", mangoRoute);
app.use("/order", orderRoute);

export default app;