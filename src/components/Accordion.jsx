import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const [countdown, setCountdown] = useState(300); // 300 seconds = 5 minutes

  const handleToggle = (index) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );
  };

  useEffect(() => {
    let timer;
    if (countdown > 0 && expandedItem !== null) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [countdown, expandedItem]);

  useEffect(() => {
    // Reset countdown when an item is expanded
    if (expandedItem !== null) {
      setCountdown(300); // Reset to 5 minutes
    }
  }, [expandedItem]);

  useEffect(() => {
    // Auto-close the box when the countdown reaches 0
    if (countdown === 0) {
      setExpandedItem(null);
    }
  }, [countdown]);

  return (
    <div className="relative bg-white shadow-md rounded-md p-4 mb-4 md:flex md:flex-wrap">
      {items.length === 0 ? (
        <p className="text-gray-500">No active listings.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="mb-8 md:w-1/2 md:p-4 relative transition-all duration-300 ease-in-out">
            <button
              className="flex items-center justify-between w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-0 relative"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-medium text-gray-900">{item.title}</span>
              <svg
                className={`w-4 h-4 ml-2 ${
                  expandedItem === index ? "text-indigo-500 rotate-180" : "text-gray-400"
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
            {expandedItem === index && (
              <div className="mt-3 prose max-h-96 overflow-y-auto opacity-100 transition-all duration-300 ease-in-out">
                <p>Name: {item.name}</p>
                <p>Location: {item.location}</p>
                <p>Number: {item.number}</p>
                <p>Closing Time: {item.closingTime}</p>
                <div className="text-right text-xs text-gray-500 mt-2 p-2">
                  {item.description}<br />
                  Listed on: {item.listedOn}
                </div>
                <div className="text-right text-xs text-gray-500 mt-2 p-2">
                  Countdown: {Math.floor(countdown / 60)}:{countdown % 60} min
                </div>
              </div>
            )}
            {expandedItem !== index && (
              <div className="opacity-0">
                {item.content}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      listedOn: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      closingTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
