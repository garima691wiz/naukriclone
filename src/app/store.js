import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/jobsSearch/jobsSearchSlice";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    // appliedJobs: appliedJobsReducer,
    // savedJobs: savedJobsReducer,
    // searchJobs: searchJobsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
