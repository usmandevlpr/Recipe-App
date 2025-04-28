import { userApi } from "@/apis/user_api";
import { combineReducers } from "@reduxjs/toolkit";
import authreducer from "./user_slice";
import { recipeApi } from "@/apis/recipe_api";

// import { userApi } from "../apis/user_api.js";
// userApi

const rootreducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [recipeApi.reducerPath]: recipeApi.reducer,
  user: authreducer,
});

export default rootreducer;
