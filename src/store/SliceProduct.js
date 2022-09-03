import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchGetProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGetProductSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    fetchGetProductFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchGetProductRequest,
  fetchGetProductSuccess,
  fetchGetProductFailed,
} = productSlice.actions;

export default productSlice.reducer;