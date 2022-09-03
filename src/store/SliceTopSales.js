import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topSales: [],
  loading: false,
  error: null,
};

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    fetchTopSalesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTopSalesSuccess(state, action) {
      state.loading = false;
      state.topSales = action.payload;
    },
    fetchTopSalesFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailed,
} = topSalesSlice.actions;

export default topSalesSlice.reducer;