import React, { useEffect } from "react";
import PartnerSingleBox from "./PartnerSingleBox"; // Import your Partner component

const AutoScrollPartners = ({ topContributorsData }) => {
  useEffect(() => {
    console.log("Top contributors data:", topContributorsData);
  }, [topContributorsData]);
  return (
    <div className="wrapper md:w-screen relative overflow-hidden">
      <div
        className="flex items-center space-x-8 relative z-0"
        style={{
          width: `${(1 + 1) * (1800 + 8)}px`,
          whiteSpace: "nowrap",
          animation: "scroll 60s linear infinite",
        }}
      >
        {topContributorsData?.map((contributor, index) => (
          <PartnerSingleBox
            key={index}
            companyName={contributor.name} // Assuming the contributor object has a 'name' property
            location={contributor.address} // Assuming the contributor object has an 'address' property
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-20 h-full gradient-left"></div>
      <div className="absolute top-0 right-0 w-20 h-full gradient-right"></div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .gradient-left {
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0),
            rgb(243, 244, 246) 90%
          );
        }

        .gradient-right {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgb(243, 244, 246) 90%
          );
        }
      `}</style>
    </div>
  );
};

export default AutoScrollPartners;
