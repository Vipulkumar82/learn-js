import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
import themeReducer from "../slices/themeSlice";
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        theme: themeReducer
    },

})

// create sotre
//wrap app component under provider
// create slice
//register reducer in store