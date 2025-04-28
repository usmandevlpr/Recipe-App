  import React, { useEffect, useState } from 'react'
  import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
    } from "@/components/ui/table"
  import { Switch } from '@/components/ui/switch'
  import { Edit, Edit2, Loader2, Trash2 } from 'lucide-react';
  import { useDeleteRecipeMutation, useGetUserRecipeQuery, usePublishrecipeMutation } from '@/apis/recipe_api.js';
  import { toast } from 'react-toastify';  
    

  const Uploaded_table = ({data}) => {
    const [switchh, setswitchh] = useState(true)

  const {data:ud,isLoading:ul,isSuccess:us,error:ue,refetch:urefetch}=useGetUserRecipeQuery()

      const [isChecked, setIsChecked] =useState(false);

        const {data:reci,isLoading:reciload,isSuccess:recisuc,error:recierr,refetch}=useGetUserRecipeQuery()
        const [publishrecipe,{data:pubdata,error:puberror,isSuccess:pubissuccess,isLoading:publoading}]=usePublishrecipeMutation()
      
      const[deleteRecipe,{data:recipedata,isSuccess,isLoading,error}]=useDeleteRecipeMutation();
      const deleterecipe=(recipeid)=>{
        
        deleteRecipe(recipeid)


      }
      useEffect(() => {
      if(recipedata||isSuccess){
        toast.success(recipedata.message)
        refetch()
      }
        
      }, [recipedata,isSuccess])
      useEffect(() => {
      if(error){
        toast.error(error.data.message)
      }
        
      }, [error])
      




      const handleswitch = (checke, id) => {
        console.log('ID before API call:', id); // Log the ID
        publishrecipe({ publish: checke,id } ); // Call the mutation
    };
      
      useEffect(() => {
        if(pubdata||pubissuccess){
          toast.success(pubdata.message)
          urefetch()
        }

      }, [pubdata,pubissuccess])

      useEffect(() => {
        if(error){
          toast.error(error.data.message)
        }
      }, [error])
      

    return (
      <div>
        <Table>
    <TableCaption className={"mt-5"}>A list of your recent recipies.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[200px]">Name</TableHead>
        <TableHead className={"text-center"}>Status</TableHead>
        <TableHead className={" w-20 text-center"}>Analytics</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>

  {data?.recipes?.map((dta,i)=>
  <>
     <> <TableRow key={i} className={"h-12"}>
     <TableCell className="font-medium">{dta?.name}</TableCell>
     <TableCell className={" text-center "}>{publoading?<Loader2 className='animate-spin'/>:       <Switch   checked={dta.publish}
                  onCheckedChange={(checke) => handleswitch(checke,dta?._id)} /> }  

     </TableCell>
     <TableCell className={" w-20 text-center"}><div className='flex gap-3'><Edit className='text-[#5B8002]' size={22}/> <button onClick={()=>deleterecipe(dta._id)}><Trash2  className='text-[#C94C02]' size={22}/></button></div>
       </TableCell>
       
   </TableRow></>
</>
  )}
    
    </TableBody>
  </Table>


      </div>
    )
  }

  export default Uploaded_table
