import React, { useEffect, useState } from "react";
import User from "../assets/Catring.jpg";

const LandingpageLeaderboard = ({ topContributors }) => {
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    console.log("Image height:", imageHeight);
  }, [imageHeight]);

  const handleImageLoad = (event) => {
    const height = event.target.height;
    setImageHeight(height);
  };

  return (
    <div className="flex flex-col bg-gray-100 pt-10">
      {topContributors?.map((contributor, index) =>
        index <= 2 ? (
          <div
            key={index}
            className={`wrapper flex flex-col items-center lg:flex-row justify-between ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            style={{
              width: "100%",
            }}
          >
            <div className="lg:w-[32rem] w-[100%]">
              <div
                className={`border-x-orange-300 ${
                  index === 1 ? "border-s-8" : "border-e-8"
                } rounded-full w-[100%] h-[100%] relative`}
              >
                <img
                  className={`object-cover rounded-full ${
                    imageHeight && imageHeight < 900 ? "bg-blue-500" : ""
                  }`}
                  src={contributor.avatar}
                  alt="Contributor"
                  onLoad={handleImageLoad}
                  style={{
                    height: imageHeight && imageHeight < 900
                      ? `${imageHeight}px`
                      : "100%"
                  }}
                />
              </div>
            </div>
            <div
              className={`lg:w-10/12 ${
                index % 2 === 0 ? "lg:text-left" : "lg:text-right"
              }`}
            >
              <div className="p-3">
                <div className="text-2xl text-[#ff4c70] font-bold">
                  {contributor.name}
                </div>
                <div className="text-xl text-grey-600">
                  {contributor.address}
                </div>
              </div>
            </div>
          </div>
        ) : <span key={index}></span>
      )}
    </div>
  );
};

export default LandingpageLeaderboard;
