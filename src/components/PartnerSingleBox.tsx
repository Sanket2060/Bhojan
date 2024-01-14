import React from "react";

const PartnerSingleBox = ({ companyName, location }) => {
  return (
    <div className="overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer transform hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full py-6 px-8">
      <h2 className="text-xl font-bold mb-2">{companyName}</h2>
      <p className="text-gray-600">{location}</p>
    </div>
  );
};

export default PartnerSingleBox;
