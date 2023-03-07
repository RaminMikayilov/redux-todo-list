import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
