import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  singleProducts: [],
  
}

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products?.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products?.push(action.payload)
      }
      // Dispatch a success toast
    },
    singleProduct: (state,action) => {
      const item = state.singleProducts?.find(
        (item) => item._id === action.payload._id
      )
      state.singleProducts?.push(action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity++
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      )
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      )
      // Dispatch a success toast
    },
    resetCart: (state) => {
      state.products = []
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const brand = action.payload
      const isBrandChecked = state.checkedBrands.some(
        (b) => b._id === brand._id
      )

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b._id !== brand._id
        )
      } else {
        state.checkedBrands.push(brand)
      }
    },

    toggleCategory: (state, action) => {
      const category = action.payload
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b._id === category._id
      )

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b._id !== category._id
        )
      } else {
        state.checkedCategorys.push(category)
      }
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = cart.actions
export default cart.reducer
