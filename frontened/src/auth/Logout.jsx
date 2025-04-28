import React, { useState } from "react";
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
import Navbar from "@/Navbar";
const Logout = () => {
  const [isopen, setisopen] = useState(true)

  return (
    <div className="dasboard flex flex-row  w-screen h-screen bg-white ">
      <Navbar />

      <div className="dasboardd flex-1 ml-[340px] overflow-y-scroll overflow-x-hidden ">
        <AlertDialog open={isopen} onOpenChange={setisopen}>
          <AlertDialogTrigger/>
          <AlertDialogContent className={"w-85 h-48"}>
            <AlertDialogHeader>
              <AlertDialogTitle className={"text-3xl"}>
                Sign Out?
              </AlertDialogTitle>
              <AlertDialogDescription className={"text-black"}>
                Are you sure you want to sign out?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className={"flex mr-10"}>
              <AlertDialogCancel
                className={
                  "text-[#FF9B05] font-bold border-[#FF9B05] hover:bg-white tracking-wide hover:text-[#FF9B05]"
                }
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className={
                  "bg-[#FF9B05] font-bold hover:bg-[#FF9B05] tracking-wide"
                }
              >
                Sign out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Logout;
