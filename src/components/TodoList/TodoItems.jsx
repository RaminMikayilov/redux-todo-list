import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../../redux/TodoSlice";

const TodoItems = () => {
  const { items } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map(({ id, text, completed }) => {
        return (
          <div key={id}>
            <input
              type="checkbox"
              id={id}
              checked={completed}
              onChange={() => dispatch(toggle(id))}
            />
            <label
              htmlFor={id}
              className={`${completed ? "line-through" : ""}`}
            >
              {text}
            </label>
            <button className="bg-red-600" onClick={() => dispatch(deleteTodo(id))} >delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
