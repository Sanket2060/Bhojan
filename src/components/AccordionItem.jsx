import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
// import Button from "./Button";

import { toast, ToastContainer } from "react-toastify";

function AccordionItem({ item, index, expanded, onToggle, onDistribute }) {
  const [countdown, setCountdown] = useState(5*60); // 5 minutes in seconds
  const [capVal, setCapVal] = useState(null);

  //activate for recaptcha
  const handleRecaptchaChange = (value) => {
    setCapVal(value);
    console.log("reCAPTCHA value:", value);
  };
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  useEffect(() => {
  
    // Simulate loading delay
    setTimeout(() => {
      setIsRecaptchaLoaded(true);
    }, 2000); // Adjust delay as needed
  }, []);

  useEffect(() => {
    let countdownInterval;

    if (expanded) {
      // Start the countdown when the accordion item is expanded
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [expanded]);

  useEffect(() => {
    // Close the accordion when the countdown reaches 0
    if (countdown === 0 && expanded) {
      onToggle(false);
      toast.warn("Booking Cancelled");
      toast.error("Booking this item is blocked please try another item");
      
    }
  }, [countdown, index, onToggle]);

  const handleButtonClick = async () => {
    if (!capVal) {
      console.error("reCAPTCHA validation failed");
      // Simulating server-side verification delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return;
    }
    onToggle(index);
    onDistribute(index);
    toast.success("Distribution successful!");
  };

  // const handleConfirmAction = () => {
  //   // Only proceed with the action if the state is still true
  //   if (isSure) {
  //     onToggle(index);
  //     onDistribute(index);
  //     setIsSure(false); // Reset the state after the action is performed
  //   }
  // };

  const containerStyle = {
    backgroundColor: "bg-white",
    shadow: "shadow-md", 
  };

  return (
    <div
      className={`${expanded ? "bg-green-200" : ""}${
        containerStyle.backgroundColor
      } ${containerStyle.shadow} ${"sm:p-3"}`}
    >
      <button
        className="flex items-center justify-between w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-0 relative"
        onClick={() => onToggle(index)}
      >
        <span className="text-lg font-medium text-gray-900">
          {item.title}{" "}
          <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
            {item.plates} Plates
          </span>
        </span>
        <svg
          className={`w-4 h-4 ml-2 ${
            expanded ? "text-indigo-500 rotate-180" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {expanded && (
        <div>
          {/* Content of the accordion item */}
          <p>Name: {item.name}</p>
          <p>Location: {item.location}</p>
          <p>Number: {item.number}</p>
          <p>Closing Time: {item.closingTime}</p>

          <div className="flex justify-between items-center text-xs text-gray-500 mt-2 p-2">
            <p>Listed on: {item.listedOn}</p>
            <p>
              Booked for: {Math.floor(countdown / 60)}:{countdown % 60} minutes
            </p>
          </div>
          <div>
            {isRecaptchaLoaded ? (
              <ReCAPTCHA
                sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
                onChange={handleRecaptchaChange}
              />
            ) : (
            <div className="recaptcha-loading">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading reCAPTCHA...</span>
              </div>
            </div>
           )} 
          </div>

          <ToastContainer />
          <div className="flex justify-center p-4">
            <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              disabled={!capVal}    
              onClick={() => {
                toast.success("Alerted Donor - Pending Distribution");
                if (capVal) {
                handleButtonClick();
                } else {
                console.error("reCAPTCHA validation failed");
                
                }
              }}
              
            >I'll distribute</button>
          </div>
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    plates: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    closingTime: PropTypes.string.isRequired,
    listedOn: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDistribute: PropTypes.func.isRequired,
};

export default AccordionItem;