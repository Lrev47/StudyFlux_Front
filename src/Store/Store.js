// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './Slices/CardSlice.js';
import topicReducer from './Slices/TopicSlice.js';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    topics: topicReducer,
  },
});
