import express from "express";
import { registerUser } from "./user.controller";

const userRoute = express.Router()
    .post("/", registerUser);

export default userRoute;