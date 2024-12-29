import React from "react";

const ContactPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center space-y-40">
      <div className="rounded-lg bg-[#e5e7eb] px-10 py-5 text-center shadow-lg mt-20">
        This application is a passion project created by Bret Miller.
        <br />
        It was created using Next.js, Tailwind CSS, and TypeScript.
        <br />
        If you have any questions, suggestions, etc please reach out via email
        at bret.miller2010@gmail.com
      </div>
      <div className="rounded-lg bg-[#e5e7eb] px-10 py-5 text-center shadow-lg space-x-5">
        <a href="https://www.linkedin.com/in/bretmiller2010/">
          <span className="underline hover:text-blue-600">LinkedIn</span>
        </a>
        <a href="https://github.com/bret-miller2010">
          <span className="underline hover:text-blue-600">Github</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
