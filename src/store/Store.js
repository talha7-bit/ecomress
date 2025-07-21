import { configureStore } from "@reduxjs/toolkit";

import pageReducer from './pageSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice'

const store=configureStore({
    reducer:{
        page:pageReducer,
        auth:authReducer,
        cart:cartReducer
    }
})

export default store;