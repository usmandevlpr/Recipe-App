// import React, { useState } from "react";
// import Navbar from "@/Navbar"; // Adjust the import path as necessary
// import { Bell } from "lucide-react";

// const Createrecipe = () => {
//   const [input, setInput] = useState({
//     name: "",
//     category: "",
//     instruction: "",
//     recipeTime: "",
//     recipePhoto: null,
//     ingredients: [{ name: "", quantity: "" }], // Initialize with one ingredient
//   });

//   const handleCreate = () => {
//     const formData = new FormData();
//     formData.append("name", input.name);
//     formData.append("category", input.category);
//     formData.append("instruction", input.instruction);
//     formData.append("recipeTime", input.recipeTime);
//     if (input.recipePhoto) {
//       formData.append("recipePhoto", input.recipePhoto);
//     }
//     input.ingredients.forEach((ingredient) => {
//       formData.append("ingredients", JSON.stringify(ingredient));
//     });

//     // Log the form data for debugging
//     console.log("Form Data:", formData);
//     // Here you would typically send the formData to your API
//   };

//   const handleIngredientChange = (index, field, value) => {
//     const updatedIngredients = input.ingredients.map((ingredient, i) =>
//       i === index ? { ...ingredient, [field]: value } : ingredient
//     );
//     setInput({ ...input, ingredients: updatedIngredients });
//   };


//   const handleAddIngredient = () => {
//     setInput((prev) => ({
//       ...prev,
//       ingredients: [...prev.ingredients, { name: "", quantity: "" }],
//     }));
//   };

//   const handleRemoveIngredient = (index) => {
//     const updatedIngredients = input.ingredients.filter((_, i) => i !== index);
//     setInput({ ...input, ingredients: updatedIngredients });
//   };

//   return (
//     <div className="dashboard flex flex-row w-screen h-screen bg-white">
//       <Navbar />

//       <div className="overflow-y-hidden dashboard flex-1 ml-[340px] overflow-x-hidden">
//         <div className="bg-white flex py-[10px] px-8 justify-between border-b-1">
//           <h1 className="text-[18px] font-semibold">Create New Recipe</h1>
//           <Bell className="mr-3 border-2 p-1 rounded-[50px]" size={32} />
//         </div>

//         <div className="py-10 px-10 bg-[#F3F3F3] h-screen">
//           <div className="bg-white w-[100%] gap-2 py-5 px-8 rounded-t-lg flex flex-col">
//             <div className="bg-white w-[100%] gap-10 flex">
//               <div className="w-[55%] flex flex-col gap-3">
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[15px] font-semibold">Recipe Name</label>
//                   <input
//                     value={input.name}
//                     onChange={(e) => setInput({ ...input, name: e.target.value })}
//                     className="p-2 px-2 border rounded-md text-[14px] border-gray-400"
//                     type="text"
//                     placeholder="Enter name of recipe"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[15px] font-semibold">Category</label>
//                   <input
//                     value={input.category}
//                     onChange={(e) => setInput({ ...input, category: e.target.value })}
//                     className="p-2 px-2 border rounded-md text-[14px] border-gray-400"
//                     type="text"
//                     placeholder="Select category"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-full">
//                   <label className="text-[15px] font-semibold">Ingredients</label>
//                   {input.ingredients.map((ingredient, index) => (
//                     <div key={index} className="flex justify-between gap-8 w-full">
//                       <input
//                         value={ingredient.name}
//                         onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
//                         className="p-2 px-2 border rounded-md w-full text-[14px] border-gray-400"
//                         type="text"
//                         placeholder="Enter an ingredient"
//                       />
//                       <input
//                         value={ingredient.quantity}
//                         onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
//                         className="p-2 px-2 border rounded-md w-full text-[14px] border-gray-400"
//                         type="number"
//                         placeholder="Quantity"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveIngredient(index)}
//                         className="text-red-500"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={handleAddIngredient}
//                     className="mt-2 text-blue-500"
//                   >
//                     + Add New Ingredient
//                   </button>
//                 </div>
//               </div>

