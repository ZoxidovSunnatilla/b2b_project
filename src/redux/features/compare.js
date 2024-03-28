import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  compareProd: [],
  
  
}

export const compare = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const item = state.compareProd?.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.compareProd?.push(action.payload)
      }
      // Dispatch a success toast
    },
  
    deleteItem: (state, action) => {
      state.compareProd = state.compareProd.filter(
        (item) => item._id !== action.payload
      )
      // Dispatch a success toast
    },
  
    
    
  },
})

export const {
  addToCompare,
  deleteItem,
} = compare.actions
export default compare.reducer
