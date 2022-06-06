import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NavItem } from "react-bootstrap";
import * as api from '../../api';

const cartsSlice = createSlice({
    name: 'cartsList',
    initialState: {
        status: null, 
        carts: []
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getCarts.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.status = 'success'
                state.carts = action.payload
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.status = 'success'
                state.carts.push(action.payload)
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.status = 'success'
                console.log(action.payload)
                state.carts = state.carts.filter(cart => cart._id !== action.payload)
            })
    }
})

export const getCarts = createAsyncThunk('carts/getCarts', async () => {
    const res = await api.getCarts();
    return res.data;
});
export const addToCart = createAsyncThunk('carts/addToCart', async (item) => {
    const res = await api.addToCart(item);
    return res.data;
});
export const deleteCart = createAsyncThunk('carts/deleteCart', async (id) => {
    const res = await api.deleteCart(id);
    console.log("res",res)
    return res.data;
});


export default cartsSlice;