
import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, text, variant }) => {
  const buttonStyles = {
    base: "align-middle select-none font-sans font-bold py-6 px-8 text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full",
    cancel: "align-middle select-none font-sans font-bold py-6 px-8 text-center uppercase transition-all bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
    // Add more variants as needed
  };

  return (
    <button onClick={onClick} className={buttonStyles[variant || "base"]}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired, 
  variant: PropTypes.string, 
};

export default Button;
