import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    editCard: (state, action) => {
      const { id, itemEdit, qtyEdit, unitEdit } = action.payload
      const existingUser = state.find(user => user?.id === id);
      if(existingUser) {
        existingUser.item = itemEdit;
        existingUser.qty = qtyEdit;
        existingUser.unit = unitEdit;
        
      }
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user?.id === id);
      if(existingUser) {
        return state.filter(user => user?.id !== id);
      }
    }
  }
});

export const { addCard, editCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;