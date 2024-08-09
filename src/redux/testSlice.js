import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://66a07b117053166bcabb8872.mockapi.io/testStudent";

export const fetchData = createAsyncThunk('list/fetchData', async () => {
  const res = await axios.get(url);
  return res.data;
});

// New async thunk for searching videos
export const searchVideosAsync = createAsyncThunk('list/searchVideosAsync', async (query) => {
  const res = await axios.get(`${url}?search=${query}`);
  return res.data;
});

const initialState = {
  list: [],
  searchResults: [],
};

const testSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(searchVideosAsync.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default testSlice.reducer;
