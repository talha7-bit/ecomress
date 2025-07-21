import { createSlice } from "@reduxjs/toolkit";
const stored=localStorage.getItem("selected");
const pageSlice=createSlice({
    name:"page",
    initialState:{
        pic:stored? JSON.parse(stored):null
    },reducers:{
        addpic:(state,action)=>{
            state.pic=action.payload;
            localStorage.setItem("selected",JSON.stringify(action.payload));
        },
        removepic:(state)=>{
            state.pic=null
            localStorage.removeItem("selected");
        }
    }
})

export const {addpic,removepic}=pageSlice.actions;
export default pageSlice.reducer;