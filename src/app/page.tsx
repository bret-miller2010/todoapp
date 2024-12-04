"use client";
import { useTodo } from "./context/TodoContext";

export default function Home() {
  const { todos } = useTodo();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="h-[1000px] w-[1400px] space-y-10 rounded-xl border-2 border-black bg-gray-200 p-5 shadow-xl shadow-gray-500/50">
        <h1 className="w-full text-center text-3xl">Welcome!</h1>
        <div className="grid grid-cols-3 place-items-center gap-20 py-32">
          <div className="h-[250px] w-[300px] border-2 border-black">
            Total Number of Tasks: {todos.length}
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black">
            Highest priority task Due: Stuff
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black">
            Number of tasks due within the next week: Stuff
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black">
            Number of tasks overdue: stuff
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black">
            Completed tasks
          </div>
          <div className="h-[250px] w-[300px] border-2 border-black">
            Most recent completed task: stuff
          </div>
        </div>
      </div>
    </div>
  );
}
