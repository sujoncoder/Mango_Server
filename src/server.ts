import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config";
import connectDB from "./config/connectDB";

const app = express();

//APPLICATION LAYER
app.use(cors());
app.use(express.json());

// ROOT ROUTE
app.get("/", (req: Request, res: Response) => {
    res.send("Wellcome to my mango server.🥭")
});


// APP LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
});