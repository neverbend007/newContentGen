import { createSlice } from '@reduxjs/toolkit'

interface OrderState {
  orders: any[]
  currentOrder: any | null
  loading: boolean
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  loading: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setOrders, setCurrentOrder, setLoading } = orderSlice.actions
export default orderSlice.reducer 