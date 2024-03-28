import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  signle: [],
  
}

export const singleProd = createSlice({
  name: "singleProd",
  initialState,
  reducers: {
    singleProduct: (state, action) => {
      const item = state.products?.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity == action.payload.quantity
      } else {
        state.products?.push(action.payload)
      }
    
    },
 
  },
})

export const {
    singleProduct,

} = singleProd.actions
export default singleProd.reducer
