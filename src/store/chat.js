import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name:"chat",
    initialState:[],
    reducers: {
        addChat: (state, action) => {
            return [...action.payload]
        }
    }
})

export const { addChat } = chatSlice.actions

export default chatSlice.reducer