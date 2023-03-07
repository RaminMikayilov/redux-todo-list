import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoItems = () => {
  const { items } = useSelector((state) => state.todo);

  return (
    <div>
      {items.map(({ id, text, completed }) => {
        return (
          <div>
            <div key={id}>{text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
