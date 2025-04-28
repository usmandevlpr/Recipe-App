// import { useGetallrecipiesQuery } from '@/apis/recipe_api'
import { CircleCheck, Clock, Heart, MessageCircleMore, Send } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Disc_rec_leftcard = ({ dta }) => {
  const navigate=useNavigate()


  
  return (
    <div className="h-80  w-[100%] rounded-md flex flex-col gap-1  mb-5">
      <img
        className="rounded-t-lg h-[29%] w-[100%] object-cover "
        src={dta.recipePhoto}
        alt=""
      />
      <div className="flex justify-around">
        <div className="text-center flex flex-col justify-center items-center">
          <Heart className="text-[red]" fill='red ' />
          <h2>129K</h2>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <MessageCircleMore className="text-[#666666]" />
          <h2>9k</h2>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <Send className="text-[#666666]" />
          <h2>39</h2>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-xl mt-">{dta.name}</h1>
        <p className="line-clamp-2  overflow-ellipsis text-[13px] font-light">{dta.instruction}</p>
        <div className=" text-[13px] flex gap- mt-1 flex-col">
          <h1 className="flex gap-2   items-center ">

            <Clock fill="#666666" className="text-white" size={18} />
            <p>{dta.recipeTime}</p>
          </h1>
          <h1 className="flex gap-2  items-center ">

            <CircleCheck fill="#519BE0" className="text-white" size={19} />
            <p>{dta.
              category
            }</p>

          </h1>

        </div>
      </div>


      <div className=' mt-3'>
          <button onClick={() => navigate(`/recipe/detail/${dta._id}`)} className='font-bold   text-[#FF9B05] border-2 border-[#FF9B05] w-full rounded-2xl p-1 '>
            See Detail
          </button>
      </div>
    </div>
  )
}

export default Disc_rec_leftcard
