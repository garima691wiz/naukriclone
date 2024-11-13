import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query({
        query({
          numPages = 5,
          queryString = "software developer in india",
          datePosted = "all",
          type = "FULLTIME,CONTRACTOR,PARTTIME,INTERN",
          page = 1,
        } = {}) {
          return `search?query=${encodeURIComponent(
            queryString,
          )}&page=${page}&num_pages=${numPages}&date_posted=${datePosted}&employment_types=${encodeURIComponent(
            type,
          )}`;
        },
      }),
    };
  },
});

export const { useFetchJobsQuery } = apiSlice;
