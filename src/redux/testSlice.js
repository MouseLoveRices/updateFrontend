// redux/testSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://66a07b117053166bcabb8872.mockapi.io/testStudent";

export const fetchData = createAsyncThunk('list/fetchData', async () => {
  const res = await axios.get(url);
  return res.data;
});

export const searchVideosAsync = createAsyncThunk('list/searchVideosAsync', async (query) => {
  const res = await axios.get(`${url}?search=${query}`);
  return res.data;
});

const initialState = {
  list: [],
  searchResults: [],
  views: {},
  selectedTag: 'all',
};

const testSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setViews: (state, action) => {
      state.views = action.payload;
    },
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload;
    },
    incrementViewCount: (state, action) => {
      const { id, viewCount } = action.payload;
      if (!state.views[id]) {
        state.views[id] = { count: viewCount };
      }
      state.views[id].count += 1;
      localStorage.setItem('views', JSON.stringify(state.views));
    },
    loadInitialViews: (state) => {
      const storedViews = localStorage.getItem('views');
      state.views = storedViews ? JSON.parse(storedViews) : {};
    },
  },
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

export const { setViews, setSelectedTag, incrementViewCount, loadInitialViews } = testSlice.actions;
export default testSlice.reducer;
