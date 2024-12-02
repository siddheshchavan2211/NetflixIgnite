import { createSlice } from "@reduxjs/toolkit";

const dataslice = createSlice({
  name: "data",
  initialState: null,
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: () => {
      return null;
    },
  },
});
export const { adduser, removeuser } = dataslice.actions;
export default dataslice.reducer;
