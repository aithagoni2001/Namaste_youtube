import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name: "search",
    initialState :{

    },
    reducers :{
        Cachedata :(state, action)=>{
            // state = Object.assign(state, action.payload)
            return {
                ...state,         // Spread the current state
                ...action.payload // Spread the new data (action payload)
            };
        }
    }
})
export const {Cachedata} = SearchSlice.actions;
export default SearchSlice.reducer;