import { createSlice } from "@reduxjs/toolkit";

function getFromLocalStorage() {
  const appliedJobs = localStorage.getItem("appliedJobs");
  if (appliedJobs) {
    return JSON.parse(appliedJobs);
  }

  return {
    userId: "",
    appliedJobs: [],
  };
}

function saveToLocalStorage(appliedJobsState) {
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobsState));
}

const initialState = getFromLocalStorage();

const appliedjobSlce = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
    applyJob: function (state, action) {
      const job = action.payload;
      const existingJob = state.appliedJobs.find(
        (applied) => applied.job_id === job.job_id,
      );

      if (!existingJob) {
        state.appliedJobs.push(job);
        saveToLocalStorage(state);
      }
    },

    clearAPpliedJobs: function (state) {
      state.appliedJobs = [];
      saveToLocalStorage(state);
    },
  },
});

export const { applyJob, clearAPpliedJobs } = appliedjobSlce.actions;
export default appliedjobSlce.reducer;
