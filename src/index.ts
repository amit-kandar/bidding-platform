import dotenv from "dotenv";
import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";
import logger from "./config/logger";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8000;

// Define the configuration parameters
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || ''
});


app.on("error", err => {
    logger.error("Error: ", err);
})

app.listen(PORT, () => {
    logger.info(`server is running at port ${PORT}`);
})