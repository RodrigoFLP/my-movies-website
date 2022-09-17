import favoritesReducer, { add, remove } from "../store/slices/favoritesSlice";

import movie from "../mock/movieDetail.json";

describe("favorites reducer", () => {
  it("should increment total when adding a movie", () => {
    const initialState = {
      movies: [],
      total: 0,
    };
    const action = add(movie);
    const result = favoritesReducer(initialState, action);
    expect(result.total).toEqual(initialState.total + 1);
  });

  it("should decrement total when removing a movie", () => {
    const initialState = {
      movies: [movie],
      total: 1,
    };
    const action = remove(movie.id);
    const result = favoritesReducer(initialState, action);
    expect(result.total).toEqual(initialState.total - 1);
  });

  it("should return initial state when passing an empty action", () => {
    const initialState = {
      movies: [],
      total: 0,
    };
    const action = { type: "" };
    const result = favoritesReducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
