// CLOUDINARY_URL=cloudinary://442467756748897:LY3Nd62sNPQl9lPgbuP4sOqh9YY@dguuqdjra

import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
dotenv.config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
});



export const uploadmedia=async(file)=>{
   try{
    const cloudresponse= await cloudinary.uploader.upload(file,{resource_type:'image'})
   return cloudresponse
   }catch(error){
    console.log(error)
   }

}



export const deletemedia=async(publicid)=>{
  try{
    const  cloudresponse= await cloudinary.uploader.destroy(publicid)
    return cloudresponse;
  }catch(error){
    console.log(error)
  }
}