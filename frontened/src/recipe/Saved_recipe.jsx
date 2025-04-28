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
import { Edit, Loader2, Trash2 } from 'lucide-react'
import { usePublishrecipeMutation, useUserSaveRecipeQuery } from '@/apis/recipe_api'
import { toast } from 'react-toastify'

const Saved_recipe = () => {
  // console.log("LLLLLL", savedata)

  const [isChecked, setIsChecked] = useState(false);
  const [switchh, setswitchh] = useState(true)
 
  
  
  const [publishrecipe, { data: pubdata, error: puberror, isSuccess: pubissuccess, isLoading: publoading }] = usePublishrecipeMutation()
  const { data:savedata, isLoading:saveisLoading, isSuccess:saveisSuccess, error:saveError,refetch:saverefetch } = useUserSaveRecipeQuery();
  const handleswitch = (checke, id) => {
    console.log('ID before API call:', id); // Log the ID
    publishrecipe({ publish: checke, id }); // Call the mutation
  };
  useEffect(() => {
    saverefetch()


  }, [])
  useEffect(() => {
    console.log(pubdata)
    if (pubdata || pubissuccess) {
      saverefetch()
      toast.success(pubdata.message)
      // urefetch()
    }

  }, [pubdata, pubissuccess])

  // useEffect(() => {
  //   if (puberror) {
  //     toast.error(puberror.data.message)
  //   }
  // }, [puberror])

  return (
    <div>
      <Table>
        <TableCaption className={"mt-5"}>A list of your saved recipies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className={"text-center"}>Status</TableHead>
            <TableHead className={" w-20 text-center"}>Analytics</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {savedata?.user?.saved_recipes.map((dta, index) =>

            <TableRow key={index} className={"h-12"}>
              <TableCell className="font-medium">{dta.name}</TableCell>
              <TableCell className={" text-center "}>       {publoading ? <Loader2 className='animate-spin' /> : <Switch checked={dta.publish}
                onCheckedChange={(checke) => handleswitch(checke, dta?._id)} />}
              </TableCell>
              <TableCell className={" w-20 text-center"}><div className='flex gap-3'><Edit className='text-[#5B8002]' size={22} /> <Trash2 className='text-[#C94C02]' size={22} /></div>

              </TableCell>
            </TableRow>
          )}

        </TableBody>
      </Table>


    </div>
  )
}

export default Saved_recipe
