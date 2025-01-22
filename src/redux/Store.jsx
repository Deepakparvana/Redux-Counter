import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
