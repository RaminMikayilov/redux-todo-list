import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <TodoItems />
    </div>
  );
};

export default TodoList;
