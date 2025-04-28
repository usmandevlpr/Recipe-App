import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CirclePlus,
  Compass,
  DiamondPlus,
  Factory,
  FolderOpen,
  House,
  HouseIcon,
  LogOut,
  Menu,
  UserRound,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
} from "@/components/ui/alert-dialog";
import Mobile_view from "./Mobile_view_navbar";
import Mobile_view_navbar from "./Mobile_view_navbar";
import { toast } from "react-toastify";
import { useLogoutMutation } from "./apis/user_api";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [logout,{data,isLoading,isSuccess,error}]=useLogoutMutation()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();


  const { user } = useSelector((state) => state.user)


  const handlelogout = () => {
    // logout route
    logout()
    // Close the dialog
    setIsDialogOpen(false);
    // window.location.reload()
    
  };
  useEffect(() => {
    if(data||isSuccess){
      
      toast.success(data.message,{position:"bottom-left"})
      // Navigate to the login route
    navigate("/login");
   }
  }, [data,isSuccess])
  
  return (
    <div>
      <div className="bg-[#FF9B05] hidden md:block  w-[340px] h-screen fixed">
        <div className="flex justify-center items-center flex-col">
          <Avatar className={"bg-gray-500 w-24 h-24 mt-8"}>
            <AvatarImage className={"object-cover"} src={user?.file ? user.file : "https://github.com/shadcn.png"} alt="@shadcn" />
            
          </Avatar>
          <h1 className="text-white font-medium text-[28px] ">
            Recipe Sharing
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 mt-7 ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <House size={"23px"} />
              <h1 className="h-[46px] w-[183px]">Dashboard</h1>
            </div>
          </NavLink>
          <NavLink
            to="/recipes/discover"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <Compass className="" size={"23px"} />
              <h1 className="h-[46px] w-[183px]">Discover</h1>
            </div>
          </NavLink>
          <NavLink
            to="/myrecipes"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <Factory size={"23px"} />
              <h1 className="h-[46px] w-[183px]">My Recipes</h1>
            </div>
          </NavLink>
          <NavLink
            to="/recipe/create"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <CirclePlus size={"23px"} />
              <h1 className="h-[46px] w-[183px]">Create Recipe</h1>
            </div>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <UserRound size={"23px"} />
              <h1 className="h-[46px] w-[183px]">View Profile</h1>
            </div>
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            {" "}
            <div className="  font-semibold   text-[17px] w-[280px] flex gap-4 border-b-1 ">
              <FolderOpen size={"23px"} />
              <h1 className="h-[46px] w-[183px]">Categories </h1>
            </div>
          </NavLink>
         
            <div className="font-semibold text-[17px] w-[280px] flex gap-4">
              <LogOut className={isDialogOpen?"text-red-700":"text-white"}  size={"23px"} />
              <h1 className="h-[46px] w-[183px]">
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger>{isDialogOpen?<h1 className="text-red-700">Sign out</h1>:<h1 className="text-white">Sign out</h1>}</AlertDialogTrigger>
                <AlertDialogContent className={"w-85 h-48"}>
                  <AlertDialogHeader>
                    <AlertDialogTitle className={"text-3xl"}>Sign Out?</AlertDialogTitle>
                    <AlertDialogDescription className={"text-black"}>
                      Are you sure you want to sign out?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className={"flex mr-10"}>
                    <AlertDialogCancel
                      className={"text-[#FF9B05] font-bold border-[#FF9B05] hover:bg-white tracking-wide hover:text-[#FF9B05]"}
                      onClick={() => setIsDialogOpen(false)} // Close dialog on cancel
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className={"bg-[#FF9B05] font-bold hover:bg-[#FF9B05] tracking-wide"}
                      onClick={handlelogout} // Call handleLogout on confirm
                    >
                      Sign out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </h1>
            </div>
         
        </div>
      </div>
      {/* <div className="md:hidden w-full  z-50 bg-[#FF9B05] h-18">
        <Mobile_view_navbar />
      </div> */}
    </div>
  );
};

export default Navbar;
