import { createSlice } from "@reduxjs/toolkit";
import auth from "../../firebase/firebase";
import { Store } from "../../app/store";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
  id: null,
  email: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: function (state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

onAuthStateChanged(auth, (user) => {
  if (user) {
    Store.dispatch(
      setUser({
        id: user.uid,
        email: user.email,
        isLoggedIn: true,
      }),
    );
  } else {
    Store.dispatch(
      setUser({
        initialState,
      }),
    );
  }
});
