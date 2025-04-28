import { loginuser, logoutuser } from "@/redux/user_slice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// loginuser
// logoutuser

let URER_API = "http://localhost:3000/api/v1/user";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URER_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    Registeruser: builder.mutation({
      query: (input) => ({
        url: "/register",
        method: "POST",
        body: input,
      }),
    }),
    loginuser: builder.mutation({
      query: (input) => ({
        url: "/login",
        method: "POST",
        body: input,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(loginuser({ user: result.data.Userr }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logout:builder.mutation({
      query:()=>({
        url:"/logout",
        method:"GET"
      }),
      async onQueryStarted(_,{queryFulfilled,dispatch}){
        const result=await queryFulfilled
        dispatch(logoutuser())
      }
    }),
    update:builder.mutation({
      query:(input)=>({
        url:"/update",
        method:"PUT",
        body:input
      }),
      async onQueryStarted(_,{queryFulfilled,dispatch}){
        const result= await queryFulfilled
        dispatch(loginuser({user:result.data.user}))
      }
    })
  }),
});

export const { useRegisteruserMutation, useLoginuserMutation, useLogoutMutation,useUpdateMutation} = userApi;
