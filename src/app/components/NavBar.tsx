"use client";
import React from "react";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../icons/svg.jsx";

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(false);

  const hideDisplay = (value: boolean) => {
    return value ? "-left-72" : "left-0";
  };
  return (
    <div
      className={`absolute flex h-screen w-80 duration-300 ${hideDisplay(collapsed)} flex-col items-center space-y-10 border-2 border-black bg-blue-500`}
    >
      <div className="flex text-2xl text-white">Todo App</div>
      <div className="flex flex-col space-y-16">
        <button className="text-white">Home</button>
        <button className="text-white">About</button>
        <button className="text-white">Contact</button>
      </div>
      <button
        className="absolute right-0 top-1/2"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <RightArrow /> : <LeftArrow />}
      </button>
    </div>
  );
}
