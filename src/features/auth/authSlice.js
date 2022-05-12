import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async (arg, { rejectWithValue }) => {
    const { login, setLogin } = arg;
    try {
      const { data, status } = await axios.post("/api/auth/login", login.input);

      if (status === 200) {
        localStorage.setItem("Matrix-token", data.encodedToken);
        localStorage.setItem("Matrix-user", JSON.stringify(data.foundUser));
        return data;
      }
    } catch (error) {
      console.log(error.response.statusText);
      setLogin({ ...login, error: error.response.statusText });
      return rejectWithValue(false);
    }
  }
);
export const signupHandler = createAsyncThunk(
  "auth/signupHandler",
  async (arg, { rejectWithValue }) => {
    const { signup, setSignup } = arg;

    try {
      const { data, status } = await axios.post(
        "api/auth/signup",
        signup.input
      );
      if (status === 201) {
        localStorage.setItem("Matrix-token", data.encodedToken);
        localStorage.setItem("Matrix-user", JSON.stringify(data.createdUser));
        return data;
      }
    } catch (error) {
      console.log(error);
      setSignup({ ...signup, error: error.response.statusText });
      return rejectWithValue(false);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("Matrix-token") || null,
    user: localStorage.getItem("Matrix-user") || null,
    isLoading: false,
  },
  reducers: {
    logoutHandler: (state) => {
      state.token = null;
      localStorage.removeItem("Matrix-token"),
        localStorage.removeItem("Matrix-user");
    },
  },
  extraReducers: {
    [loginHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
    },
    [loginHandler.rejected]: (state, { payload }) => {
      state.isLoading = payload;
    },
    [signupHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [signupHandler.fulfilled]: (state, { payload }) => {
      (state.isLoading = false), (state.token = payload.encodedToken);
      state.user = payload.foundUser;
    },
    [signupHandler.rejected]: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});
export const { logoutHandler } = authSlice.actions;
export default authSlice.reducer;
