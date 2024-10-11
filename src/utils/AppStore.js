import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice"


const AppStore = configureStore({

    reducer:{
        app : AppSlice
    }
})

export default AppStore;