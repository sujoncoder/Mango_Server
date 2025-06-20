import express, { Request, Response } from "express";
import cors from "cors";
import userRoute from "./modules/user/user.route";


const app = express();

//APPLICATION LAYER
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

export default app;