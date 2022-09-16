import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../../interfaces/movieDetail";
import { RootState } from "../store";

interface favoritesState {
  movies: MovieDetail[];
  total: number;
}

const initialState: favoritesState = {
  movies: [],
  total: 0,
};

export const loadFavorites = createAsyncThunk(
  "favorites/loadFavorites",
  async () => {
    const serializedFavorites = localStorage.getItem("favorites");
    if (serializedFavorites === null) {
      return undefined;
    }
    return JSON.parse(serializedFavorites);
  }
);

export const clearFavorites = createAsyncThunk(
  "favorites/clearFavorites",
  async (thunkapi) => {
    localStorage.removeItem("favorites");
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MovieDetail>) => {
      state.movies = [...state.movies, action.payload];
      state.total = state.total + 1;
    },

    remove: (state, action: PayloadAction<number>) => {
      state.movies = [
        ...state.movies.filter((movie) => movie.id !== action.payload),
      ];
      state.total = state.total - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.fulfilled, (state, action) => {
        if (action.payload) {
          state.movies = action.payload.movies;
          state.total = action.payload.total;
        }
      })
      .addCase(clearFavorites.fulfilled, (state, action) => {
        state.movies = [];
        state.total = 0;
      });
  },
});

export const { add, remove } = favoritesSlice.actions;

export const selectMovies = (state: RootState) => state.favorites.movies;
export const selectTotal = (state: RootState) => state.favorites.total;

export default favoritesSlice.reducer;
