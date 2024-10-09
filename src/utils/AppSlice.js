import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name:"app",
    initialState:{
        isOpenMenu: true
    },
    reducers:{
        toggleMenu :(state)=>{
            state.isOpenMenu = ! state.isOpenMenu;
        }
    }
})

export  const{toggleMenu}= AppSlice.actions;

export default AppSlice.reducer;