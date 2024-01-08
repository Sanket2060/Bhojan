import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="align-middle select-none font-sans font-bold py-6 px-8 text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">
      {buttonText}
    </button>
  );
};

export default Button;
