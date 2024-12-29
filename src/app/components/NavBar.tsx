"use client";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="my-10 flex justify-center text-white">
      <div className="flex h-40 items-center justify-center space-x-20 rounded-md border-2 border-black bg-gray-200 px-10">
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
          href="/Contact"
          className="flex h-10 w-40 items-center justify-center rounded-xl border-2 bg-gray-500 duration-300 hover:scale-125 hover:rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
