import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    ToggleGpt: false,
    language: "English",
  },
  reducers: {
    ToggleReducer: (state) => {
      state.ToggleGpt = !state.ToggleGpt;
    },
    changelanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { ToggleReducer, changelanguage } = gptslice.actions;
export default gptslice.reducer;
