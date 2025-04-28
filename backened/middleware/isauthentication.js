import express from 'express'
import jwt from "jsonwebtoken"


 const isauthentication=async(req,res,next)=>{
   
   try{ const token=req.cookies.token

    if(!token){
        return res.status(400).json({
            message:"user not authorized"
            ,success:false
        })
    }
const decodes=await jwt.verify(token,process.env.SECRET_KEY)

if(!decodes){
    return res.status(400).json({
        message:"invalid user"
        ,success:false
    })
}

req.id=decodes.user_id;
next()


  }catch(error){
        console.log(error)
    }
}
export  default isauthentication