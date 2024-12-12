import React from "react";

const AboutPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5">
      <div>About Page</div>
      <div className="text-center">
       The purpose of this application is to provide a very lightweight todo application that can be used to track tasks and their due dates. The application is built using Next.js and Tailwind CSS.<br/>
       The application is a work in progress that will be updated over time.<br/>
       The home page will display various statistics about the tasks that have been added to the application, the Task Page will display all tasks that have been added to the application, and the Contact page has information to reach out.
      </div>
    </div>
  );
};

export default AboutPage;
