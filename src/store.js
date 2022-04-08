import { configureStore } from '@reduxjs/toolkit'
import processImagesReducer from './slices/imagesSlice'

export const store = configureStore({
  reducer: {
    processed: processImagesReducer
  },
})
