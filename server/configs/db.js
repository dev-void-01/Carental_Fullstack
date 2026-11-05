import mongoose from "mongoose";

const connectDB = async ()=>{
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not configured");
    }

    mongoose.connection.on('connected', ()=> console.log("Database Connected"));
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "car-rental" });
}

export default connectDB;