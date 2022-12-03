// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tranquil-lowlands-32111.herokuapp.com/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token && token !== null && token !== "") {
        headers.set("x-auth-token", `${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 30,
  endpoints: () => ({}),
});
