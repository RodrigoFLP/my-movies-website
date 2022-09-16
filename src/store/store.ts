import { configureStore, isAnyOf } from "@reduxjs/toolkit";

import authSlice, { login } from "./slices/authSlice";
import { loadToken } from "./slices/authSlice";

import { auth } from "./services/auth";
import { movies } from "./services/movies";

import { startAppListening, listenerMiddleware } from "./listenerMiddleware";
import favoritesSlice, {
  add,
  loadFavorites,
  remove,
} from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    favorites: favoritesSlice,
    [auth.reducerPath]: auth.reducer,
    [movies.reducerPath]: movies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(auth.middleware)
      .concat(movies.middleware)
      .prepend(listenerMiddleware.middleware),
});

// listernerMiddleware to persist favorites to localStorage
startAppListening({
  matcher: isAnyOf(add, remove),
  effect: async (action, listenerApi) => {
    try {
      const favorites = JSON.stringify(listenerApi.getState().favorites);
      localStorage.setItem("favorites", favorites);
    } catch (err) {}
  },
});

//dispatch async thunk to retrieve token from local storage
store.dispatch(loadToken());

//dispatch async thunk to retrieve token from local storage
store.dispatch(loadFavorites());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
