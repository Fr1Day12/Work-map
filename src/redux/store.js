import { createSlice, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import authReducer from "./slices/auth";
import authMiddleware from "./authMiddleware";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export default store;
