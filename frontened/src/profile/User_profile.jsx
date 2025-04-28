import Navbar from '@/Navbar'
import { Bell, Edit, Edit2, Loader2, Mails, UserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Label } from '@radix-ui/react-label'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useUpdateMutation } from '@/apis/user_api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Mobile_view_navbar from '@/Mobile_view_navbar'
const User_profile = () => {
 const [update,{data,isSuccess,isLoading,error}]= useUpdateMutation()
  const {user}=useSelector(store=>store.user)
  const {isauthentication}=useSelector(store=>store.user)
  // console.log(isauthentication)
  // console.log(data)
  
const navigate=useNavigate()
const [open, setopen] = useState(false)
  const [input, setinput] = useState({
    fullname:"",
    email:"",
    profilephoto:""
  })
  const formdata=new FormData()
  formdata.append('fullname',input.fullname)
  formdata.append('email',input.email)
  if (input.profilephoto) {
    formdata.append('profilephoto', input.profilephoto); // Append the file
}  const update_profile=(e)=>{
    e.preventDefault()

    update(formdata)
    }


    useEffect(() => {
      if(data||isSuccess){
        toast.success(data.message)
        // navigate("/dashboard")
        setopen(false)
      }
    }, [data,isSuccess])

    useEffect(() => {
      if(error){
        toast.error(error.data.message)
      }
    }, [error])
    

   
  return (
    <div className=" flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 md:ml-[340px] overflow-y-hidden overflow-x-hidden bg-white">
        <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[10px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
          <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
           View Profile
          </h1 >

          <div className="flex item-center " >
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className="z-50  md:hidden">
              <Mobile_view_navbar />
            </div>
          </div>
        </div>
  
        <div className=' flex justify-center items-center h-screen mt-10'>
            <div className= ' relative bg-white md:w-[50%] w-[90%] md:h-[40%] h-[35%] drop-shadow-lg rounded-2xl drop-shadow-[#00000040] '>

           <div className='  justify-end p-5 flex'>
           <div className='absolute top-[-55px] left-7'>
                <Avatar className={"w-32 h-32"}>  
  <AvatarImage className={"object-cover"} src={user?.file?user.file:"https://github.com/shadcn.png" }/>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
                </div>


                <div className=' '>
              <AlertDialog open={open} onOpenChange={setopen}>
  <AlertDialogTrigger>              <Edit size={30} className='text-[#FF9B05] font-bold'/>
  </AlertDialogTrigger>
  <AlertDialogContent  className={" w-96 p-3 sm:w-full   ml-0"} >
    <AlertDialogHeader>
      <AlertDialogTitle className={"text-2xl font-bold text-[#FF9B05] text-start sm:text-center "}>Edit your profile </AlertDialogTitle>
      
    </AlertDialogHeader>
   <form action="">
   <div className='flex flex-col gap-1 md:gap-3 w-[100%] '>
   <div className='flex flex-col gap-1 w-[80%] md:w-full'>
        <Label className='font-medium'>Name</Label>
        <input name="fullname" value={input.fullname} onChange={(e)=>setinput({...input,fullname:e.target.value})} type="text" placeholder={user?.fullname} className='border-2 p-2 rounded-lg w-full' />
    </div>
                        <div className='flex flex-col gap-1 w-[80%] md:w-full'>
        <Label  className='font-medium'>Email</Label>
        <input  name="email" value={input.email} onChange={(e)=>setinput({...input,email:e.target.value})} type="email"  placeholder={user?.email} className='border-2 p-2  rounded-lg'/>
    </div>
                        <div className='flex flex-col gap-1 w-[80%] md:w-full'>
        <Label  className='font-medium'>File</Label>
        <input 
    name="profilephoto" 
    onChange={(e) => setinput({ ...input, profilephoto: e.target.files[0] })} 
    type="file" 
    className='border-2 p-2 rounded-lg' 
/>
    </div>

   
                        <div className='flex gap-3 justify-end w-[80%] md:w-full'>
     <AlertDialogCancel  className={"bg-[white] border-[#FF9B05] text-[#FF9B05] font-semibold hover:bg-[white] hover:text-[#FF9B05]"}>Cancel</AlertDialogCancel>
      <button type="submit" onClick={update_profile} className={" px-7 rounded-lg bg-[#FF9B05] text-white font-semibold hover:bg-[#FF9B05]"} disabled={isLoading}> {isLoading?<Loader2 className='animate-spin'/>:"Update"}</button>
   </div>
     </div>
   </form>
   
  </AlertDialogContent>
</AlertDialog>




                </div>
           </div>
<div className='p-5 flex flex-col gap-5 mt-7'>
<h1 className='  flex gap-5 items-center'><UserRound/>  {user?.fullname}</h1>
<h1 className='flex gap-5 items-center'><Mails /> {user?.email}</h1>
</div>

            </div>
        </div>



        </div>
    </div>
  )
}

export default User_profile
