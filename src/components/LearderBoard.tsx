// Leaderboard.js

import React from "react";

const Leaderboard = ({ topContributors }) => {
  return (
    <div className=" flex flex-col bg-gray-100  p-10">
      <h2 className="self-center text-3xl   mb-6 pt-8 font-semibold">
        Top Contributors
      </h2>
      <div className="wrapper flex flex-col lg:flex-row gap-8 ">
        {topContributors.map((contributor, index) => (
          <div
            key={index}
            className={`bg-white rounded-md p-6 shadow-md flex flex-col items-center self-center ${
              index === 1 ? "" : ""
            }`}
            style={{
              width: index === 1 ? "340px" : "280px",
              padding: index === 1 ? "40px" : "30px",
            }}
          >
            <div
              className={`text-lg font-extrabold ${
                index === 1 ? "text-[red]" : "text-gray-800"
              }`}
            >
              {contributor.companyName}
            </div>
            <div className="text-sm text-gray-600">
              Location: {contributor.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
