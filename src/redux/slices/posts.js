import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    item: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
});

export const postsReducer = postsSlice.reducer;
