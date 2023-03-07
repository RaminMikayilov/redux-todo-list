import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: "Learn HTML", completed: false },
    { id: 2, text: "Learn CSS", completed: true },
  ],
};

const TodoSlice = createSlice({
  name: "Todo List",
  initialState,
  reducers: {},
});

export default TodoSlice.reducer;
