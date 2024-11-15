import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", "jsearch.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query({
        query({
          numPages = 5,
          queryString = "software developer",
          location = "India",
          datePosted = "all",
          type = "FULLTIME,CONTRACTOR,PARTTIME,INTERN",
          page = 1,
          experience = null,
          radius = null,
        } = {}) {
          // Define query parameters in an object
          const params = new URLSearchParams({
            query: queryString + " in " + location,
            page: page.toString(),
            num_pages: numPages.toString(),
            date_posted: datePosted,
            employment_types: type,
          });

          // Conditionally add optional parameters
          if (experience) params.append("job_requirements", experience);
          if (radius) params.append("radius", radius.toString());

          // Construct and return the full URL
          return `/search?${params.toString()}`;
        },
      }),
    };
  },
});

export const { useFetchJobsQuery } = apiSlice;
