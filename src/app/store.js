import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/jobsSearch/jobsSearchSlice";

export const Store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    // appliedJobs: appliedJobsReducer,
    // savedJobs: savedJobsReducer,
    // searchJobs: searchJobsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware(getDefauleMiddleware) {
    return getDefauleMiddleware().concat(apiSlice.middleware);
  },
});
