import { createSlice } from '@reduxjs/toolkit'

interface ContentState {
  contents: any[]
  loading: boolean
  error: string | null
}

const initialState: ContentState = {
  contents: [],
  loading: false,
  error: null,
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContents: (state, action) => {
      state.contents = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setContents, setLoading, setError } = contentSlice.actions
export default contentSlice.reducer 