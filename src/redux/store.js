import { combineReducers, configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import productsSlice from './Slice/productsSlice';
import cartsSlice from './Slice/cartsSlice';
import authSlice from './Slice/authSlice';
import userSlice from './Slice/userSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'


// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }
// const rootReducer = combineReducers({
//     productsList: productsSlice.reducer,
//     cartsList: cartsSlice.reducer,
//     auth: authSlice.reducer,
//     user: userSlice.reducer,
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer) 

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export let persistor = persistStore(store)

const store = configureStore({
  reducer: {
    productsList: productsSlice.reducer,
    cartsList: cartsSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
  }   
})
export default store;

