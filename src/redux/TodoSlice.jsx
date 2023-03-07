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
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((item) => item.id == id);
      todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.items.filter((item) => item.id != id);
      state.items = todos;
    },
  },
});

export const { addTodo, toggle, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
