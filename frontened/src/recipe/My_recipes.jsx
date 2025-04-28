import Navbar from "@/Navbar";
import { Bell } from "lucide-react";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Uploaded_table from "./Uploaded_table";
import Saved_recipe from "./Saved_recipe";
import { useGetUserRecipeQuery, useUserSaveRecipeQuery } from "@/apis/recipe_api";
import Mobile_view_navbar from "@/Mobile_view_navbar";

const My_recipes = () => {

  const { data, isLoading, isSuccess, error } = useGetUserRecipeQuery()
  // const { data:savedata, isLoading:saveisLoading, isSuccess:saveisSuccess, error:saveError } = useUserSaveRecipeQuery()
  // console.log("KKK",savedata)


  
  // console.log("datamyrec",data)
  return (
    <div className=" flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 md:ml-[340px] overflow-y-scroll overflow-x-hidden bg-white">
        <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[10px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
          <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
            My Recipes
          </h1 >

          <div className="flex item-center " >
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className="z-50  md:hidden">
              <Mobile_view_navbar />
            </div>
          </div>
        </div>




        <div>
          <div className=" px-3 md:px-6 mt-[47px]">
            
            <Tabs
              defaultValue="account"
              className="w-full rounded-[0] shadow-none border-0  py-2"
            >
              <TabsList className="w-full rounded-[0] h-12 bg-white shadow-none">
                <TabsTrigger
                  value="account"
                  className="text-xl font-bold border-b-2 border-transparent text-[#908F8F] data-[state=active]:bg-[#FF9B05] data-[state=active]:text-white"
                >
                  Uploaded
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="text-xl font-bold border-b-2 border-transparent text-[#908F8F] data-[state=active]:bg-[#FF9B05] data-[state=active]:text-white"
                >
                  Saved Recipes
                </TabsTrigger>
              </TabsList>

              <div className="p-2 w-full flex md:gap-3  gap-2">
                <input
                  className="w-[88%] outline-none border rounded-lg   p-3 "
                  type="text"
                  placeholder="What are you cooking today?"
                />
                <button className="bg-[#FF9B05] r font-bold p-3 w-[%] rounded-lg">
                  Search
                </button>
              </div>
              <div className=" md:w-[50%] w-[100%]  ">
                <div className="md:w-[100%]">
                  <TabsContent value="account" className={"w-full "}>
                    <Uploaded_table data={data} />

                  </TabsContent>
                </div>
                <div className="w-[100%] ml-[0%] ">

                  <TabsContent value="password" className={"  w-full "}>
                    <Saved_recipe  />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_recipes;
