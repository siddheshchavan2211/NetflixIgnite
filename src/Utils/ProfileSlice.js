import { createSlice } from "@reduxjs/toolkit";

const profileslice = createSlice({
  name: "profile",
  initialState: {
    currentuser: null,
  },
  reducers: {
    showuserInfo: (state, action) => {
      state.currentuser = action.payload;
    },
  },
});
export const { showuserInfo } = profileslice.actions;
export default profileslice.reducer;
