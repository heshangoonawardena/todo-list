import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className="max-w-lg mx-6 space-y-4 max-w lg:mx-0">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            {todo}
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
