import { createSlice } from "@reduxjs/toolkit";

const moviesslice = createSlice({
  name: "movies",
  initialState: {
    storeMoviesData: null,
  },
  reducers: {
    nowplayingmovies: (state, action) => {
      state.storeMoviesData = action.payload;
    },
  },
});
export const { nowplayingmovies } = moviesslice.actions;
export default moviesslice.reducer;
