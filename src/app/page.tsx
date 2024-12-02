"use client";
import { useState, useRef, useEffect } from "react";
import { useTodo } from "./context/TodoContext";
import AddForm from "./components/AddForm";

export default function Home() {
   const { todos, addTodo, removeTodo } = useTodo();
   const dialogRef = useRef<HTMLDialogElement | null>(null);
   const [filteredValue, setFilteredValue] = useState();
   const [adding, setAdding] = useState(false);
   const [powerMode, setPowerMode] = useState(false);
   const [tagSort, setTagSort] = useState("");

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dialogRef.current?.close();
   };

   return (
      <div className="h-screen w-screen flex justify-center items-center">
         <div className="w-[600px] h-[800px] bg-gray-500 p-10 flex items-center flex-col space-y-10">
            <input type="text" />
            <div className="w-3/4 flex justify-around items-center">
               <button
                  onClick={() => dialogRef.current?.showModal()}
                  className="w-24">
                  Add Todo
               </button>
               <button className="w-24">Power Mode</button>
            </div>
            <div className="w-3/4 flex justify-around items-center">
               <select
                  className="w-20"
                  name=""
                  id=""></select>
               <select
                  className="w-20"
                  name=""
                  id=""></select>
            </div>
            <dialog
               ref={dialogRef}
               className="w-3/4 h-3/4 bg-white p-5">
               <AddForm handleSubmit={handleSubmit} />
            </dialog>
         </div>
      </div>
   );
}
