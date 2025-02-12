import { createSlice } from '@reduxjs/toolkit'

interface BrandState {
  settings: {
    name: string
    colors: string[]
    logo?: string
  }
}

const initialState: BrandState = {
  settings: {
    name: '',
    colors: [],
    logo: undefined,
  },
}

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    updateBrandSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload }
    },
  },
})

export const { updateBrandSettings } = brandSlice.actions
export default brandSlice.reducer 