import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryString: "software developer",
  location: "India",
  numPages: 5,
  datePosted: "all",
  type: "FULLTIME",
  page: 1,
  experience: null,
  radius: null,
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setSearchParams: function (state, action) {
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    },

    resetSearchParams: function () {
      return { ...initialState };
    },
  },
});

export const { setSearchParams, resetSearchParams } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
