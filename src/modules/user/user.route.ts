import express from "express";
import { getAllUser, registerUser, getUser, updateUser, deleteUser } from "./user.controller";

const userRoute = express.Router()
    .get("/", getAllUser)
    .post("/register", registerUser)
    .get("/:userId", getUser)
    .patch("/:userId", updateUser)
    .delete("/:userId", deleteUser)

export default userRoute;