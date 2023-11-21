import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {} || null,
  toggle: false,
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    onAuthState: (state, { payload }) => {
      state.auth = payload;
    },
    onLogOut: (state) => {
      state.auth = null;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { onAuthState, onLogOut, onToggleState } = reduxState.actions;

export default reduxState.reducer;
