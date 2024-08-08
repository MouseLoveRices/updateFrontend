import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://66a07b117053166bcabb8872.mockapi.io/testStudent"

export const fetchData = createAsyncThunk('list/fetchData',async()=>{
    const res = await axios.get(url);
    return res.data 
})
const initialState = {
    list:[],
    searchResults: [],
}
const testSlice = createSlice({
    name:"list",
    initialState,
    reducers:{
        searchVideos: (state, action) => {
            const query = action.payload.toLowerCase();
            state.searchResults = state.list.filter(
              (video) =>
                video.video.toLowerCase().includes(query) ||
                video.tag.toLowerCase().includes(query) ||
                video.user.toLowerCase().includes(query)
            );
          },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.fulfilled, (state,action)=>{
            state.list = action.payload
        })
    }
})
export const {searchVideos} = testSlice.actions
export default testSlice.reducer