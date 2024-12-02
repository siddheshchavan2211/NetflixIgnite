import { configureStore } from "@reduxjs/toolkit";
import dataslice from "../Utils/DataSlice";
const Store = configureStore({
  reducer: {
    data: dataslice,
  },
});
export default Store;
