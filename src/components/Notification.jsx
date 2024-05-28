import React, { useEffect } from "react";

const Notification = ({ icon, message, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="notification-card bg-white border border-gray-300 rounded-lg shadow-md p-4 flex items-center space-x-4 transition duration-300 ease-in-out mb-4">
      <div className="icon text-xl">{icon}</div>
      <div className="message flex-grow text-gray-700">{message}</div>
      <button
        className="close text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
