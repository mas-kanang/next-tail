import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Konfirmasi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    konfirmasis: builder.query({
      query: () => "/konfirmasi",
    }),
  }),
});

export const { useKonfirmasisQuery } = Konfirmasi;
