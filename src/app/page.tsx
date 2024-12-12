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
    const todosDueWithinWeek = todos.filter((todo: Todo) => {
      const dueDate = new Date(todo.due_date);
      const currentDate = new Date();
      const timeDiff = Math.abs(currentDate.getTime() - dueDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays < 7;
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
    if (todos.length === 0) {
      return "Nothing to do!";
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
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="h-[1000px] w-[1400px] space-y-10 rounded-xl border-2 border-black bg-gray-200 p-5 shadow-xl shadow-gray-500/50">
        <h1 className="mt-10 w-full text-center text-3xl">Welcome!</h1>
        <div className="grid grid-cols-3 place-items-center gap-20 py-16">
          <div className="flex h-[250px] w-[300px] items-center justify-center border-2 border-black bg-white">
            Total Number of Tasks: {getActiveTasks()}
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center space-y-5 border-2 border-black bg-white">
            <span className="text-[40px] font-black">PRIORITY</span>
            <div className="text-center text-[30px] font-black">
              {getHighestPriority()}
            </div>
          </div>
          <div className="flex h-[250px] w-[300px] items-center justify-center border-2 border-black bg-white">
            {dueWithinWeek()} task(s) due within the next week!
          </div>
          <div className="flex h-[250px] w-[300px] flex-col items-center justify-center border-2 border-black bg-white">
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
          <div className="flex h-[250px] w-[300px] items-center justify-center border-2 border-black bg-white">
            <div>{getTotalCompletd()} total tasks completed.</div>
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black bg-white">
            Most recent completed task: {getRecentlyCompleted()}
          </div>
        </div>
      </div>
    </div>
  );
}
