import React, { useState } from "react";
import Notification from "./Notification";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (icon, message, duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications([...notifications, { id, icon, message, duration }]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="fixed top-5 right-5 space-y-4">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          icon={notification.icon}
          message={notification.message}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
      <button
        onClick={() =>
          addNotification("🔔", "This is a sample notification message!", 5000)
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Trigger Notification
      </button>
    </div>
  );
};

export default NotificationContainer;
