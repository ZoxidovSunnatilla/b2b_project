import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from "./features/auth-slice"
import cardList from "./features/card-list"
import cart from "./features/cart"
import singleProd from "./features/singleProduct"
import favorites from "./features/favorites"
import compare from "./features/compare"




const rootReducer = combineReducers({
  authReducer,
  cardList,
  cart,
  singleProd,
  favorites,
  compare
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
