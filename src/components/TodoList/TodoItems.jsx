import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../../redux/TodoSlice";

const TodoItems = () => {
  const { items } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      {items.map(({ id, text, completed }) => {
        return (
          <div key={id} className="flex items-center justify-between">
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                id={id}
                className="w-5 h-5"
                checked={completed}
                onChange={() => dispatch(toggle(id))}
              />
              <label
                htmlFor={id}
                className={`${
                  completed ? "line-through font-medium" : "font-bold"
                } text-custom-blue`}
              >
                {text}
              </label>
            </div>

            <button
              className="bg-red-600"
              onClick={() => dispatch(deleteTodo(id))}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
