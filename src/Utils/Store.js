import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../Utils/DataSlice";
import moviesslice from "../Utils/MoviesSlice";
import gptslice from "./GptSlice";
import profileslice from "./ProfileSlice";

const Store = configureStore({
  reducer: {
    data: dataslice,
    movies: moviesslice,
    gpt: gptslice,
    profile: profileslice,
  },
});
export default Store;
