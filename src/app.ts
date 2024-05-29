import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";

const app: Application = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.static("public"));

// Import all routes


// Declare routes

app.use(errorHandler);

app.get("/", (req, res) => {
    res.status(200).json("Hello World")
})


export { app }