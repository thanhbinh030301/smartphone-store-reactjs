import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../api';
import userApi from '../../api/userApi';





export const login = createAsyncThunk('auth/login', async (user)=>{
    const data = await userApi.login(user);
    if(data)
        localStorage.setItem("user",JSON.stringify(data));
    return data; 
})
export const register = createAsyncThunk('auth/register', async (user)=>{
    const data = await userApi.register(user);
    if(data)
        localStorage.setItem("user",JSON.stringify(data));
    return data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: JSON.parse(localStorage.getItem("user"))||null,
        msg: "",
    },
    reducers: {
        logout: (state) => {  
            state.currentUser = null;
            localStorage.removeItem("user");
        },

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        }
           
    }
})
export default authSlice;