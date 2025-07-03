import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
export const store = configureStore({
    reducer: {
        counter:counterReducer
    },
})

// create sotre
//wrap app component under provider
// create slice
//register reducer in store