import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    degreeType: false
};

export const changeDegree = createSlice({
  name: 'degree',
  initialState,
  reducers: {
    changeDegre: (state, action) => {
      state.degreeType = action.payload
    }
  },
})

export const { changeDegre } = changeDegree.actions

export default changeDegree.reducer