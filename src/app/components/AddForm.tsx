"use client";
import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { AddFormProps, Todo, EventHandlerType } from "../types/types";
import { uid } from "uid";

const AddForm = ({ display, closeMenu }: AddFormProps) => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState<Todo>({} as Todo);

  const updateTodo = (event: EventHandlerType) => {
    setNewTodo({
      ...newTodo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({ ...newTodo, id: uid(), completed: false });
    closeMenu();
  };

  if (!display) return null;

  return (
    <div className="top-17 fixed flex flex-col items-center justify-center space-y-5 bg-red-500 px-20 py-20">
      <input
        onChange={updateTodo}
        className="border-2 border-black pl-2"
        name={"task"}
        type="text"
        placeholder="Add a new todo"
      />
      <div className="flex w-3/4 items-center justify-around">
        <input
          className="p-1"
          type="date"
          onChange={updateTodo}
          name={"due_date"}
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div>Select Complexity</div>
        <div className="flex space-x-5">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <input
              onClick={updateTodo}
              key={index}
              type="radio"
              name="complexity"
              value={index + 1}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div>Select Priority</div>
        <div className="flex space-x-5">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, index) => (
            <input
              onClick={updateTodo}
              key={index}
              type="radio"
              name="priority"
              value={index + 1}
            />
          ))}
        </div>
      </div>
      <textarea
        className="border-2 border-black p-1"
        placeholder="Enter information about the task you wish to add..."
        name="description"
        onChange={updateTodo}
        rows={5}
        cols={50}
        id=""
      ></textarea>
      <div className="flex space-x-16">
        <form onSubmit={handleSubmit}>
          <button type="submit">Add</button>
        </form>
        <button onClick={closeMenu}>Cancel</button>
      </div>
    </div>
  );
};

export default AddForm;
