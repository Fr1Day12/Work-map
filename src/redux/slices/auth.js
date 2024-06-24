import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../../api/apiService";
import instance from "../../api/apiLocal";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const response = await instance.post("auth/login", params);
  return response.data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const response = await instance.get("auth/me");
  return response.data;
});

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
      })

      .addCase(fetchAuthMe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setAuth } = authSlice.actions;

export const selectIsAuth = (state) => Boolean(state.auth.data);

export default authSlice.reducer;
