import { Router } from "express";
import { createMango, deleteMango, getALlMango, getMango, updateMango } from "./mango.controller";


const mangoRoute = Router()
    .post("/create-mango", createMango)
    .get("/", getALlMango)
    .get("/:mangoId", getMango)
    .patch("/:mangoId", updateMango)
    .delete("/:mangoId", deleteMango)

export default mangoRoute;