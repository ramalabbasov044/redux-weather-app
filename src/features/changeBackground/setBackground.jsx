import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    backgroundType: false
};

export const changeBg = createSlice({
  name: 'background',
  initialState,
  reducers: {
    changeBackground: (state, action) => {
      state.backgroundType = action.payload
    }
  },
})

export const { changeBackground } = changeBg.actions

export default changeBg.reducer