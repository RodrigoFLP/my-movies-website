import { configureStore, isAnyOf } from "@reduxjs/toolkit";

import authSlice, { login } from "./slices/authSlice";
import { loadToken } from "./slices/authSlice";

import { auth } from "./services/auth";

import { startAppListening, listenerMiddleware } from "./listenerMiddleware";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [auth.reducerPath]: auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auth.middleware),
});

//dispatch async thunk to retrieve token from local storage
store.dispatch(loadToken());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
