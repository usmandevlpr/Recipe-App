import Navbar from "@/Navbar";
import {
  Beef,
  Bell,
  Bookmark,
  Croissant,
  Dessert,
  Drumstick,
  HandPlatter,
  IceCreamCone,
  Loader2,
  Martini,
  Soup,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import React, { useEffect, useState } from "react";
import Dashboard_recipy_card from "@/cards/dashboard_recipy_card";
import Chines_food_recipe from "@/cards/Chines_food_card";
import Mobile_view_navbar from "@/Mobile_view_navbar";
import { useGetallrecipiesQuery, useRecipeSavedMutation, useUserSaveRecipeQuery } from "@/apis/recipe_api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { data, isLoading, isSuccess, refetch } = useGetallrecipiesQuery()
  useEffect(() => {
    if (data || isSuccess) {
      // console.log(data)
    }
  }, [data, isSuccess])


  let cre = "2025-04-19T16:43:52.522Z"
  const lastrecipe = data?.recipes[data.recipes.length - 1]
  const lastrecdate = lastrecipe?.created_at
  let creationdate = new Date(lastrecdate);
  let newdate = new Date()
  let timedifferencee = newdate - creationdate
  let time_diff_min = Math.floor(timedifferencee / (1000 * 60))
  let time_diff_hour = Math.floor(timedifferencee / (1000 * 60 * 60))
  let time_diff_days = Math.floor(timedifferencee / (1000 * 60 * 60 * 24))



  const ate = new Date();
  const dte = ate.toLocaleString(); // Get the current date and time as a locale string
  const date = dte.split(",")[0].replace(/\//g, "-"); // Replace slashes with dashes
  const [cards, setcards] = useState(true);
  const [card, setcard] = useState(true);



  const handlecards = () => {
    setcards((prev) => !prev);
  };
  const handlecard = () => {
    setcard((prev) => !prev);
  };
  const [saved, setsave] = useState(false)
  
  
  const recipeid = lastrecipe?._id;
  // console.log("recipeiddd",recipeid)
  const { data: saveddataa, isSuccess: saveisSuccesss, isLoading: saveisloadingg, error: saveErrorr }=useUserSaveRecipeQuery()
  const [issaved, setissaved] = useState()

  const [recipeSaved,{data:saveddata,isSuccess:saveisSuccess,isLoading:saveisloading,error:saveError}]=useRecipeSavedMutation()
  const handlesaved=()=>{
    setsave((prev)=>!prev)
    recipeSaved({recipeid, saved})
    

  }
  // console.log("SAVED",saveddataa?.user.saved_recipes)
  const filtersave= saveddataa?.user.saved_recipes?.filter((d)=> d._id.includes(recipeid))
  console.log(filtersave)
  const fil= Array.isArray(filtersave)?filtersave[0]:filtersave
  console.log("LL.",fil)
  console.log(":::",issaved)

  useEffect(() => {
      
      if (fil==recipeid){
        setissaved(true)
      }
     
  }, [])
    // console.log("LLkkk", saveddataa?.user.saved_recipes)

    useEffect(() => {
    if(saveddata|saveisSuccess){
      toast.success(saveddata.message)
    }
  }, [saveddata,saveisSuccess])


  
  useEffect(() => {
    if(saveError){
toast.error(saveError.data.message)
    }
  }, [saveError])
  
  
  return (
    <div className="dasboardd flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 w-full md:ml-[340px] overflow-y-scroll overflow-x-hidden bg-[#FF9B05]">
        <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[7px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
          <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
            {" "}
            Hello, Cindy! Welcome to Recipy Sharing
          </h1>

          <div className="flex item-center ">
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className="z-50  md:hidden">
              <Mobile_view_navbar />
            </div>
          </div>
        </div>

        <div className="  h-[28%]  ">
          <div className="relative h-full mt-[47px]">
            <img
              className="h-full object-cover   w-full"
              src={lastrecipe?.recipePhoto}
              alt=""
            />

            <Bookmark  onClick={handlesaved}

              className={`absolute bottom-4 right-6  p-[8px] text-black rounded-[8px]  hover:scale-110 ${issaved?"bg-amber-200":"bg-white"}`} 
              size={38}
            />
            <Badge className="absolute  top-3 left-5 text-[15px] font-medium text-white px-3  rounded-[30px]  bg-[#FF9B05]">
              Latest Recipe
            </Badge>
          </div>
        </div>

        <div
          style={{
            boxShadow: "0px -10px  20px rgba(0, 0, 0, 0.3)", // Adjust the values as needed
          }}
          className=" ml-[2px] px-5 text-[12px] font-semibold text-white flex justify-between items-center  flex-1 h-[9%]  rounded-[1px]  bg-[#FF9B05]"
        >
          <div>
            <h5>{lastrecipe?.name}</h5>

            <h6 className="flex gap-5 ">
              <p className="tracking-widest">{lastrecipe?.created_at.split('T')[0]}</p>
              <p>{time_diff_min < 60 ? time_diff_min + " min ago" : time_diff_hour <= 24 ? time_diff_hour + " hour ago" : time_diff_days + " days ago"}</p>
            </h6>
          </div>

          <Badge className=" text-[15px] font-semibold text-[#FF9B05] px-3  rounded-[8px]  bg-white">
            {lastrecipe?.category}
          </Badge>
        </div>
        <div className="bg-white h-[100%] ">
          <div className=" py-3 px-7  grid grid-cols-4 md:grid-cols-8 gap-2 bg-white rounded-t-xl">
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Croissant className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Breakfast</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <HandPlatter className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Lunch</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Drumstick className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Dinner</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Dessert className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Desert</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <IceCreamCone className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Junk</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Soup className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Chinese</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Martini className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Drink</h1>
            </div>
            <div className="flex flex-col gap-2   items-center justify-center ">
              <Beef className="text-[#FF9B05]" />
              <h1 className="text-black font-semibold">Meat</h1>
            </div>
          </div>

          <div className=" pb-2 mt-13 sm:mt-3 px-3 sm:px-5 flex flex-col">
            <div className="flex justify-between ">
              <h1 className="text-black font-bold  text-xl tracking-tighter sm:tracking-normal">
                Breakfast & Lunch Recipe
              </h1>
              <button onClick={handlecards}>
                <h2 className="text-[#FF9B05] font-bold ">
                  {cards ? "See More" : "See Less"}{" "}
                </h2>
              </button>
            </div>

            <div className=" grid sm:gap-x-6 justify-between mb-0 p-1 sm:py-1 sm:grid-cols-2 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 items-center ">



              {cards ? (
                data?.recipes?.filter((recipe) =>
                  recipe.category.toLowerCase().startsWith("breakfast") ||
                  recipe.category.toLowerCase().startsWith("dinner")
                ).length > 0 ? (
                  data.recipes.filter((recipe) =>
                    recipe.category.toLowerCase().startsWith("breakfast") ||
                    recipe.category.toLowerCase().startsWith("dinner")
                  ).slice(-4).map((recipe) => (
                    <Dashboard_recipy_card key={recipe.id} recipe={recipe} />
                  ))
                ) : (
                  <p className="  flex justify-center items-center md:mt-5 mt-7 w-[100%] mb-10"><h1>No Breakfast & Lunch Recipe Found</h1></p> // Display this if no recipes are found
                )
              ) : (
                data?.recipes?.filter((recipe) =>
                  recipe.category.toLowerCase().startsWith("breakfast") ||
                  recipe.category.toLowerCase().startsWith("dinner")
                ).length > 0 ? (
                  data.recipes.filter((recipe) =>
                    recipe.category.toLowerCase().startsWith("breakfast") ||
                    recipe.category.toLowerCase().startsWith("dinner")
                  ).slice(-7).map((recipe) => (
                    <Dashboard_recipy_card key={recipe.id} recipe={recipe} />
                  ))
                ) : (
                      <p className="  flex justify-center  items-center md:mt-5 mt-8 w-[100%] mb-10"><h1>No Breakfast & Lunch Recipe Found</h1></p> // Display this if no recipes are found
                )
              )}
            </div>
          </div>
          <hr />

          <div className=" pb-2 mt-3 px-3 sm:px-5 flex flex-col">
            <div className="flex justify-between ">
              <h1 className="text-black font-bold text-xl ">
                Chines Food Recipe
              </h1>
              <button onClick={handlecard}>
                <h2 className="text-[#FF9B05] font-bold ">
                  {card ? "See More" : "See Less"}{" "}
                </h2>
              </button>            </div>

            <div className=" grid sm:gap-x-6 justify-between mb-0 p-1 sm:py-1 sm:grid-cols-2 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 items-center ">
              {card ? (
                data?.recipes?.filter((recipe) =>
                  recipe.category.toLowerCase().startsWith("chinese") ||
                  recipe.category.toLowerCase().startsWith("korean")
                ).length > 0 ? (
                  data.recipes.filter((recipe) =>
                    recipe.category.toLowerCase().startsWith("chinese") ||
                    recipe.category.toLowerCase().startsWith("korean")
                  ).slice(-4).map((recipe) => (
                    <Chines_food_recipe key={recipe.id} recipe={recipe} />
                  ))
                ) : (
                  <p className="  flex justify-center items-center md:mt-5 mt-7 w-[100%] mb-10"><h1>No Chinese Recipe Found</h1></p> // Display this if no recipes are found
                )
              ) : (
                data?.recipes?.filter((recipe) =>
                  recipe.category.toLowerCase().startsWith("chinese") ||
                  recipe.category.toLowerCase().startsWith("korean")
                ).length > 0 ? (
                  data.recipes.filter((recipe) =>
                    recipe.category.toLowerCase().startsWith("chinese") ||
                    recipe.category.toLowerCase().startsWith("korean")
                  ).slice(-7).map((recipe) => (
                    <Chines_food_recipe key={recipe.id} recipe={recipe} />
                  ))
                ) : (
                      <p className="  flex justify-center items-center md:mt-5 mt-8 w-[100%] mb-10"><h1>No Chinese Recipe Found</h1></p> // Display this if no recipes are found
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
