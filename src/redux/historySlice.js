// historySlice.js
import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    setHistory: (state, action) => {
      return action.payload;
    },
    clearHistory: () => {
      return [];
    },
    addToHistory: (state, action) => {
      const isVideoInHistory = state.some(item => item.id === action.payload.id);
      if (!isVideoInHistory) {
        state.push(action.payload);
      }
    },
  },
});

export const { setHistory, clearHistory, addToHistory } = historySlice.actions;

export const loadHistory = () => (dispatch) => {
  const storedHistory = localStorage.getItem('history');
  if (storedHistory) {
    dispatch(setHistory(JSON.parse(storedHistory)));
  }
};

export const saveHistory = (history) => () => {
  localStorage.setItem('history', JSON.stringify(history));
};

export default historySlice.reducer;
