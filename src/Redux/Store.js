import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/Counterslice";


export const store =configureStore({
    reducer:{
        counterReducer:counterSlice
    }
    
})