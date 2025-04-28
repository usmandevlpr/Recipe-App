import React from 'react'

const Chines_food_recipe = ({ recipe }) => {
  return (
      <div  className='flex items-center h-[80%]  flex-col gap-1   w-full  '>
      <img className='w-full h-[86%]  rounded-sm object-cover ' src={recipe?.recipePhoto} alt="" />
      <h1 className='text-[16px] font-semibold'>{recipe?.name}</h1>
      </div>

      
  )
}

export default Chines_food_recipe
