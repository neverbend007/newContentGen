import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import contentReducer from './slices/contentSlice'
import brandReducer from './slices/brandSlice'
import orderReducer from './slices/orderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
    brand: brandReducer,
    order: orderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 