import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


let RECIPE_API = "http://localhost:3000/api/v1/recipe";



export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: RECIPE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createrecipe: builder.mutation({
      query: (formdata) => ({
        url: "/create",
        method: "POST",
        body: formdata

      }),
    }),
    getUserRecipe: builder.query({
      query: () => ({
        url: "/user",
        method: "GET"
      })
    }),
    deleteRecipe: builder.mutation({
      query: (recipeid) => ({
        url: `/delete/${recipeid}`,
        method: "DELETE"
      })
    }),
    publishrecipe: builder.mutation({
      query: ({ publish, id }) => {
        console.log('API URL:', `/publish/${id}`); // Log the URL
        return {
          url: `/publish/${id}`, // Ensure id is valid
          method: "PUT",
          body: { publish }
        };
      }
    }),
    getallrecipies: builder.query({
      query: () => ({
        url: "/allrecipies",
        method: "GET"
      })
    }),
    getrecipedetail:builder.query({

      query: (id) => {
        console.log(`${id}`)
        return{
          url: `/getrecipedetail/${id}`,
          method: "GET",
        }

      }
    }),
    recipedetail: builder.mutation({

      query: (id) => {
        console.log(`${id}`)
        return {
          url: `/getrecipedetail/${id}`,
          method: "GET",
        }

      }
    }),
    recipeSaved:builder.mutation({
      query: ({recipeid,saved})=>({
        url:`/savedrecipe/${recipeid}`,
        method:"PUT",
        body:{recipeid,saved}
      })
    }),
    userSaveRecipe:builder.query({
      query:()=>({
       url:"/usersaverecipe",
       method:'GET'
      })
    })
  })

})
export const { useCreaterecipeMutation, useGetUserRecipeQuery, useDeleteRecipeMutation, usePublishrecipeMutation, useGetallrecipiesQuery, useGetrecipedetailQuery, useRecipedetailMutation, useRecipeSavedMutation, useUserSaveRecipeQuery} = recipeApi