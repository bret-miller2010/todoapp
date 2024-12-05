"use client";
import { useState } from "react";
import { Todo } from "../types/types";
import { useTodo } from "../context/TodoContext";
import AddForm from "../components/AddForm";
import { TodoBox } from "../components/TodoBox";

const TaskPage = () => {
  const { todos } = useTodo();
  const [filteredValue, setFilteredValue] = useState("");
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [taskID, setTaskID] = useState<string>();

  const editTask = (value: React.MouseEvent<HTMLButtonElement>) => {
    const idOfTodo = value.currentTarget.value;
    setTaskID(idOfTodo);
    setDisplayAddForm(true);
  };

  const showAddForm = () => {
    setDisplayAddForm(!displayAddForm);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredValue(event.target.value);
  };

  const closeMenu = () => {
    setDisplayAddForm(false);
    setTaskID(undefined);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="flex h-[1000px] w-[1400px] space-x-10 rounded-xl border-2 border-black bg-gray-200 p-10 shadow-xl shadow-gray-500/50">
        <div className="flex h-full flex-col items-center space-y-10 rounded-xl border-2 border-black bg-white p-5 py-2 shadow-xl shadow-gray-500/50">
          <input
            className="border-2 border-black pl-2"
            placeholder="Search tasks..."
            type="text"
            value={filteredValue}
            onChange={handleFilter}
          />
          <div className="flex w-3/4 items-center justify-around">
            <button
              onClick={showAddForm}
              value="add"
              className="w-28 rounded-xl border-2 border-black"
            >
              Add Todo
            </button>
          </div>
          <div className="flex w-3/4 items-center justify-around">
            <select
              className="w-28 rounded-xl border-2 border-black"
              name=""
              id=""
            ></select>
          </div>
          <AddForm closeMenu={closeMenu} display={displayAddForm} id={taskID} />
        </div>
        <div className="h-full w-full flex-col items-center">
          <div className="grid h-full w-full grid-cols-3 place-content-start gap-x-5 gap-y-10">
            {todos
              .filter((todo: Todo) => todo.task.includes(filteredValue))
              .map((todo: Todo, index: number) => (
                <TodoBox key={index} todo={todo} edit={editTask} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
