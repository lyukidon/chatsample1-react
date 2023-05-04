import { configureStore } from '@reduxjs/toolkit'
import chat from './chat'
import search from './search'

export const store = configureStore({
  reducer: {
    chat,
    search,
  },
})