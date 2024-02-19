import React from "react";

const WelcomeBack = ({ userName }) => {
  return (
    <div className=" flex flex-col md:font-extrabold font-bold lg:text-4xl md:text-3xl  text-2xl  relative dark:bg-[#1F1A24]">
      <div className="mx-auto text-[#261750] dark:text-[#7c58de] self-center ">
      <span className="dark:bg-gradient-to-r dark:from-indigo-500 dark:via-pink-500 dark:to-purple-500 dark:text-transparent dark:bg-clip-text">
        Welcome Back,
        </span>
      </div>
      <div className="mx-auto text-[#ff4c70] self-center">{userName}</div>
    </div>
  );
};

export default WelcomeBack;
