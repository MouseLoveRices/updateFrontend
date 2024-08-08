import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://66a07b117053166bcabb8872.mockapi.io/testStudent"

export const fetchData = createAsyncThunk('list/fetchData',async()=>{
    const res = await axios.get(url);
    return res.data 
})
const initialState = {
    list:[]
}
const testSlice = createSlice({
    name:"list",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.fulfilled, (state,action)=>{
            state.list = action.payload
        })
    }
})
export default testSlice.reducer