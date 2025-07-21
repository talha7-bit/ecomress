import { createSlice } from "@reduxjs/toolkit";
const saved=localStorage.getItem("added")

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        pics:saved?[JSON.parse(saved)]:[]
    },reducers:{
        add:(state,action)=>{
            state.pics.push(action.payload);
            localStorage.setItem("added",JSON.stringify(action.payload))
        },
        remove:(state,action)=>{
        state.pics=state.pics.filter(s=>s.id!==action.payload);
        localStorage.setItem("added",JSON.stringify(state.pics));
        },
        setit:(state,action)=>{
            state.pics=action.payload;
            localStorage.setItem("added",JSON.stringify(state.pics))
        },
        clear:(state)=>{
            state.pics=[];
            localStorage.removeItem("added")
        }
    }
})

export const {add,remove,setit,clear}=cartSlice.actions;
export default cartSlice.reducer;