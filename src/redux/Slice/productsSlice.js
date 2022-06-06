import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api';

const productsSlice = createSlice({
    name: 'productsList',
    initialState: {
        status: null, 
        products: []
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload
            })
            // .addCase(getProductBySlug.pending, (state, action) => {
            //     state.status = 'pending'
            // })
            // .addCase(getProductBySlug.fulfilled, (state, action) => {
            //     state.status = 'success'
            //     state.product = action.payload
            // })
    }
})

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await api.getProducts();
    return res.data;
});
// export const getProductBySlug = createAsyncThunk('products/getProductBySlug', async (slug) => {
//     const res = await api.getProductBySlug(slug);
//     return res.data;
// });

export default productsSlice;