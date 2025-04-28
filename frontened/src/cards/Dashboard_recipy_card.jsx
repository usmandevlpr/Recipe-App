import React from 'react'

const Dashboard_recipy_card = ({ recipe }) => {
  return (
    
      <div  className=' flex items-center h-[89%]  flex-col gap-1  mb-0 w-full '>
      <img className=' w-full h-[80%]  rounded-sm object-cover   ' src={recipe?.recipePhoto}/>
        <h1  className='text-[16px] font-semibold mb-0'>{recipe?.name}</h1>
      </div>
  )
}

export default Dashboard_recipy_card
