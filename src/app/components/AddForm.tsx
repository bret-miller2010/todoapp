"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import { AddFormProps, Todo, EventHandlerType } from "../types/types";
import { uid } from "uid";

const AddForm = ({ display, closeMenu, id }: AddFormProps) => {
  const { addTodo, todos, updateTodo } = useTodo();
  const [newTodo, setNewTodo] = useState<Todo>({} as Todo);

  const updateCurrentTodo = (event: EventHandlerType) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;

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
    console.log(typeof selected);
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
    <div className="top-17 fixed flex flex-col items-center justify-center space-y-5 bg-red-500 px-20 py-20">
      <input
        onChange={updateCurrentTodo}
        className="border-2 border-black pl-2"
        name={"task"}
        type="text"
        value={newTodo.task || ""}
        placeholder="Add a new todo"
      />
      <div className="flex w-3/4 items-center justify-around">
        <input
          className="p-1"
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
        className="border-2 border-black p-1"
        placeholder="Enter information about the task you wish to add..."
        name="description"
        onChange={updateCurrentTodo}
        value={newTodo.description || ""}
        rows={5}
        cols={50}
        id=""
      ></textarea>
      <div className="flex space-x-16">
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddForm;
