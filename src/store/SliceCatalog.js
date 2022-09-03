import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: [],
  categories: [],
  activeCategoryId: 0,
  search: '',
  offset: 0,
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    fetchCatalogRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCatalogCategoriesSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCatalogContentSuccess(state, action) {
      state.loading = false;
      state.content = action.payload;
    },
    fetchCatalogFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    catalogCategoryChange(state, action) {
      state.activeCategoryId = action.payload;
      state.offset = initialState.offset;
    },
    catalogSearchChange(state, action) {
      state.search = action.payload;
      state.offset = initialState.offset;
    },
    catalogOffsetChange(state) {
      state.offset = state.offset + 6;
    },
  },
});

export const {
  fetchCatalogRequest,
  fetchCatalogCategoriesSuccess,
  fetchCatalogContentSuccess,
  fetchCatalogFailed,
  catalogCategoryChange,
  catalogSearchChange,
  catalogOffsetChange,
} = catalogSlice.actions;

export default catalogSlice.reducer;