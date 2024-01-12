import React from "react";

const WelcomeBack = ({ userName }) => {
  return (
    <div className="welcome-back-container">
      <h1 className="mb-4 font-extrabold leading-none tracking-tight text-4xl md:text-3xl text-shadow-lg text-center">
        Welcome Back, {userName}!
      </h1>
    </div>
  );
};

export default WelcomeBack;
