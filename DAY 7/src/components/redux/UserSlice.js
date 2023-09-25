import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        name:localStorage.getItem('name')||null,
    },
};
const UserSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user={name:action.payload};
            localStorage.setItem('name',action.payload);
        },
        logout:(state)=>{
            state.user={name:null};
            localStorage.removeItem('name');
        },
    },
});

export const {login,logout}=UserSlice.actions;
export const selectUser=(state)=>state.user.user;
export default UserSlice;