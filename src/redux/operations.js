import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://643d2112f0ec48ce9052e729.mockapi.io";

export const fetchTweets = createAsyncThunk(
    "tweets/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/tweets");
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editCounts = createAsyncThunk(
    "tweets/editFollows",
    async (user, thunkAPI) => {
        try {
            const res = await axios.put(`/tweets/${user.id}`, {
                followers: user.isFollowing ? user.followers -1 : user.followers +1,
                isFollowing: !user.isFollowing
            });
            return res.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);