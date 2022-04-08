import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  items: []
}

export const processImagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload.items
    }
  }
})

export const { setItems } = processImagesSlice.actions
export default processImagesSlice.reducer
