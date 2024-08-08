import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url ="https://66a07b117053166bcabb8872.mockapi.io/animal" 

export const fetchUser = createAsyncThunk('listUser/fetchUser',async()=>{
    const res = await axios.get(url)
    return res.data
 })
const initialState={
    listUser:[]
}
const userSlice = createSlice({
    name: "listUser",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.listUser = action.payload
        })
    }
})
export default userSlice.reducer