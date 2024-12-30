import React from "react";
import { Todo } from "../types/types";
import { EditIcon, CheckIcon, TrashIcon } from "../icons/svg.jsx";
import { useTodo } from "../context/TodoContext";

export const TodoBox = ({
  todo,
  edit,
}: {
  todo: Todo;
  edit: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { removeTodo, updateTodo } = useTodo();

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed,
      completed_date: todo.completed ? undefined : new Date().toISOString(),
    });
  };

  const borderColor = (check: boolean) => {
    return check
      ? "border-green-500 outline-green-500"
      : "border-black outline-black";
  };

  const calculateRating = () => {
    const priority = Number(todo.priority);
    const complexity = Number(todo.complexity);
    return priority * complexity;
  };

  return (
    <div
      className={`flex h-[40px] w-full items-center justify-between rounded-md border-2 ${borderColor(todo.completed)} bg-white text-center shadow-xl duration-300 hover:scale-105 hover:outline-double`}
    >
      <div className="flex w-1/6 justify-around">
        <button onClick={handleRemove}>
          <TrashIcon />
        </button>
        <button onClick={handleUpdate}>
          <CheckIcon completed={todo.completed} />
        </button>
      </div>
      <div className="flex w-2/3 justify-around text-center">
        <div className="w-1/5">{todo.task}</div>
        <div className="w-1/5">{todo.due_date}</div>
        <div className="w-1/5">{todo.priority}</div>
        <div className="w-1/5">{todo.complexity}</div>
        <div className="w-1/5">{calculateRating()}</div>
      </div>
      <div className="w-1/6">
        <button value={todo.id} onClick={edit}>
          <EditIcon />
        </button>
      </div>
    </div>
  );
};
