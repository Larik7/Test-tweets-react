import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, editCounts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tweetsSlice  = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTweets.pending, handlePending)
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(editCounts.pending, handlePending)
      .addCase(editCounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(editCounts.rejected, handleRejected)
});

export const contactsReducer = tweetsSlice .reducer;