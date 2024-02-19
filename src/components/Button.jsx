import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, text, variant }) => {
  const buttonStyles = {
    base: "align-middle bg-[#261750] select-none font-bold  py-6 px-10 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full dark:bg-[#452e82]",
    complete:
      "align-middle select-none transition-all bg-green-300  py-3 px-4 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full relative dark:bg-[#cccccc] dark:text-gray-900",
    cancel:
      "align-middle select-none font-sans font-semibold py-3 px-8 text-center transition-all bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full",
      viewDetail:
      `align-middle text-center select-none transition-all py-1.5 px-3 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full relative bg-blue-500 text-white ${text ? '' : ''}`,

   
  };

  return (
    <button onClick={onClick} className={buttonStyles[variant || "base"]}>
      {variant === "complete" && (
        <div className="flex items-center">
          <div className="tick-symbol w-6 h-6 bg-[#201313] rounded-full text-white flex items-center justify-center ">
            &#10004;
          </div>
          <div className="text-next-to-tick ml-2.5 text-sm mr-2">Completed</div>
        </div>
      )}
      {variant !== "complete" && text}

    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button;
