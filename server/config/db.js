import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected")
        })
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        // console.error("Database connection failed:", error.message);
        console.error("Database connection failed:");
        console.error(error);
        
    }
}

export default connectDB;