import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productApi } from "../../api/productApi";

export const updateProduct = createAsyncThunk('products/updateProduct', async(product)=>{
    const data = await productApi.updateProduct(product);
    console.log(data)
    return data;
});
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const data = await productApi.getProducts();
    console.log(data)
    return data;
});
export const getProductBySlug = createAsyncThunk('products/getProductBySlug', async (slug) => {
    const data = await productApi.getProductBySlug(slug);
    return data;
});
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
    const data = await productApi.deleteProduct(id);
    return data;
});
export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    const data = await productApi.addProduct(product);
    return data;
})
const productsSlice = createSlice({
    name: 'productsList',
    initialState: {
        status: null, 
        products: []
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.products = action.payload
        },
        [addProduct.fulfilled]: (state, action) => {
            state.products.push(action.payload)
        },
        [updateProduct.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.products = state.products.map(product => 
                product._id === action.payload._id
                ?{...product, brand: action.payload.brand,image: action.payload.image, name: action.payload.name, price: parseInt(action.payload.price), quantity: parseInt(action.payload.quantity)}
                :product)
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload.id)
        }
       
    }
})



export default productsSlice;