import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectStatusFilter = state => state.filters.status;
export const selectTweets = state => state.tweets.items;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;


export const selectVisibleTweets = createSelector(
  [selectTweets, selectStatusFilter],
  (tweets, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return tweets.filter(tweet => !tweet.isFollowing);
      case statusFilters.following:
        return tweets.filter(tweet => tweet.isFollowing);
      default:
        return tweets;
    }
  }
);