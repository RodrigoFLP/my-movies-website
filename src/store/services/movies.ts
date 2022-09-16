import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credits } from "../../interfaces/credits";
import { MovieDetail } from "../../interfaces/movieDetail";
import { PopularMovies } from "../../interfaces/popularMovies";

export const movies = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_MOVIEDB_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    popularMovies: builder.query<PopularMovies, void>({
      query: () => ({
        url: "movie/popular",
        method: "GET",
      }),
    }),
    details: builder.query<MovieDetail, number>({
      query: (id) => ({
        url: `movie/${id}`,
        method: "GET",
      }),
    }),
    credits: builder.query<Credits, number>({
      query: (id) => ({
        url: `movie/${id}/credits`,
        method: "GET",
      }),
    }),
    recommendations: builder.query<Credits, number>({
      query: (id) => ({
        url: `movie/${id}/recommendations`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePopularMoviesQuery,
  useDetailsQuery,
  useCreditsQuery,
  useRecommendationsQuery,
} = movies;
