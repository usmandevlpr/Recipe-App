import { useGetrecipedetailQuery, useRecipedetailMutation } from '@/apis/recipe_api'
import Mobile_view_navbar from '@/Mobile_view_navbar'
import Navbar from '@/Navbar'
import { Badge, Bell, Bookmark, Clock } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'


const Recipe_detail = () => {
  const params = useParams()
  const id = params.id
  const { data, isSuccess, error, isLoading } = useGetrecipedetailQuery(id)
  const { data: d, isSuccess: i, error: e, isLoading: l } = useRecipedetailMutation(id)


  let datee = `"${data?.recipe?.created_at}"`
  // console.log(datee)
  let dateee=datee.split('T')[0].split('"')[1]
  const year =new Date(dateee).getFullYear()
  const month =new Date(dateee).getMonth()
  const day =new Date(dateee).getDay()
const dateeee=`${day}-${month}-${year}`




  let creationTimeStr = data?.recipe?.created_at;
  let creationTime = new Date(creationTimeStr);
  let currentTime = new Date()


  let timeDifferenceMS = currentTime - creationTime;

  let timeDifferenceHours = Math.floor(timeDifferenceMS / (1000 * 60 * 60));

  let timeDifferenceDays = Math.floor(timeDifferenceMS / (1000 * 60 * 60 * 24));


  let timeDifferenceMonths = Math.floor(timeDifferenceDays / 30);

  let timeDifferenceYears = Math.floor(timeDifferenceDays / 365);



  return (
    <div className=" dasboardd flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 md:ml-[340px] overflow-y-scroll overflow-x-hidden bg-white">
        <div
          className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[7px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center"
        >
          <h1 className="text-[22px] font-semibold">View Recipes</h1>

          <div className='flex item-center '>
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className='z-50  md:hidden'>

              <Mobile_view_navbar />
            </div>
          </div>
        </div>
        <div className="  h-[32%] mt-[47px]  ">
          <div className="relative h-full">
            <img
              className="h-full object-cover   w-full"
              src={data?.
                recipe?.recipePhoto ? data.
                  recipe.recipePhoto : "N/A"}
              alt=""
            />

            <Bookmark
              className="absolute bottom-4 right-6 bg-white p-[8px] text-black rounded-[8px]  hover:scale-110"
              size={38}
            />
          </div>
        </div>

        <div className=' px-4 mt-1 md:px-8'>
          <div className=' py-1 '>
            <h1 className='text-xl font-bold '>{data?.
              recipe?.name ? data.
                recipe.name : "---"}</h1>
            <div className='flex gap-3 text-[12px] items-center'>
              <h2 className='text-[#908F8F]'>{dateeee}</h2>
              <Clock size={15} fill='#908F8F' className='text-[white]' />
              <h3 className='text-[#908F8F]'>{data?.
                recipe?.created_at ? timeDifferenceDays < 30 ? (timeDifferenceHours > 24 ? timeDifferenceDays + " days ago" : timeDifferenceHours + " hours") : timeDifferenceMonths + " months ago" : "L"}</h3>
            </div>
          </div>

          <div className='flex w-full md:flex-row flex-col  md:gap-15'>
            <div className='md:w-[65%] '>
              <h1 className='font-semibold mt-1 text-xl'>How-to</h1>
              <div className='border-2 px-3 py-2 mb-5 rounded-md mt-1 text-justify line-clamp-none '>
                {data?.recipe?.instruction ? data.recipe.instruction : "NO found"
                }    </div>
            </div>
            <div className='md:w-[35%] '>
              <h1 className='font-semibold text-xl mt-1'>Ingredients</h1>
              <div className='border-2 px-3 py-2 rounded-md mb-4 mt-1'>
                {data?.recipe?.incredients
                  .map((e, i) =>

                    <div>
                      <div className='mb-5 flex justify-between text-[15px]'>
                        <h1>{e.incredientname}</h1>
                        <h2 className='font-bold'> {e.quantity}</h2>
                      </div>
                      <hr className='h-[2px] my-2 bg-gray-200' />
                    </div>
                  )}


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Recipe_detail
