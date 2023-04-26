import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchTweets, editCounts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState: initialState,
    reducers: {
        setFollow(state, action) {
           for (const user of state.items) {
                if (user.id === action.payload) {
                    user.isFollowing = !user.isFollowing;
                    break;
                }
            }
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTweets.pending, handlePending)
            .addCase(fetchTweets.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(editCounts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.forEach(item => {
                    if (item.id !== action.payload.id) {
                        return
                    }
                    item.followers = action.payload.followers;
                })
            })
            .addMatcher(
                isAnyOf(fetchTweets.rejected, editCounts.rejected), handleRejected
            )
});

export const tweetsReducer = tweetsSlice.reducer;
export const {setFollow} = tweetsSlice.actions;