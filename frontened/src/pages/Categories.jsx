import Mobile_view_navbar from '@/Mobile_view_navbar'
import Navbar from '@/Navbar'
import { Bell } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <div className="dasboard flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 md:ml-[340px] overflow-y-scroll overflow-x-hidden bg-[#fdfdfd]">
      <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[10px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
                      <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
                 Category
                      </h1 >
            
                      <div className="flex item-center " >
                        <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
                        <div className="z-50  md:hidden">
                          <Mobile_view_navbar />
                        </div>
                      </div>
                    </div>
    </div>
    </div>
  )
}

export default Categories
