"use client";
import React from "react";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../icons/svg.jsx";
import Link from "next/link";

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(false);

  const hideDisplay = (value: boolean) => {
    return value ? "-left-[282px]" : "left-0";
  };
  return (
    <div className="fixed text-white">
      <div
        className={`relative flex h-screen w-80 pt-10 duration-300 ${hideDisplay(collapsed)} flex-col items-center space-y-10 border-2 border-black bg-gray-200`}
      >
        <div className="flex flex-col space-y-16">
          <h1 className="w-full text-center text-3xl text-black">Todo App</h1>
          <Link
            href="/"
            className="flex h-10 w-40 items-center justify-center rounded-xl border-2 bg-gray-500 duration-300 hover:scale-125 hover:rounded-md"
          >
            Home
          </Link>
          <Link
            href="/TaskPage"
            className="flex h-10 w-40 items-center justify-center rounded-xl border-2 bg-gray-500 duration-300 hover:scale-125 hover:rounded-md"
          >
            Task Page
          </Link>
          <Link
            href="/"
            className="flex h-10 w-40 items-center justify-center rounded-xl border-2 bg-gray-500 duration-300 hover:scale-125 hover:rounded-md"
          >
            About
          </Link>
          <Link
            href="/"
            className="flex h-10 w-40 items-center justify-center rounded-xl border-2 bg-gray-500 duration-300 hover:scale-125 hover:rounded-md"
          >
            Contact
          </Link>
        </div>
        <button
          className="absolute right-0 top-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <RightArrow /> : <LeftArrow />}
        </button>
      </div>
    </div>
  );
}
