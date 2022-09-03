import { configureStore } from '@reduxjs/toolkit';
import topSalesReducer from './SliceTopSales';
import catalogReducer from './SliceCatalog';
import productReducer from './SliceProduct';
import cartReducer from './SliceCart';

const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
    catalog: catalogReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;