import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoFilter from "./TodoFilter";

const TodoList = () => {
  return (
    // background
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 pt-24 font-nunito">
      <div
        className="bg-cyan-200 flex justify-center w-2/3 mx-auto rounded-br-3xl rounded-tl-3xl shadow-2xl
 "
      >
        <div className="w-1/3 p-7 border-r-2 border-custom-blue">
          <TodoFilter />
        </div>
        <div className="w-2/3 p-7">
          <TodoForm />
          <TodoItems />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
