import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginInput } from "../../interfaces/login";

export const auth = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, LoginInput>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = auth;
