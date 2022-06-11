import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";

const carts = JSON.parse(localStorage.getItem('carts'));

export const createOrder = createAsyncThunk('carts/orderCart', async (data) => {
    console.log(data);
    const res = await cartApi.createCart(data);
    return res;
});
export const getOrders = createAsyncThunk('carts/getOrders', async () => {
    const res = await cartApi.getCarts();
    return res;
});
export const getOrdersByUser = createAsyncThunk('carts/getCartsByUser', async (userId) => {
    const res = await cartApi.getCartsByUser(userId);
    console.log(res)
    return res;
})
const cartsSlice = createSlice({
    name: 'cartsList',
    initialState: {
        carts: carts || [],
        orderList: [],
        orderListUser: [],
    },
    reducers: {
        addToCart: (state, action)=>{
            console.log(action.payload);
            const cartItem = state.carts.find(cart => cart.name===action.payload.name&&cart.color===action.payload.color&&cart.capacity===action.payload.capacity)
            if(cartItem){
                cartItem.quantity += parseInt(action.payload.quantity);
            }else{
                state.carts.push(action.payload);
            }
            localStorage.setItem('carts',JSON.stringify(state.carts));
        },
        deleteCart: (state, action) => {
            state.carts = state.carts.filter(cart => cart.id!==action.payload)
            localStorage.setItem('carts', JSON.stringify(state.carts));
        }
    },
    extraReducers: {
        [getOrders.fulfilled]: (state, action) => {
            state.orderList = action.payload
        },
        [createOrder.fulfilled]: (state, action) => {
            localStorage.removeItem('carts');
            state.carts.splice(0, state.carts.length);
        },
        [getOrdersByUser.fulfilled]: (state, action) => {
            state.orderListUser = action.payload
        }
    }
})





export default cartsSlice;