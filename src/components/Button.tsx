import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="align-middle bg-[#261750] select-none font-bold  py-6 px-10 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  ">
      {buttonText}
    </button>
  );
};

export default Button;
