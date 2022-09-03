import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  counter: 0,
  owner: { phone: '', address: '' },
  loading: false,
  error: null,
  success: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      console.log('cartSlice_items: ', action.payload);
      state.items = action.payload || initialState.items;
      state.counter = action.payload?.length || initialState.counter;
    },
    setCartOwner(state, action) {
      console.log('cartSlice_owner: ', action.payload);
      state.owner = action.payload || initialState.owner;
    },
    fetchPostCartRequest(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    fetchPostCartSuccess(state, action) {
      console.log('cartSlice_success: ', action.payload);
      Object.assign(state, initialState, {success: action.payload});
      console.log('cartSlice_success_state.owner: ', state.owner);
      console.log('{...initialState, success: action.payload}: ', {...initialState, success: action.payload});
    },
    fetchPostCartFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  setCartItems,
  setCartOwner,
  fetchPostCartRequest,
  fetchPostCartSuccess,
  fetchPostCartFailed,
} = cartSlice.actions;

export default cartSlice.reducer;