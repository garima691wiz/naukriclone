import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import jobsSearchParamsReducer from "../features/jobsSearch/jobSearchParamsSlice";
import savedJobsReducer from "../features/savedjobs/savedJobsSlice";
import appliedJobsReducer from "../features/appliedJobs/appliedJobsSlice";
import { apiSlice } from "../features/jobsSearch/jobsSearchSlice";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    jobSearchParams: jobsSearchParamsReducer,
    appliedJobs: appliedJobsReducer,
    savedJobs: savedJobsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
