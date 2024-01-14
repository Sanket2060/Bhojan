import React from "react";
import User from "../assets/Catring.jpg";

const LandingpageLeaderboard = ({ topContributors }) => {
  return (
    <div className="flex flex-col  bg-gray-100 pt-10">
      {topContributors.map((contributor, index) => (
        <div
          key={index}
          className={` wrapper  flex flex-col items-center lg:flex-row justify-between  ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          style={{
            width: "100%",
          }}
        >
          <div className="lg:w-[32rem] w-[100%]">
            <div className="border-orange-300 border-4 rounded-full w-[100%] h-[100%] relative left-0 ">
              <img
                className=" object-cover rounded-full"
                src={User} // temporarily using User, replace with contributor.image
                alt="Contributor"
              />
            </div>
          </div>
          <div
            className={`lg:w-10/12  ${
              index % 2 === 0 ? "lg:text-left" : "lg:text-right"
            }`}
          >
            <div className=" p-3 ">
              <div className="text-2xl text-[#ff4c70] font-bold">
                {contributor.companyName}
              </div>
              <div className="text-xl text-grey-600">
                {contributor.location}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingpageLeaderboard;