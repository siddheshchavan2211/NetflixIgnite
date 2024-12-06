import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../Utils/DataSlice";
import moviesslice from "../Utils/MoviesSlice";
const Store = configureStore({
  reducer: {
    data: dataslice,
    movies: moviesslice,
  },
});
export default Store;
