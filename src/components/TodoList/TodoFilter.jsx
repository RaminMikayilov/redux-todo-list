import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/slices/TodoSlice";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const { filterMode } = useSelector((state) => state.todo);

  return (
    <>
      <h1 className="font-extrabold text-3xl text-center pb-7 pt-2 text-custom-blue drop-shadow-xl">
        Filter
      </h1>
      <div className="font-bold text-black space-y-3 text-lg">
        <div
          className={`cursor-pointer hover:pl-2 hover:text-blue-900  duration-200 ${
            filterMode == "All" ? "text-custom-blue" : ""
          }`}
          onClick={() => dispatch(filter("All"))}
        >
          All
        </div>
        <div
          className={`cursor-pointer hover:pl-2 hover:text-blue-900 duration-200 ${
            filterMode == "Active" ? "text-custom-blue" : ""
          }`}
          onClick={() => dispatch(filter("Active"))}
        >
          Active
        </div>
        <div
          className={`cursor-pointer hover:pl-2 hover:text-blue-900 duration-200
          ${filterMode == "Completed" ? "text-custom-blue" : ""}`}
          onClick={() => dispatch(filter("Completed"))}
        >
          Completed
        </div>
      </div>
    </>
  );
};

export default TodoFilter;
