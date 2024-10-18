import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";


const AppStore = configureStore({

    reducer:{
        app : AppSlice,
        search: SearchSlice,
    }
})

export default AppStore;