//               <div className="flex-1 py-7">
//                 <div className="flex flex-col gap-1">
//                   <input
//                     name="recipePhoto"
//                     onChange={(e) => setInput({ ...input, recipePhoto: e.target.files[0] })}
//                     className="text-center flex items-center justify-center h-44 p-2 px-2 border-2 rounded-md text-[14px] border-gray-400 border-dashed"
//                     type="file"
//                     accept="image/*"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-[15px] font-semibold">Estimated Time</label>
//                   <input
//                     value={input.recipeTime}
//                     onChange={(e) => setInput({ ...input, recipeTime: e.target.value })}
//                     className="p-2 px-2 border-2 rounded-md text-[14px] border-gray-400"
//                     type="text"
//                     placeholder="Enter estimated time of your recipe"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col mt-2">
//               <label htmlFor="" className="font-semibold text-[15px]">
//                 How-to
//               </label>
//               <textarea
//                 value={input.instruction}
//                 onChange={(e) => setInput({ ...input, instruction: e.target.value })}
//                 className="border-2 p-2 rounded-sm"
//                 placeholder="Enter instructions"
//               ></textarea>
//             </div>
//             <div className="flex items-center mt-4 justify-center">
//               <button onClick={handleCreate} className="w-[35%] p-2 rounded-[50px] text-white tracking-wider font-bold text-[19px] bg-[#FF9B05]">
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Createrecipe;

