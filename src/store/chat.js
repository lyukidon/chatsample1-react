import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name:"chat",
    initialState:[],
    reducers: {
        addChat: (state, action) => {
            if (action.payload.length !== 0){
                return [...state,...action.payload]
            }
        }
    }
})

export const { addChat } = chatSlice.actions

export default chatSlice.reducer