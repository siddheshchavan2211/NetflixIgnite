import { createSlice } from "@reduxjs/toolkit";

const moviesslice = createSlice({
  name: "movies",
  initialState: {
    storeMoviesData: null,
    storeBGMovie: null,
    popMovies: null,
    upcoming: null,
    Trending: null,
    data: null,
  },
  reducers: {
    nowplayingmovies: (state, action) => {
      state.storeMoviesData = action.payload;
    },
    Popularmovies: (state, action) => {
      state.popMovies = action.payload;
    },
    Upcomingmovie: (state, action) => {
      state.upcoming = action.payload;
    },
    Trendingmovie: (state, action) => {
      state.Trending = action.payload;
    },
    Bgmovierunning: (state, action) => {
      state.storeBGMovie = action.payload;
    },
    SearchMovies: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const {
  nowplayingmovies,
  Bgmovierunning,
  Popularmovies,
  Upcomingmovie,
  Trendingmovie,
  SearchMovies,
} = moviesslice.actions;
export default moviesslice.reducer;
