"use client";
import React from "react";
import { useTodo } from "./context/TodoContext";
import { Todo } from "./types/types";

export default function Home() {
  const { todos } = useTodo();

  const getOverdueTasks = () => {
    const overdueTodos = todos.filter((todo: Todo) => {
      const dueDate = new Date(todo.due_date);
      const currentDate = new Date();
      return dueDate < currentDate;
    });

    return overdueTodos.length;
  };

  const getOldestTask = () => {
    const numOfOverdueTasks = getOverdueTasks();
    if (numOfOverdueTasks === 0) {
      return null;
    }
    const oldest = todos.reduce((prev: Todo, current: Todo) =>
      prev.due_date < current.due_date ? prev : current,
    );
    return oldest.task;
  };

  const dueWithinWeek = () => {
    const removeCompleted = todos.filter((todo: Todo) => !todo.completed);
    const todosDueWithinWeek = removeCompleted.filter((todo: Todo) => {
      const dueDate = new Date(todo.due_date);
      const currentDate = new Date();
      const timeDiff = dueDate.getTime() - currentDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      console.log(todo.task, diffDays);
      return diffDays > 0 && diffDays < 7;
    });

    return todosDueWithinWeek.length;
  };

  const getLongestOverdueTime = () => {
    if (todos.length === 0) {
      return null;
    }

    const overdueTodos = todos.filter((todo: Todo) => {
      const dueDate = new Date(todo.due_date);
      const currentDate = new Date();
      return dueDate < currentDate;
    });

    if (overdueTodos.length === 0) {
      return null;
    }

    const oldest = overdueTodos.reduce((prev: Todo, current: Todo) =>
      prev.due_date < current.due_date ? prev : current,
    );
    const dueDate = new Date(oldest.due_date);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - dueDate.getTime());
    const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    return `was due ${diffDays} ago!`;
  };

  const getRecentlyCompleted = () => {
    if (todos.length === 0) {
      return "Nothing to do!";
    }

    if (todos.length === 1) {
      return todos[0].completed === true ? todos[0].task : "Nothing to do!";
    }

    const recentlyCompleted = todos.reduce((prev: Todo, current: Todo) => {
      if (prev.completed_date === undefined) {
        return current;
      }
      if (current.completed_date === undefined) {
        return prev;
      }
      return prev.completed_date > current.completed_date ? prev : current;
    });
    return recentlyCompleted.task;
  };

  const getHighestPriority = () => {
    //If no todos or all are completed, return nothing to do
    if (
      todos.length === 0 ||
      todos.filter((todo: Todo) => todo.completed === false).length === 0
    ) {
      return "No priority tasks!";
    }

    const priority = todos.reduce((prev: Todo, current: Todo) =>
      prev.priority > current.priority ? prev : current,
    );
    return priority.task;
  };

  const getTotalCompletd = () => {
    const completedTodos = todos.filter((todo: Todo) => todo.completed);
    return completedTodos.length;
  };

  const getActiveTasks = () => {
    const activeTasks = todos.filter((todo: Todo) => !todo.completed);
    return activeTasks.length;
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="h-[1000px] w-[1400px] space-y-10 rounded-xl border-2 border-black bg-gray-200 p-5 shadow-xl shadow-gray-500/50">
        <h1 className="mt-10 w-full text-center text-3xl">
          Snapshot information of current list
        </h1>
        <div className="grid grid-cols-3 place-items-center gap-20 py-16">
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center border-2 border-black bg-white drop-shadow-2xl space-y-3">
            <p>
              Total Number of <span className="underline">active</span> tasks
            </p>
            <p className="text-[30px]">{getActiveTasks()}</p>
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center space-y-5 border-2 border-black bg-white drop-shadow-2xl">
            <span className="text-[30px]">Priority Task</span>
            <div className="text-center text-[20px]">
              {getHighestPriority()}
            </div>
          </div>
          <div className="flex h-[250px] w-[300px] items-center justify-center border-2 border-black bg-white drop-shadow-2xl">
            {dueWithinWeek()} task(s) due within the next week!
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center border-2 border-black bg-white drop-shadow-2xl">
            <div>
              {getOverdueTasks() !== 0 ? (
                getOverdueTasks()
              ) : (
                <span className="font-black underline">NO</span>
              )}{" "}
              <span> overdue task(s)</span>
            </div>

            <div>
              {getOldestTask()} {getLongestOverdueTime()}
            </div>
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center border-2 border-black bg-white drop-shadow-2xl">
            <p>Total Completed</p>
            <p>{getTotalCompletd()}</p>
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center border-2 border-black bg-white drop-shadow-2xl">
            <p> Lasted Completed</p>
            <p>{getRecentlyCompleted()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
