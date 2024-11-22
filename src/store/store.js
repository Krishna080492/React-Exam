import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../features/product/productSlice'

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;
