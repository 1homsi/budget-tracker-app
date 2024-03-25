import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    loadApp: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loadApp } = loadSlice.actions;
export default loadSlice.reducer;
