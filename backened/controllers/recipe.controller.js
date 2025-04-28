import mongoose from "mongoose";
import express from "express";
import Recipe from "../models/recipe.model.js";
import { uploadmedia } from "../cloudinary.js";
import User from "../models/user.model.js";

export const createrecipe=async(req,res)=>{
    try{
        const userid=req.id
        if(!userid){
            return res.status(400).json({
                message:"user not exist",
                success:false
            })
        }
const {   name, category,incredients,instruction,recipeTime}=req.body



if(!name || !category ||! incredients||! instruction||!recipeTime){
    return res.status(400).json({
        message:"something is missing"
        ,success:false
    })
}
for (const ingredient of incredients) {
    if (!ingredient.incredientname || ingredient.quantity === undefined) {
        return res.status(400).json({
            message: "Each ingredient must have a name and quantity",
            success: false
        });
    }
}
const file=req.file

if(!file){
    return res.status(400).json({
        message:"file required",
        success:false
    })
}

const response=await uploadmedia(file.path)
const recipePhoto=response.secure_url




const recipe=await Recipe.create({
    name,
     category,
     incredients,
     instruction,
     recipeTime,
     recipePhoto,
     created_by:userid
})
return res.status(200).json({
    message:"Recipe created successfully"
    ,success:true,
    recipe
})
    }catch(error){
        console.log(error)
    }
}

//get user recipes

export const getUserRecipies=async(req,res)=>{
    try{

        const userid=req.id;
        if(!userid){
            return res.status(400).json({
                message:"user not authorized"
                ,success:false
            })
        }

        const recipes=await Recipe.find({created_by:userid})
if(!recipes){
    return res.status(400).json({
        message:"recipes not found"
        ,success:false
    })
}


        return res.status(200).json({
            message:"user recipies are"
            ,success:true
            ,recipes
        })
    }catch(error){
        console.log(error)
    }
}




//detete

export const deleteRecipe=async(req,res)=>{
    try{

        const userid=req.id;
        if(!userid){
            return res.status(400).json({
                message:"user not authorized"
                ,success:false
            })
        }
        const recipeid=req.params.id;




        const recipe=await Recipe.findByIdAndDelete(recipeid)
if(!recipe){
    return res.status(400).json({
        message:"recipes not found"
        ,success:false
    })
}


    return res.status(200).json({
        message:"recipes deleted"
        ,success:true
    })



       
    }catch(error){
        console.log(error)
    }
}


//publish

export const publishRecipe=async(req,res)=>{
    try{

        const {publish}=req.body
        if (publish === undefined) {
            return res.status(400).json({ message: 'Publish status is required', success: false });
        }
       
       
        const useridd=req.id;
        if(!useridd){
            return res.status(400).json({
                message:"user not authorized"
                ,success:false
            })
        }
        // const =req.params.id;
        const recipeidd = req.params.id; // Ensure this is correct

       
        const data={publish}
        const recipe=await Recipe.findByIdAndUpdate(req.params.id,data)
if(!recipe){
    return res.status(400).json({
        message:"recipes not found"
        ,success:false
    })
}
const recipiee=await Recipe.findById(recipeidd)

if(recipiee.publish==true){

    return res.status(200).json({
        message:" published"
        ,success:true,
        recipiee
    })
}
if(recipiee.publish==false){

    return res.status(200).json({
        message:" unpublished"
        ,success:true,
        recipiee
    })
}

       
    }catch(error){
        console.log(error)
    }
}


//GET_ALL_RECIPIES
export const getAllRecipies=async(req,res)=>{
    try{

        const userid=req.id;
        if(!userid){
            return res.status(400).json({
                message:"user not authorized"
                ,success:false
            })
        }

        const recipes=await Recipe.find({publish:true})
if(!recipes){
    return res.status(400).json({
        message:"recipes not found"
        ,success:false
    })
}



        return res.status(200).json({
            message:"user recipies are"
            ,success:true
            ,recipes
        
        })  





    }catch(error){
        console.log(error)
    }
}




// get recipe detail
export const get_recipe_detail=async(req,res)=>{
    try{
const userid=req.id;

if(!userid){
    return res.status(400).json({
        message:"user not authorized",
        success:false
    })

}


const recipeid=req.params.id;

        if (!recipeid) {
            return res.status(400).json({
                message: "recipe not exist",
                success: false
            })

        }

        const recipe=await Recipe.findById(req.params.id)

        return res.status(200).json({
            message: "recipe found",
            success: true,
        recipe
        })

    }catch(error){
        console.log(error)
    }
}




export const saved_recipe = async (req, res) => {
    try {
        const userid = req.id;
const {saved,recipeid}=req.body;
console.log("save",saved)
// if(!saved){
//     return res.status(400).json({
//         message: "failed to save",
//         success: false
//     }); 
// 
        if (!userid) {
            return res.status(400).json({
                message: "user not authorized",
                success: false
            });
        }

        // const recipeid = req.params.id;
const {data}=saved
        // Find the recipe by ID
        const recipe = await Recipe.findByIdAndUpdate(recipeid,data);
        if (!recipe) {
            return res.status(400).json({
                message: "recipe not found",
                success: false
            });
        }

        // Check if the recipe is already saved by the user
        const user = await User.findById(userid);
        if (user.saved_recipes.includes(recipeid)) {
            return res.status(400).json({
                message: "Recipe already saved",
                success: false
            });
        }


        await User.findByIdAndUpdate(userid, { $push: { saved_recipes: recipeid } }, { new: true });

        const userdetail = await User.findById(userid).populate({ path: "saved_recipes" });

        return res.status(200).json({
            message: "Recipe saved successfully",
            success: true,
            userdetail,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred",
            success: false,
            error: error.message
        });
    }
};



//USER_SAVES_RECIPES
export const user_save_recipe=async(req,res)=>{
    try{

        const user = await User.findById(req.id).populate({ path:"saved_recipes"})
        

        return res.status(200).json({
            message: "user saved recipes are",
            success: true,
            user
        });
    }catch(error){
        console.log(error)
    }
}