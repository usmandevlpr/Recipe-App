import mongoose from "mongoose";
import  dotenv from "dotenv";
dotenv.config()
export const database=async()=>{

await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database")
})

}