import { configureStore, createSlice } from '@reduxjs/toolkit';
import productsSlice from './Slice/productsSlice';
import cartsSlice from './Slice/cartsSlice';

const store = configureStore({
  reducer: {
    productsList: productsSlice.reducer,
    cartsList: cartsSlice.reducer,
  },
});

export default store;
