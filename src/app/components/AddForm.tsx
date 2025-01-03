"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import { AddFormProps, Todo, EventHandlerType } from "../types/types";
import { uid } from "uid";

const AddForm = ({ display, closeMenu, id }: AddFormProps) => {
  const { addTodo, todos, updateTodo } = useTodo();
  const [newTodo, setNewTodo] = useState<Todo>({} as Todo);
  const [checklistValue, setChecklistValue] = useState<string>("");

  const updateCurrentTodo = (event: EventHandlerType) => {
    event.preventDefault();
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    if (key === "checklist") {
      const newChecklist = newTodo.checklist || [];
      newChecklist.push(checklistValue);
      setNewTodo({ ...newTodo, checklist: newChecklist });
      setChecklistValue("");
    } else
      setNewTodo({
        ...newTodo,
        [key]: value,
      });
  };

  const setTodo = (id: string) => {
    const todo = todos.find((todo: Todo) => todo.id === id);
    setNewTodo(todo);
  };

  const checkForRepeat = (id: string) => {
    const todo = todos.find((todo: Todo) => todo.id === id);
    if (todo) {
      updateTodo(id, newTodo);
      return true;
    }
    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = newTodo.id;
    if (!checkForRepeat(id)) {
      addTodo({ ...newTodo, id: uid(), completed: false });
    }
   // addToDataBase();
    handleClose();
  };

  const handleClose = () => {
    setNewTodo({} as Todo);
    closeMenu();
  };

  const RadioButtonSelection = ({
    selected,
    type,
  }: {
    selected: string;
    type: string;
  }) => {
    return (
      <div className="flex space-x-5">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
          <input
            onClick={updateCurrentTodo}
            defaultChecked={Number(selected) === index + 1}
            key={index}
            type="radio"
            name={type}
            value={index + 1}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (id) {
      setTodo(id);
    }
  }, [id]);

  if (!display) return null;

  return (
    <div className="fixed right-[1050px] top-[300px] z-20 flex flex-col items-center justify-center space-y-5 rounded-2xl border-2 border-black bg-gray-500 px-12 py-16">
      <input
        onChange={updateCurrentTodo}
        className="rounded-md border-2 border-black pl-2"
        name={"task"}
        type="text"
        value={newTodo.task || ""}
        placeholder="Add a new todo"
      />
      <div className="flex w-3/4 items-center justify-around">
        <input
          className="rounded-md p-1"
          type="date"
          value={newTodo.due_date || ""}
          onChange={updateCurrentTodo}
          name={"due_date"}
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div>Select Complexity</div>
        <RadioButtonSelection
          selected={newTodo.complexity}
          type={"complexity"}
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div>Select Priority</div>
        <RadioButtonSelection selected={newTodo.priority} type={"priority"} />
      </div>
      <textarea
        className="rounded-md border-2 border-black p-1"
        placeholder="Enter information about the task you wish to add..."
        name="description"
        onChange={updateCurrentTodo}
        value={newTodo.description || ""}
        rows={5}
        cols={50}
        id=""
      ></textarea>
      <div className="flex w-full flex-col justify-between space-y-2">
        <div className="flex">
          <div className="w-1/2">Checklist Steps:</div>
          <form name="checklist" onSubmit={updateCurrentTodo}>
            <input
              value={checklistValue}
              onChange={(e) => setChecklistValue(e.target.value)}
              className="w-3/4"
              type="text"
            />
          </form>
        </div>
        <div className="h-[300px] w-full bg-white">
          {newTodo.checklist?.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
      <div className="flex space-x-16">
        <form onSubmit={handleSubmit}>
          <button className="h-8 w-36 rounded-md bg-white" type="submit">
            Submit
          </button>
        </form>
        <button className="h-8 w-36 rounded-md bg-white" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddForm;
