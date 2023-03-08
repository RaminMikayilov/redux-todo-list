import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
