import mongoose from "mongoose";


export const dbConnect = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL as string)
        console.log(`MongoDB connected:${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}