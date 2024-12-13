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
      className={`flex h-[150px] w-[300px] flex-col items-center justify-around rounded-xl border-2 ${borderColor(todo.completed)} bg-white shadow-xl duration-500 hover:scale-110 hover:outline-double py-2`}
    >
      <div>{todo.task}</div>
      <div className="flex justify-between w-full h-full px-2">
        <div className="flex flex-col items-center justify-around">
          <div>{todo.complexity}</div>
          <div>{todo.priority}</div>
          <div>{todo.due_date}</div>
        </div>
        <div className="h-full flex justify-center items-center ">Checklist</div>
        <div className="flex h-full space-x-5">
          <button onClick={handleUpdate}>
            <CheckIcon completed={todo.completed} />
          </button>
          <div className="flex flex-col justify-between">
            <button onClick={handleRemove}>
              <TrashIcon />
            </button>
            <button value={todo.id} onClick={edit}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
