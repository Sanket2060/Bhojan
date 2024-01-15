import React from "react";

const WelcomeBack = ({ userName }) => {
  return (
    <div className="welcome-back-container">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center text-shadow-md md:text-5xl">
        Welcome Back, {userName}!
      </h1>
      <div className="welcome-back-wave">
        <svg width="100%" height="50px" viewBox="0 0 100 50">
          <path fill="royalblue" d="M0 40h100v10H0z" className="wave-anim" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeBack;
