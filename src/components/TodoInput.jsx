import React, { useState } from "react";
import { CgFileAdd } from "react-icons/cg";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header className="py-4 mx-6 space-x-16 text-md lg:mx-0 lg:py-10 lg:text-2xl">
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        className="p-2 text-[#4C7766] font-bold focus:outline-current rounded-xl"
        placeholder="Enter todo..."
      />
      <button
        className="px-3 py-2 text-white rounded-xl bg-[#4C7766] hover:bg-opacity-85"
        onClick={() => {
          todoValue && handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        <div className="flex space-x-2 ">
          <text>Add</text>
          <CgFileAdd />
        </div>
      </button>
    </header>
  );
};

export default TodoInput;
