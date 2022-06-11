import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';


export const getUsers = createAsyncThunk("/user/getUsers", async(accesstoken)=>{
    const res = await userApi.getUsers(accesstoken);
    return res;
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUsers: [],
            isFetching: false,
            error: false
        }
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, action) =>{
            state.allUsers = action.payload
        }

    }
})


export default userSlice;