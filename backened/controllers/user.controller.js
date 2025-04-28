import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { uploadmedia } from "../cloudinary.js";

export const register=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body
        if(!fullname||!email||!password){
            return res.status(400).json({
message:"something is missing",
success:false
            })
        }

        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                message:"email already in use",
                success:false
                            })
        }
        const hashpassword=await bcrypt.hash(password,10)


        await User.create({
            fullname,
            email,
            password:hashpassword
        })

        return res.status(200).json({
            message:"registered successfully",
            success:true
                        })

    }catch(error){
        console.log(error)
    }
}

//  LOGIN
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({
message:"something is missing",
success:false
            })
        }

        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"user not exist",
                success:false
                            })
        }
        const tokendata={
              user_id:user._id}

const token =await jwt.sign(tokendata,process.env.SECRET_KEY,{expiresIn:"1d"});




        const comparepassword=await bcrypt.compare(password,user.password)
if(!comparepassword){
    return res.status(400).json({
        message:"incorrect password ",
        success:false
                    })
}
       
const Userr={
    _id:user._id,
fullname:user.fullname,
email:user.email
}



        return res.status(200).cookie("token",token,{
            maxAge:1*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict"
            
        }).json({
            message:`Login Successfully ${Userr.fullname}`,
            success:true
,Userr
                        })

    }catch(error){
        console.log(error)
    }
}



//LOGOUT 

export const logout=async(req,res)=>{



    try {
        return res.status(200).cookie("token", "", {
          maxAge: 0,
        }).json({
          message: "Logout successfully",
          success: true,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }


}

// UPDATE

export const update=async(req,res)=>{
    try{
        const {email,fullname}=req.body
        const userid=req.id
const profilephoto=req.file;
        if(!email){
            return res.status(400).json({
message:"email is missing",
success:false
            })
        }
        
        if(!fullname){
            return res.status(400).json({
message:"fullname is missing",
success:false
            })
        }




if(!userid){
    return res.status(400).json({
        message:"user not exist",
        success:false
    })
}

if(profilephoto){
    console.log("profiephoto hai")
}
    const response=await uploadmedia(profilephoto.path) 
    const file=response.secure_url
    
const data={fullname,email,file} 

        const user=await User.findByIdAndUpdate(userid,data,{new:true})
    

        return res.status(200).json({
            message:`updated Successfully `,

            success:true,
            user
                        })

    }catch(error){
        console.log(error)
    }
}





