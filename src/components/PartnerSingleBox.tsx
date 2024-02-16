import React from "react";

const PartnerSingleBox = ({ companyName, location }) => {
  return (
    <div className="overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer transform hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full py-6 px-8 dark:bg-[#2E2938]">
      <h2 className="text-xl font-bold mb-2 dark:text-gray-200">
        {companyName}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{location}</p>
    </div>
  );
};

export default PartnerSingleBox;
