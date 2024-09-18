import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodos, handleEditTodos, index } = props;
  return (
    <div className="flex bg-[#FAF9F6] py-2 px-3 justify-between max-w-lg rounded-xl">
      <li className="text-md lg:text-2xl">{children}</li>
      <div className="flex space-x-4 text-2xl">
        <button
          className="text-2xl hover:opacity-60"
          onClick={() => handleEditTodos(index)}
        >
          {/* <FaEdit /> */}
          <BiEdit />
        </button>
        <button
          className="text-2xl hover:opacity-60"
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
