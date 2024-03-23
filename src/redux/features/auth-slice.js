import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, action) => {
      return {
        user: action.payload,
      }
    },
    togleModerator: (state) => {
      state.user.isAuth = !state.user.isAuth
    },
    
  },
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
