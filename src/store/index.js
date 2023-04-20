import { configureStore } from '@reduxjs/toolkit'
import chat from './chat'

export const store = configureStore({
  reducer: {
    chat,
  },
})