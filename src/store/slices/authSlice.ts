import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface authState {
  token?: string;
  isLoggedIn: boolean;
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: authState = {
  isLoggedIn: false,
  isIdle: true,
  isLoading: false,
  isError: false,
};

//get token from localStorage if available
export const loadToken = createAsyncThunk("auth/getToken", async () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    throw new Error("token not found");
  }
  return token;
});

//clear token from localStorage
export const clearToken = createAsyncThunk("auth/clearToken", async () => {
  console.log("token");
  localStorage.removeItem("token");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    startFetching: (state) => {
      state.isIdle = false;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToken.pending, (state) => {
        state.isLoading = true;
        state.isIdle = false;
      })
      .addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(loadToken.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(clearToken.fulfilled, (state) => {
        state.token = undefined;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isIdle = false;
      });
  },
});

export const { login, startFetching } = authSlice.actions;

export const selectIsIdle = (state: RootState) => state.auth.isIdle;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsError = (state: RootState) => state.auth.isError;

export default authSlice.reducer;
