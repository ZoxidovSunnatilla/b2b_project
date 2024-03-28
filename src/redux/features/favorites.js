import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favoritProd: [],
  
  
}

export const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const item = state.favoritProd?.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.favoritProd?.push(action.payload)
      }
      // Dispatch a success toast
    },
  
    deleteItem: (state, action) => {
      state.favoritProd = state.favoritProd.filter(
        (item) => item._id !== action.payload
      )
      // Dispatch a success toast
    },
  
    
    
  },
})

export const {
  addToFavorites,
  deleteItem,
} = favorites.actions
export default favorites.reducer
