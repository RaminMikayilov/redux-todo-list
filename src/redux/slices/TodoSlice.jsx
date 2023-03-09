import { createSlice } from "@reduxjs/toolkit";

const localStorageTodos = JSON.parse(localStorage.getItem("items"));

const setItems = (item) => {
  localStorage.setItem("items", JSON.stringify(item));
};

const initialState = {
  items: localStorageTodos !== null ? localStorageTodos : [],
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
      const newTodo = action.payload;
      state.items.push(newTodo);
      setItems(state.items);
    },
    toggle: (state, action) => {
      const id = action.payload;
      const todo = state.items.find((item) => item.id == id);
      todo.completed = !todo.completed;
      setItems(state.items);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.items.filter((item) => item.id != id);
      state.items = todos;
      setItems(state.items);
    },
    clearCompleted: (state) => {
      const todos = state.items.filter((item) => !item.completed);
      state.items = todos;
      setItems(state.items);
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
      setItems(state.items);
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
