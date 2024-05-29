import "dotenv/config";
import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";
import logger from "./config/logger";
import sequelize from "./database";

const PORT = process.env.PORT || 8000;

// Define the configuration parameters
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || ''
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        logger.info('Database connected successfully.');

        await sequelize.sync({ force: false });
        logger.info('All models were synchronized successfully.');

        app.on("error", (err) => {
            logger.error("Error: ", err);
        });

        app.listen(PORT, () => {
            logger.info(`Server is running at port ${PORT}`);
        });
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

startServer();