"use client";
import { useState } from "react";
import { Todo } from "../types/types";
import { useTodo } from "../context/TodoContext";
import AddForm from "../components/AddForm";
import { TodoBox } from "../components/TodoBox";

const TaskPage = () => {
  const { todos } = useTodo();
  const [filteredValue, setFilteredValue] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("all");
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

  const handleFilterCompleted = (value: string) => {
    setFilterCompleted(value);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredValue(event.target.value);
  };

  const checkIfIncluded = (todo: Todo) => {
    if (filterCompleted === "all") {
      return true;
    } else if (filterCompleted === "completed" && todo.completed) {
      return true;
    } else if (filterCompleted === "incomplete" && todo.completed === false) {
      return true;
    }
    return false;
  };

  const closeMenu = () => {
    setDisplayAddForm(false);
    setTaskID(undefined);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex h-[200px] w-[500px] flex-col items-center space-y-10 rounded-xl border-2 border-black bg-white px-5 py-10 shadow-xl shadow-gray-500/50">
          <input
            className="rounded-xl border-2 border-black pl-2 duration-300 hover:scale-105"
            placeholder="Search tasks..."
            type="text"
            value={filteredValue}
            onChange={handleFilter}
          />
          <div className="flex w-3/4 items-center justify-around">
            <button
              onClick={showAddForm}
              value="add"
              className="w-28 rounded-xl border-2 border-black duration-300 hover:scale-125"
            >
              Add Todo
            </button>
            <select
              defaultValue="all"
              className="w-28 rounded-xl border-2 border-black text-center"
              onChange={(event) => handleFilterCompleted(event.target.value)}
              name=""
              id=""
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
          <AddForm closeMenu={closeMenu} display={displayAddForm} id={taskID} />
        </div>
        <div className="flex h-[800px] w-[1200px] rounded-xl border-2 border-black bg-gray-200 shadow-xl shadow-gray-500/50">
          <div className="h-full w-full flex-col items-center">
            <div className="h-full w-full px-20 pt-10">
              <div className="mb-5 flex w-full items-center justify-between rounded-md border-2 border-black bg-white text-center">
                <div className="w-1/6"></div>
                <div className="flex w-2/3 justify-around text-center">
                  <div className="w-1/5">Name</div>
                  <div className="w-1/5">Due Date</div>
                  <div className="w-1/5">Priority</div>
                  <div className="w-1/5">Complexity</div>
                  <div className="w-1/5">Rating</div>
                </div>
                <div className="w-1/6"></div>
              </div>
              <div className="flex flex-col space-y-2">
                {todos
                  .filter((todo: Todo) => todo.task.includes(filteredValue))
                  .filter((todo: Todo) => checkIfIncluded(todo))
                  .map((todo: Todo, index: number) => (
                    <TodoBox key={index} todo={todo} edit={editTask} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
