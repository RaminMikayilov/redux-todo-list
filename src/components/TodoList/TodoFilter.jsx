import React from "react";

const TodoFilter = () => {
  return (
    <>
      <h1 className="font-extrabold text-3xl text-center pb-7 pt-2 text-custom-blue drop-shadow-xl">
        Filter
      </h1>
      <div className="font-bold text-black space-y-3 text-lg">
        <div className="cursor-pointer hover:pl-2 hover:text-blue-900  duration-200" >All</div>
        <div className="cursor-pointer hover:pl-2 hover:text-blue-900 duration-200" >Completed</div>
        <div className="cursor-pointer hover:pl-2 hover:text-blue-900 duration-200" >Active</div>
      </div>
    </>
  );
};

export default TodoFilter;
