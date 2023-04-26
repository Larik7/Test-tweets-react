import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filterSlice";
import { tweetsReducer } from "./tweetsSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filters: filtersReducer,
  },
});