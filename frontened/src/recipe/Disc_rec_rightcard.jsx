import { CircleCheck, Clock, Heart, MessageCircleMore, Send } from 'lucide-react'
import React from 'react'

const Disc_rec_rightcard = ({ dta }) => {
  return (



    <div className="h-56  w-[100%] rounded-md flex flex-col gap-1  mb-10">
      <img
        className="rounded-t-lg h-[55%] w-full object-cover"
        src={dta.recipePhoto}
        alt=""
      />



      <div className="flex flex-col gap-1">

        <h1 className="font-semibold text-xl mt-">{dta.name}</h1>

        <div className=" text-[13px] flex gap- mt-1 flex-col">
          <h1 className="flex gap-2   items-center ">

            <Clock fill="#666666" className="text-white" size={18} />
            <p>322 Reviews</p>
          </h1>
          <h1 className="flex gap-2  items-center ">

            <CircleCheck fill="#519BE0" className="text-white" size={19} />
            <p className=' text-blue-600 underline'> You</p>

          </h1>

        </div>
      </div>


    </div>
  )
}

export default Disc_rec_rightcard
