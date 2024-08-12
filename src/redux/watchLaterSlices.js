// watchLaterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState: [],
  reducers: {
    setWatchLater: (state, action) => {
      return action.payload;
    },
    clearWatchLater: () => {
      return [];
    },
    addToWatchLater: (state, action) => {
      const isVideoInWatchLater = state.some(item => item.id === action.payload.id);
      if (!isVideoInWatchLater) {
        state.push(action.payload);
      }
    },
  },
});

export const { setWatchLater, clearWatchLater, addToWatchLater } = watchLaterSlice.actions;

export const loadWatchLater = () => (dispatch) => {
  const storedWatchLater = localStorage.getItem('watchLater');
  if (storedWatchLater) {
    dispatch(setWatchLater(JSON.parse(storedWatchLater)));
  }
};

export const saveWatchLater = (watchLater) => () => {
  localStorage.setItem('watchLater', JSON.stringify(watchLater));
};

export default watchLaterSlice.reducer;
