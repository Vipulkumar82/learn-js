import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: 'white' },
    reducers:{
        changeTheme: (state) => {
            state.value = state.value === 'white' ? 'black' : 'white';
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;