import React, { useEffect, useState } from "react";

const LandingpageLeaderboard = ({ topContributors }) => {
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    console.log("Image height:", imageHeight);
  }, [imageHeight]);

  const handleImageLoad = (event) => {
    const { height } = event.target;
    setImageHeight(height);
  };

  return (
    <div className="flex flex-col bg-gray-100 pt-10 dark:bg-[#1F1A24]">
      {topContributors?.slice(0, 3).map((contributor, index) => (
        <div
          key={index}
          className={`wrapper flex flex-col items-center lg:flex-row justify-between w-screen px-12 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div className="block relative hover:scale-105 transform duration-200  ">
            <div
              className={`border-x-orange-300 shadow-2xl  ${
                index === 1 ? "md:border-s-[10px]" : "md:border-e-[10px]"
              } rounded-full relative`}
            >
              <img
                className={`object-cover shadow-2xl  rounded-full h-[21rem] w-[21rem] 
                {//"$"{
                  //imageHeight && imageHeight < 900 ? "bg-blue-500" : ""
                //}
              }

                `}
                src={contributor.avatar}
                alt="Contributor"
                onLoad={handleImageLoad}
                onError={() => console.error("Image loading failed")}
                //style={{
                //  height:
                //    imageHeight && imageHeight < 900
                //     ? `${imageHeight}px`
                //     : "100%",
                //}}
              />
            </div>
          </div>
          <div
            className={`lg:w-9/12 ${
              index % 2 === 0 ? "lg:text-left" : "lg:text-right"
            }`}
          >
            <div className="p-3">
              <div className="text-3xl  text-[#ff4c70] font-bold">
                {contributor.name}
              </div>
              <div className="text-xl text-grey-600 dark:text-gray-200">
                {contributor.address}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingpageLeaderboard;
