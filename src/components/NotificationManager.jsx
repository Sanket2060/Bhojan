import React, { useState, useEffect } from "react";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";

const Notification = ({ type, message, onClose }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded-md shadow-md
        ${
          type === "success"
            ? "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
            : "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200"
        }`}
    >
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-lg">
        <IoClose />
      </button>
    </div>
  );
};

const NotificationContainer = ({ notifications, clearNotification }) => {
  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-600 dark:text-gray-200">
        No new notifications
      </div>
    );
  }

  return (
    <div className="max-h-64 overflow-y-auto">
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          type={notification.type}
          message={notification.message}
          onClose={() => clearNotification(index)}
        />
      ))}
    </div>
  );
};

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [viewedNotificationsCount, setViewedNotificationsCount] = useState(0);

  useEffect(() => {
    // Add some default dummy notifications
    setNotifications([
      { type: "success", message: "Notification 1" },
      { type: "error", message: "Notification 2" },
      { type: "success", message: "Notification 3" },
    ]);
  }, []);

  const clearNotification = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const handleViewNotifications = () => {
    setShowNotifications(true);
    setViewedNotificationsCount(notifications.length);
  };

  return (
    <div className="relative">
      <button
        className="relative flex items-center gap-2 text-gray-900 dark:text-gray-200"
        onClick={handleViewNotifications}
      >
        <div className="relative">
          <IoNotificationsOutline size={24} />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length - viewedNotificationsCount}
            </span>
          )}
        </div>
        <span>Notifications</span>
      </button>
      {showNotifications && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
          <NotificationContainer
            notifications={notifications}
            clearNotification={clearNotification}
          />
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className="w-full mt-4 p-2 text-gray-900 dark:text-gray-200"
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationManager;
