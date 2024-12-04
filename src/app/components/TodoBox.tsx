import React from "react";
import { Todo } from "../types/types";

export const TodoBox = ({ todo }: { todo: Todo }) => {
  return (
    <div className="flex w-80 items-center justify-between border-2 border-black">
      <div>{todo.task}</div>
      <div className="flex flex-col items-center justify-center">
        <div>{todo.complexity}</div>
        <div>{todo.priority}</div>
        <div>
          {todo.month} {todo.day}
        </div>
      </div>
      <div>Description</div>
    </div>
  );
};
