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

  return (
    <div
      className={`flex h-[100px] w-[300px] items-center justify-between rounded-xl border-2 ${borderColor(todo.completed)} bg-white p-1 shadow-xl hover:outline-double duration-500 hover:scale-110`}
    >
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
          <button value={todo.id} onClick={edit}>
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
