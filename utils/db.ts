import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() => {
    try{
        const uri = process.env.MONGO_URL as string;
        await mongoose.connect("mongodb+srv://Ankit:7290921543@wanderlust.akqq6.mongodb.net/?retryWrites=true&w=majority&appName=WanderLust");
        console.log("Connected to MongoDB");
    } catch(error){
        console.log("Error connecting to mongo,error")
}
};

export default connectDB;