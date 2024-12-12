import React from "react";

const ContactPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5">
      <div>Contact Page</div>
      <div className="text-center">
        This application is a passion project created by Bret Miller.<br/>If you
        have any questions, suggestions, etc please reach out via email at
        bret.miller2010@gmail.com
      </div>
      <div className="space-x-5">
        <a href="https://www.linkedin.com/in/bretmiller2010/">
          <span className="underline hover:text-blue-600">LinkedIn</span>
        </a>
        <a href="https://github.com/bret-miller2010"><span className="underline hover:text-blue-600">Github</span></a>
      </div>
    </div>
  );
};

export default ContactPage;
