import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, editTodo } from "../../redux/slices/TodoSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const { id, text } = useSelector((state) => state.todo.currentTodo);

  const [todo, setTodo] = useState(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: id, text: todo }));
    dispatch(closeModal());
  };

  return (
    //modal container
    <div className="flex items-center justify-center bg-blue-700/60 fixed z-50 inset-0">
      {/* modal */}
      <div className="bg-cyan-200 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-br-3xl rounded-tl-3xl shadow-2xl p-5">
        <h1 className=" text-custom-blue text-4xl font-black italic drop-shadow-2xl text-center">
          Edit todo
        </h1>
        <div className="py-5 space-y-5 space-x-2">
          <input
            type="text"
            className="border-b-4 border-custom-blue rounded-lg px-3 py-2 outline-blue-500 w-full"
            placeholder="Edit todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            autoFocus
          />

          <div className="flex justify-around pt-3">
            <button
              className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-800 hover:border-gray-600 rounded duration-200"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
            <button
              className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-600 rounded duration-200"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
