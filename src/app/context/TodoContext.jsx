"use client";

import { createContext, useState, useContext } from "react";

export const TodoContext = createContext();

export function useTodo() {
   return useContext(TodoContext);
}

export const ToDoProvider = ({ children }) => {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, todo]);
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   return <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</TodoContext.Provider>;
};
