import React from "react";
import { Todo } from "../types/types";
import { EditIcon, CheckIcon, TrashIcon } from "../icons/svg.jsx";
import { useTodo } from "../context/TodoContext";

export const TodoBox = ({ todo }: { todo: Todo }) => {
  const { removeTodo, updateTodo } = useTodo();

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  const borderColor = (check: boolean) => {
    return check ? "border-green-500 outline-green-500" : "border-black outline-black";
  }

  const test = () => {
    console.log("test");
  };
  return (
    <div className={`flex w-full items-center justify-between rounded-xl border-2 ${borderColor(todo.completed)} bg-white p-1 shadow-inner shadow-xl hover:outline-double`}>
      <div>{todo.task}</div>
      <div className="flex flex-col items-center justify-center">
        <div>{todo.complexity}</div>
        <div>{todo.priority}</div>
        <div>{todo.due_date}</div>
      </div>
      <div className="flex h-full space-x-5">
        <button onClick={handleUpdate}>
          <CheckIcon completed={todo.completed} />
        </button>
        <div className="flex flex-col justify-around">
          <button onClick={handleRemove}>
            <TrashIcon />
          </button>
          <button onClick={test}>
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
