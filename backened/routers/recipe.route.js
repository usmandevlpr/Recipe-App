import express from "express";
import { createrecipe, deleteRecipe, get_recipe_detail, getAllRecipies, getUserRecipies, publishRecipe, saved_recipe, user_save_recipe } from "../controllers/recipe.controller.js";
import isauthentication from "../middleware/isauthentication.js";
import upload from "../middleware/multer.js";

const router = express.Router()
router.route("/create").post(isauthentication, upload.single('file'), createrecipe)
router.route("/user").get(isauthentication, getUserRecipies)
router.route("/delete/:id").delete(isauthentication, deleteRecipe)
router.route("/publish/:id").put(isauthentication, publishRecipe)
router.route("/allrecipies").get(isauthentication, getAllRecipies)
router.route("/getrecipedetail/:id").get(isauthentication, get_recipe_detail)
router.route("/savedrecipe/:id").put(isauthentication,saved_recipe)
router.route("/usersaverecipe").get(isauthentication, user_save_recipe)


// router.route("/create").post(isauthentication,createrecipe)
export default router