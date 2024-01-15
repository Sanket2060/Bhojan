import React from "react";
import PartnerSingleBox from "./PartnerSingleBox"; // Import your Partner component

const AutoScrollPartners = () => {
  return (
    <div className=" wrapper relative overflow-hidden">
      <div
        className="flex items-center space-x-8 relative z-0"
        style={{
          width: `${(3 + 1) * (1800 + 8)}px`, // Added one more set of partners for the loop
          whiteSpace: "nowrap",
          animation: "scroll 60s linear infinite", // Adjust the duration based on your preference
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <PartnerSingleBox
            key={index}
            companyName={`Partner ${(index % 10) + 1}`}
            location={`Location ${(index % 10) + 1}`}
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
          background: linear-gradient(to left, rgba(255, 255, 255, 0), rgb(243, 244, 246)
          90%);
        }

        .gradient-right {
          background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(243, 244, 246) 90%);
        }
      `}</style>
    </div>
  );
};

export default AutoScrollPartners;
