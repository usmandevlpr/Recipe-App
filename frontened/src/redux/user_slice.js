import { createSlice } from '@reduxjs/toolkit'



export const user_slice=createSlice({
    name:"user",
    initialState:{
isauthentication:false,
user:null
    },
    reducers:{
loginuser:(state,action)=>{
state.user=action.payload.user
state.isauthentication=true
},
logoutuser:(state,action)=>{
state.user=null
state.isauthentication=false
}
                                        }
                                    
                                        })

export const { loginuser,logoutuser}=user_slice.actions
export default user_slice.reducer 