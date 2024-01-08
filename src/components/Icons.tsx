import React from "react";
import { FaInstagram } from "react-icons/fa";

const Icons = ({ icon }) => {
  return (
    <button className="  select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-5 px-5 bg-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">
      {icon}
    </button>
  );
};

export default Icons;
