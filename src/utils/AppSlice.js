import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name:"app",
    initialState:{
        isOpenMenu: true
    },
    reducers:{
        toggleMenu :(state)=>{
            state.isOpenMenu = !state.isOpenMenu;
        },
        CloseMenu :(state)=>{
            state.isOpenMenu = false;
        }
    }
})

export  const{toggleMenu, CloseMenu}= AppSlice.actions;

export default AppSlice.reducer;