"use client";
import { useState, useRef } from "react";
import { Todo } from "./types/types";
import { useTodo } from "./context/TodoContext";
import AddForm from "./components/AddForm";
import { TodoBox } from "./components/TodoBox";

export default function Home() {
  const { todos, addTodo, removeTodo } = useTodo();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [filteredValue, setFilteredValue] = useState();
  const [adding, setAdding] = useState(false);
  const [powerMode, setPowerMode] = useState(false);
  const [tagSort, setTagSort] = useState("");
  const [displayAddForm, setDisplayAddForm] = useState(false);

  return (
    <div className="flex w-screen h-screen items-center justify-center border-2 border-black">
      <div className="flex h-[1000px] w-[1400px] flex-col space-y-10 rounded-xl border-2 border-black bg-gray-200 p-10 shadow-inner shadow-xl shadow-gray-500/50">
        <div className="flex w-full flex-col items-center py-2 space-y-10 border-2 border-black bg-white shadow-inner shadow-xl shadow-gray-500/50">
          <input className="pl-2 border-2 border-black" placeholder="Search tasks..." type="text" />
          <div className="flex w-3/4 items-center justify-around">
            <button
              onClick={() => setDisplayAddForm(!displayAddForm)}
              className="w-28 border-2 border-black rounded-xl"
            >
              Add Todo
            </button>
            <button className="w-28 border-2 border-black rounded-xl">Power Mode</button>
          </div>
          <div className="flex w-3/4 items-center justify-around">
            <select className="w-28 border-2 border-black rounded-xl" name="" id=""></select>
            <select className="w-28 border-2 border-black rounded-xl" name="" id=""></select>
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
}
