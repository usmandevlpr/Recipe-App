import Navbar from "@/Navbar";
import { Bell, CircleCheck, Clock, Heart, MessageCircleMore, Redo, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Disc_rec_leftcard from "@/recipe/Disc_rec_leftcard";
import Disc_rec_rightcard from "@/recipe/Disc_rec_rightcard";
import Mobile_view_navbar from "@/Mobile_view_navbar";
import { useGetallrecipiesQuery, useGetUserRecipeQuery } from "@/apis/recipe_api";
import { toast } from "react-toastify";

const Discover = () => {


  const [activeButton, setActiveButton] = useState("");
  const [activeButto, setActiveButto] = useState("");
  const [activeButt, setActiveButt] = useState("");
  const [activeBut, setActiveBut] = useState("");


  const { data, isLoading, isSuccess, refetch } = useGetallrecipiesQuery()

  const { data: userdata, isSuccess: usersuccess } = useGetUserRecipeQuery()
  const [input, setinput] = useState("")
  const [filterdata, setfilterdata] = useState()

  useEffect(() => {
    if (data, isSuccess) {
      refetch()
      setfilterdata(data.recipes)
    }
  }, [data, isSuccess])


  const convertTimeToMinutes = (timeString) => {
    const timeParts = timeString.split(' ');
    let totalMinutes = 0;

    for (let i = 0; i < timeParts.length; i += 2) {
      const value = parseInt(timeParts[i]); // Convert string to integer
      const unit = timeParts[i + 1];

      if (unit.startsWith('hour')) {
        totalMinutes += value * 60; // Convert hours to minutes
      } else if (unit.startsWith('min')) {
        totalMinutes += value; // Add minutes directly
      }
    }

    return totalMinutes;

  }


  const getlatestrecipes=(time)=>{
    
    const createdtime=new Date(time)
    const nowdate=new Date()
    const timediff = nowdate - createdtime
 const timedifference= Math.floor(timediff /(1000*60*60*24));
    return timedifference;
  }
  getlatestrecipes("2025-04-10T16:22:38.559+00:00")

  const Filterdata = (dta) => {

    setActiveButton(dta);
    setActiveButto(dta);
    setActiveButt(dta);
    setActiveBut(dta);
    console.log(dta)

///////LATEST  
    
if(dta=="latest"){

  const filterrecipe = data?.recipes.filter((d) => {
    const filtdata = getlatestrecipes(d.created_at);
    return filtdata<1;
    
  }) 
  if (filterrecipe.length==0){

    setfilterdata("No Recipe Created Today")
  }else if(filterrecipe.length>0){
    setfilterdata(filterrecipe)


  }
 }
  
  
  
  //////EASY
  if (dta === "easy") {
    const filterrecwip = data?.recipes?.filter((d) => {
        const recipeTimeInMinutes = convertTimeToMinutes(d.recipeTime);
        return recipeTimeInMinutes < 30;
      });
      setfilterdata(filterrecwip)
    }
    
    ////////popular
  

    if (dta == "popular") {
      const popularrecipes = data?.recipes?.filter((d) =>
        d.name.toLowerCase().startsWith("b") ||
        d.name.toLowerCase().startsWith("s") ||
        d.name.toLowerCase().startsWith("w") ||

        d.name.toLowerCase().startsWith("q") ||

        d.name.toLowerCase().startsWith("p") ||

        d.name.toLowerCase().startsWith("c") ||


        d.name.toLowerCase().startsWith("m")
      )
      setfilterdata(popularrecipes)

    }


    ////////popular


    if (dta == "trending") {
      const popularrecips = data?.recipes?.filter((d) =>
        d.name.toLowerCase().startsWith("b") ||
        d.name.toLowerCase().startsWith("s") ||
        d.name.toLowerCase().startsWith("z") ||

        d.name.toLowerCase().startsWith("q") ||

        d.name.toLowerCase().startsWith("o") ||

        d.name.toLowerCase().startsWith("m") ||


        d.name.toLowerCase().startsWith("n")
      )
      setfilterdata(popularrecips)

    }


  }


    
  








  const submitinput = () => {
    console.log("input", input)
    const filterrecipe = data?.recipes?.filter((d) => (d.name.toLowerCase().startsWith(input.toLowerCase())))
    if (filterrecipe.length === 0) {
      setfilterdata(`NO SUCH RECIPE FOUND ON  "${input}"`);
    } else {
      setfilterdata(filterrecipe);
    }
    console.log("filterrecipe", filterrecipe);
  }


  return (
    <div className="dasboardd flex flex-row  w-screen h-screen bg-white ">

      <Navbar />


      <div className="dasboardd flex-1 w-full md:ml-[340px] overflow-y-scroll overflow-x-hidden bg-[white]">


        <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[10px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
          <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
            Discover Recipes Here !
          </h1 >

          <div className="flex item-center " >
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className="z-50  md:hidden">
              <Mobile_view_navbar />
            </div>
          </div>
        </div>


        <div className="p-3">
          <div className="p-2 w-full flex gap-3 mt-[47px] ">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitinput(); // Call submitinput when Enter is pressed
                }
              }}
              value={input}
              onChange={(e) => setinput(e.target.value)}
              className="w-[88%] outline-none border-2 rounded-lg   p-2 "
              type="text"
              placeholder="What are you cooking today?"
            />
            <button
              onClick={submitinput}
              type="submit"
              className="bg-[#FF9B05]  font-bold p-2 w-[%] rounded-lg"
            >
              Search
            </button>
          </div>

          <div className="p-2 md:px-20 flex text-center items-center px-2 gap-2 justify-around w-full h-full ">
            <div className="lg:w-48 lg:h-44 w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-40">
              <img
                className="h-full  w-full object-cover border-10 border-[#FFECA5] rounded-sm"
                src="/discover3.png"
                alt=""
              />
            </div>
            <div className="lg:w-48 lg:h-44 w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-40">
              <img
                className="h-full w-full object-cover border-10 border-[#FE9E9E] rounded-sm"
                src="/discover2.png"
                alt=""
              />
            </div>
            <div className="lg:w-48 lg:h-44 w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-40">
              <img
                className="h-full w-full object-cover border-10 border-[#AEC9FE] rounded-sm"
                src="/discover1.png"
                alt=""
              />

            </div>
          </div>

          <div className="w-full gap-3  flex flex-row md:gap-3 lg:gap-5 mt-2 justify-center  ">
            <button
              onClick={() => Filterdata("popular")}
              className={`border-2 text-[14px] md:text-[15px] lg:text-[17px]  px-2 rounded-xl ${activeButton === "popular" ? "bg-[#FF9B05]" : ""
                }`}
            >
              Popular
            </button>
            <button
              onClick={() => Filterdata("trending")}
              className={`border-2 text-[14px] md:text-[15px] lg:text-[17px]  px-2 rounded-xl ${activeButto === "trending" ? "bg-[#FF9B05]" : ""
                }`}
            >
              Trending
            </button>
            <button
              onClick={() => Filterdata("latest")}
              className={`border-2 text-[14px] md:text-[15px] lg:text-[17px]  px-2 rounded-xl ${activeButt === "latest" ? "bg-[#FF9B05]" : ""
                }`}
            >
              Latest
            </button>
            <button
              onClick={() => Filterdata("easy")}
              className={`border-2 text-[14px] md:text-[15px] lg:text-[17px]  px-2 rounded-xl ${activeBut === "easy" ? "bg-[#FF9B05]" : ""
                }`}
            >
              Easy and Simple
            </button>
          </div>

          <div className="  flex justify-center lg:flex-row flex-col gap-14 mt-6 bg-white">
            <div className=" grid grid-cols-2  gap-x-7 gap-y-3  lg:w-[40%]    justify-center">



              {Array.isArray(filterdata) ? (
                filterdata.map((dta, i) => <Disc_rec_leftcard key={i} dta={dta} />)
              ) : (
                <div className="text-center  whitespace-nowrap  relative left-[50%] top-[100%] md:top-[30px] font-bold w-full">{filterdata}</div> // Display the message if no recipes found
              )}



            </div>
            <hr className="md:hidded m-0 " />






            <div className="  lg:w-[43%] grid grid-cols-2 gap-x-6  gap-y-0   mb-0 h-full ">


              {

                userdata?.recipes ? userdata.recipes.map((dta, i) =>
                  <Disc_rec_rightcard key={i} dta={dta} />
                ) : "NO RECIPIES"

              }


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
