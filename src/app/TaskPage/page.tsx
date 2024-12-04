"use client";
import { useState } from "react";
import { Todo } from "../types/types";
import { useTodo } from "../context/TodoContext";
import AddForm from "../components/AddForm";
import { TodoBox } from "../components/TodoBox";

const TaskPage = () => {
  const { todos, addTodo, removeTodo } = useTodo();
  const [filteredValue, setFilteredValue] = useState();
  const [adding, setAdding] = useState(false);
  const [powerMode, setPowerMode] = useState(false);
  const [tagSort, setTagSort] = useState("");
  const [displayAddForm, setDisplayAddForm] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="flex h-[1000px] w-[1400px] flex-col space-y-10 rounded-xl border-2 border-black bg-gray-200 p-10 shadow-xl shadow-gray-500/50">
        <div className="flex w-full flex-col items-center space-y-10 border-2 border-black bg-white py-2 shadow-xl shadow-gray-500/50">
          <input
            className="border-2 border-black pl-2"
            placeholder="Search tasks..."
            type="text"
          />
          <div className="flex w-3/4 items-center justify-around">
            <button
              onClick={() => setDisplayAddForm(!displayAddForm)}
              className="w-28 rounded-xl border-2 border-black"
            >
              Add Todo
            </button>
            <button className="w-28 rounded-xl border-2 border-black">
              Power Mode
            </button>
          </div>
          <div className="flex w-3/4 items-center justify-around">
            <select
              className="w-28 rounded-xl border-2 border-black"
              name=""
              id=""
            ></select>
            <select
              className="w-28 rounded-xl border-2 border-black"
              name=""
              id=""
            ></select>
          </div>
          <AddForm
            closeMenu={() => setDisplayAddForm(false)}
            display={displayAddForm}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center space-y-2">
            {todos.map((todo: Todo, index: number) => (
              <TodoBox key={index} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
