import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() == "") return;
    dispatch(addTodo({ id: Date.now(), text: todo, completed: false }));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" className="bg-blue-400">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
