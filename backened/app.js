import express from "express"
import  dotenv from "dotenv";
import { database } from "./database.js";
import mongoose from "mongoose";
import userrouter from "./routers/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import reciperouter from './routers/recipe.route.js'
const app=express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//   dotenv configuration
dotenv.config();

//   database connection
// await mongoose.connect(process.env.MONGO_URL).then(()=>{
//     console.log("connected to database")
// });
database();

//   backend get route
app.get("/",(req,res)=>{
    res.send("hkjjk")
})
// cors integration 
const cookieOption={
    origin:"http://localhost:5173",
    credentials:true

}
app.use(cors(cookieOption))

app.use('/api/v1/user',userrouter)
app.use('/api/v1/recipe',reciperouter)




//   port connection
app.listen(`${process.env.PORT}`,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})