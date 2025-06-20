import { Request, Response } from "express"
import app from "./app";
import { PORT } from "./config";
import connectDB from "./config/connectDB";


// ROOT ROUTE
app.get("/", (req: Request, res: Response) => {
    res.send("Wellcome to my mango server.🥭")
});


// APP LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ➡️`)
    connectDB()
});