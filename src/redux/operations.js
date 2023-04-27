import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://644a46f379279846dce38c3a.mockapi.io/";

export const fetchTweets = createAsyncThunk(
    "tweets/fetchAll",
    async (_, thunkAPI) => {
        try {
<<<<<<< HEAD
            const res = await axios.get("users");
=======
            const res = await axios.get("/tweets");
>>>>>>> f251a64aa429e2cc3061fbfa0fbcb9145577fab6
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
<<<<<<< HEAD
            const res = await axios.put(`users/${user.id}`, {
=======
            const res = await axios.put(`/tweets/${user.id}`, {
>>>>>>> f251a64aa429e2cc3061fbfa0fbcb9145577fab6
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