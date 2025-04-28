import { useRegisteruserMutation } from "@/apis/user_api";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
const navigate=useNavigate()
const {user}=useSelector((state)=>state.user)
  const { isauthentication }=useSelector((state)=>state.user)
useEffect(() => {
  

  user ? <>{navigate("/dashboard")}</> :<>{navigate("/register")}</>
}, [])

  
  const [input, setinput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const showPassword=true
  const [Registeruser , {data,isLoading , error ,isSuccess}]=useRegisteruserMutation()
// console.log(data)
  const handlesubmit = (e) => {
e.preventDefault()
    // console.log(input)
    Registeruser(input)

  };
  useEffect(() => {

    if(data || isSuccess){
      toast.success(data.message)
navigate("/login")
    }
  }, [data,isSuccess])
  useEffect(() => {
    if(error){
      toast.error(error.data.message)
    }
  }, [error])
  
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url(Signup_bg.jpeg)] bg-cover w-full h-full bg-no-repeat bg-center  "></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className=" relative inset-0 w-[100%] h-[100%] flex  flex-col items-center justify-center  gap-5">
        <h1 className=" text-bold text-3xl font-bold text-white">
          Register your account
        </h1>
      
          <form action="" onSubmit={handlesubmit} className="  text-black  w-[100%]  flex-col flex items-center justify-center ">
          <div className="mb-4 bg-white px-5 sm:px-10 py-7 rounded-2xl flex flex-col gap-2 w-[89%] md:w-[45%]">
          <div className="flex flex-col gap-0">
                <label className="font-medium ">Full Name</label>
                <input className=" px-2 border border-black h-12 rounded-[10px]"
                  type="text"
                  value={input.fullname}
                  onChange={(e) =>
                    setinput({ ...input, fullname: e.target.value })
                  }

                  placeholder="Enter you full name"
                />
              </div>
              <div className="flex flex-col ">
                <label  className="font-medium ">Email</label>
                <input
                className="border px-2  border-black h-12 rounded-[10px]"
                  type="email"
                    placeholder="Enter you email"
                  value={input.email}
                  onChange={(e) =>
                    setinput({ ...input, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-0">
                <label  className="font-medium ">Password</label>
                <div className="relative">
            <input
                placeholder="Password"
                className="border px-2 border-black h-12 rounded-[10px] w-full pr-10" // Added pr-10 for padding-right
                type= 'password'
                value={input.password}
                onChange={(e) => setinput({ ...input, password: e.target.value })}
            />
            <button
                type="button"
                // onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2" // Center the icon vertically
            >
                {showPassword ? <EyeOff /> : <Eye />}
            </button>
        </div>

              </div>
              <div className="text-center flex items-center justify-center">
                <h1 className="flex  flex-col items-center justify-center font-medium">
                  By registering, you agree with our <br />{" "}
                  <span className="text-[#FF9B05] font-medium">
                    Terms & Conditions <span className="text-black">and</span> Privacy Policy
                  </span>
                </h1>
              </div>
            </div>
            <div className=" bg-white p-5 flex flex-col items-center justify-center rounded-t-2xl gap-3 w-[93%] md:w-[48%]">
              <div className="w-full flex items-center justify-center">
                <button type="submit"
                  className="p-2 w-[60%] rounded-3xl bg-[#FF9B05] text-center text-white font-bold "
                >
                  Register
                </button>
              </div>
              <h1 className=" gap-3 flex w-full items-center justify-center">
                <hr className="w-[20%] h-[1px] bg-gray-300" /> Or <hr className="w-[20%] h-[1px] bg-gray-300" />
              </h1>
              <h2 className="font-medium">
                Already have an account?{" "}
               <Link to="/login"><span className="text-[#FF9B05] font-medium">Login</span></Link> 
              </h2>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Signup;
