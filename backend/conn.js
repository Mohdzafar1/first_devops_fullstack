import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectDB = process.env.MONGO_URI;

if (!connectDB) {
    console.error("Error: MONGO_URI environment variable is not defined.");
    process.exit(1);
}

mongoose.connect(connectDB).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});
