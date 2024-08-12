
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  views: {},
  comments: {},
  watchLater: [],
  history: [],
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    incrementView: (state, action) => {
      const { id, viewCount } = action.payload;
      if (!state.views[id]) {
        state.views[id] = { count: viewCount, updated: false };
      }
      if (!state.views[id].updated) {
        state.views[id].count += 1;
        state.views[id].updated = true;
      }
      localStorage.setItem('views', JSON.stringify(state.views));
    },
    addComment: (state, action) => {
      const { id, comment } = action.payload;
      if (!state.comments[id]) {
        state.comments[id] = [];
      }
      state.comments[id].push(comment);
      localStorage.setItem(`comments_${id}`, JSON.stringify(state.comments[id]));
    },
    addToWatchLater: (state, action) => {
      const video = action.payload;
      const isVideoInWatchLater = state.watchLater.some(item => item.id === video.id);
      if (!isVideoInWatchLater) {
        state.watchLater.push(video);
        localStorage.setItem('watchLater', JSON.stringify(state.watchLater));
      }
    },
    addToHistory: (state, action) => {
      const video = action.payload;
      const isVideoInHistory = state.history.some(item => item.id === video.id);
      if (!isVideoInHistory) {
        state.history.push(video);
        localStorage.setItem('history', JSON.stringify(state.history));
      }
    },
    loadInitialData: (state) => {
      const storedViews = localStorage.getItem('views');
      state.views = storedViews ? JSON.parse(storedViews) : {};

      const storedWatchLater = localStorage.getItem('watchLater');
      state.watchLater = storedWatchLater ? JSON.parse(storedWatchLater) : [];

      const storedHistory = localStorage.getItem('history');
      state.history = storedHistory ? JSON.parse(storedHistory) : [];
    },
  },
});

export const { incrementView, addComment, addToWatchLater, addToHistory, loadInitialData } = videoSlice.actions;
export default videoSlice.reducer;
