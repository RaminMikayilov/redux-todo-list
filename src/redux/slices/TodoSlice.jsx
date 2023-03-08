import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  items: [
    { id: 1, text: "Learn HTML", completed: false },
    { id: 2, text: "Learn CSS", completed: true },
  ],
  isOpenModal: false,
  currentTodo: {
    id: 456798,
    text: "",
  },
  filterMode: "All",
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
    clearCompleted: (state) => {
      const todos = state.items.filter((item) => !item.completed);
      state.items = todos;
    },
    //modal
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    //edit todo
    findTodo: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((item) => item.id == id);
      state.currentTodo.id = todo.id;
      state.currentTodo.text = todo.text;
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((item) => item.id == id);
      todo.text = text;
    },
    // filter
    filter: (state, action) => {
      state.filterMode = action.payload;
    },
  },
});

export const {
  addTodo,
  toggle,
  deleteTodo,
  clearCompleted,
  openModal,
  closeModal,
  findTodo,
  editTodo,
  filter,
} = TodoSlice.actions;

export default TodoSlice.reducer;
