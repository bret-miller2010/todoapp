import React from "react";
import prisma from "../lib/db"

const AboutPage = async () => {

  const posts = await prisma.user.findMany();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center bg-[#e5e7eb] rounded-lg px-10 py-5 shadow-lg">
       The purpose of this application is to provide a very lightweight todo application that can be used to track tasks and their due dates. The application is built using Next.js and Tailwind CSS.<br/>
       The application is a work in progress that will be updated over time.<br/>
       The home page will display various statistics about the tasks that have been added to the application, the Task Page will display all tasks that have been added to the application, and the Contact page has information to reach out.
      </div>
      <div>{posts.map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.task}</div>
          </div>
        );
      })}</div>
    </div>
  );
};

export default AboutPage;
