import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:'',
    reducers: {
        setSearch: (state, action) => {
            console.log('setSearch')
            if (action.payload){
                return action.payload
            }
        }
    }
})

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;