import { useCreaterecipeMutation } from "@/apis/recipe_api";
import Mobile_view_navbar from "@/Mobile_view_navbar";
import Navbar from "@/Navbar";
import { Bell, Edit, Loader2, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Createrecipe = () => {
  const [prev, setprev] = useState(null)
  const [input, setinput] = useState({
    name:"",
    category: "",
    instruction: "",
    recipeTime: "",
    file: "",
    incredients:[ { incredientname: "", quantity: "" }],
  });
  
  

if(input.file){
  const reader=new FileReader()
  reader.onload=()=>{
    setprev(reader.result)
  };
reader.readAsDataURL(input.file)
}
const removeimg=()=>{
setinput({...input,file:""})
setprev(null)

  const reader=new FileReader()
  setprev(null)

  reader.onload=()=>{
    setprev(null)
  };
  // reader.readAsDataURL(null)
}

const [ createrecipe,{data,isLoading,isSuccess,error}]=useCreaterecipeMutation()
const handlecreate = () => {
  const formdata = new FormData();
  formdata.append("name", input.name);
  formdata.append("category", input.category);
formdata.append("instruction", input.instruction);
formdata.append("recipeTime", input.recipeTime);
formdata.append("file", input.file);


input.incredients.forEach((ingredient, index) => {
  formdata.append(`incredients[${index}][incredientname]`, ingredient.incredientname);
  formdata.append(`incredients[${index}][quantity]`, ingredient.quantity);
});
    createrecipe(formdata)


  };
  useEffect(() => {
    if(data||isSuccess){
      toast.success(data.message)
   window.location.reload()
    }
    }, [data,isSuccess])

    useEffect(() => {
    if(error){
      toast.error(error.data.message)

    }
    }, [error])
 
  const handleinc = (index, val, data) => {
    const updatedarray = input.incredients.map((inc, i) => (
        i === index ? { ...inc, [val]: data } : inc
    ));
    setinput({ ...input, incredients: updatedarray });
};
 
  

  const addincredient = () => {
    setinput((prev) => ({
        ...prev,
        incredients: [...prev.incredients, { incredientname: "", quantity: "" }]
    }));
};

  const removeincredient = (index) => {
    const updatedArr = input.incredients.filter((_, i) => i !== index);
    setinput({ ...input, incredients: updatedArr });
};

  return (
    <div className="dasboard flex flex-row w-screen h-screen bg-white ">
      {" "}
      <Navbar />
      <div className="overflow-y-scroll dasboardd flex-1 md:ml-[340px]  overflow-x-hidden ">
        <div className="md:w-[calc(100vw-340px)] w-full bg-white flex right-0 py-[10px] px-3 sm:px-8 justify-between drop-shadow-lg fixed z-30 items-center">
          <h1 className="text-[15px] sm:text-[18px] md:text[20px] lg:text-[22px] font-semibold">
            Create New Recipe
          </h1 >

          <div className="flex item-center " >
            <Bell className="mr-3 border-2 p-1 rounded-full" size={32} />
            <div className="z-50  md:hidden">
              <Mobile_view_navbar />
            </div>
          </div>
        </div>
       
       
       
       

        <div className="py-3 md:px-10 px-3 bg-[#F3F3F3] h-screen mt-[47px]">
          <div className="bg-white w-[100%] gap-2 py-5 px-3 md:px-8 rounded-t-lg flex flex-col  ">
            <div className="bg-white w-[100%] gap-10   flex md:flex-row  flex-col">
              <div className="md:w-[55%] flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[15px] font-semibold">
                    Recipe Name
                  </label>
                  <input
                    value={input.name}
                    onChange={(e) =>
                      setinput({ ...input, name: e.target.value })
                    }
                    className="p-2 px-2 border rounded-md text-[14px] border-gray-400 "
                    type="text"
                    placeholder="Enter name of recipe"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[15px] font-semibold">Category</label>
                  <input
                    value={input.category}
                    onChange={(e) =>
                      setinput({ ...input, category: e.target.value })
                    }
                    className="p-2 px-2 border rounded-md text-[14px] border-gray-400 "
                    type="text"
                    placeholder="Select category"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-[15px] font-semibold">
                 
                    ingredients
                  </label>
                  {

                    input.incredients.map((incredient,index)=>(
                    
                      <div key={index} className="flex justify-between gap-3 md:gap-8 w-full">
                      <input
                        value={incredient.incredientname}
                        onChange={(e)=>handleinc(index,"incredientname",e.target.value)}
                        
                        className="p-2 px-2 border rounded-md w-full text-[14px] border-gray-400 "
                        type="text"
                        placeholder="Enter an incredient"
                      />
                      <input
                        value={incredient.quantity}
                        onChange={(e)=>handleinc(index,"quantity",e.target.value)}
                                
                        className="p-2 px-2 border rounded-md w-full text-[14px] border-gray-400 "
                        type="text"
                        placeholder="Quantity"
                      />
                      <button 
                      onClick={()=>removeincredient(index)}
                      className="border-2 p-2 px-3  bg-black text-[#FF9B05]">
                        remove
                      </button>
                    </div>
                    
                    
                    )

                    )
                  }
                 

                  <button
                 onClick={addincredient}
                    className=" mt-2 text-center p-2 px-2 border-dashed border-2 border-gray-400 rounded-md w-full text-[14px]"
                    type="button"
        
                >+ Add new ingredients</button>
                </div>
              </div>

              <div className=" flex-1 md:py-7  py-0">
              
                <div className="w-full h-40 mb-5 relative">
                 {prev?<>
                 <img  className="w-[50%] h-40 "  src={prev} alt="" /> 
                 <button  onClick={removeimg}> <Edit className="absolute top-4 right-10"  size={40}/></button>
                 </>:  <div className="flex flex-col gap-1">
                 <input
                   name="file"
                   // value={input.recipePhoto}
                   onChange={(e) =>
                     setinput({ ...input, file: e.target.files[0] })
                   }
                   className="text-center flex items-center justify-center h-44 p-2 px-2 border-2 rounded-md text-[14px] border-gray-400  border-dashed"
                   type="file"
                   accept="image/*"
                 />
               </div>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[15px] font-semibold">
                    Estimated Time
                  </label>
                  <input
                    value={input.recipeTime}
                    onChange={(e) =>
                      setinput({ ...input, recipeTime: e.target.value })
                    }
                    className="p-2 px-2 border-2 rounded-md text-[14px] border-gray-400  "
                    type="text"
                    placeholder="Enter estimated time of your recipe"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2 ">
              <label htmlFor="" className="font-semibold  text-[15px]">
                How-to
              </label>
              <textarea
                value={input.instruction}
                onChange={(e) =>
                  setinput({ ...input, instruction: e.target.value })
                }
                name=""
                className="border-2 p-2  rounded-sm"
                id=""
                placeholder="Enter instructions"
              ></textarea>
            </div>
            <div className="flex items-center mt-4 justify-center">
              <button
                onClick={handlecreate}
                className="md:w-[35%] p-2 text-center  w-full  rounded-[50px] text-white tracking-wider font-bold text-[19px] bg-[#FF9B05] flex justify-center items-center"
              disabled={isLoading}

              >
                {isLoading?<Loader2 className="animate-spin text-center "/>:"Create"}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createrecipe;
