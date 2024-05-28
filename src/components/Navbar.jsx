import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiNotification3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    // Example notifications
    { id: 1, message: "New message from John", viewed: false },
    { id: 2, message: "Your order has been shipped", viewed: false },
  ]);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNotificationsToggle = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function getInitialDarkModePreference() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkModePreference());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const clearNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: Date.now(), message: "New notification", viewed: false },
      ]);
    }, [100000]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark:bg-[#121212]">
      <ul className="wrapper flex items-center justify-between pt-3">
        <li>
          <Link
            className="font-bold text-4xl md:text-5xl dark:text-white"
            to="/"
          >
            Khana
          </Link>
        </li>
        <div className="flex-row gap-x-8 hidden text-xl lg:flex pt-2">
          <li>
            <Link className="link" to="/helpus">
              Help Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/leaderboard">
              Leaderboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutus">
              About Us
            </Link>
          </li>
        </div>
        <div className="flex flex-row  items-center gap-4">
          <li className="relative">
            <button
              onClick={handleNotificationsToggle}
              className="relative top-1"
            >
              <RiNotification3Line
                size={28}
                color={darkMode ? "white" : "black"}
              />
              {notifications.some((notification) => !notification.viewed) && (
                <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
              )}
            </button>
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-40">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className="flex justify-between items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-opacity duration-300 ease-in-out"
                      >
                        {notification.message}
                        <button
                          onClick={() => clearNotification(notification.id)}
                          className="text-red-500 dark:text-red-400"
                        >
                          Clear
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="p-4 text-center text-gray-500 dark:text-gray-400">
                      No new notifications
                    </li>
                  )}
                  {notifications.length > 0 && (
                    <li className="p-4 text-center">
                      <button
                        onClick={clearAllNotifications}
                        className="text-blue-500 dark:text-blue-400"
                      >
                        Clear All Notifications
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              className="lg:hidden font:bold"
              onClick={handleMenuToggle}
              type="button"
            >
              <RiMenu3Line size={32} color={darkMode ? "white" : "black"} />
            </button>
            <div className="hidden lg:flex">
              {authStatus ? (
                userDetails.isDonor ? (
                  <Link to="/donor">
                    <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link to="/volunteer">
                    <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                      Dashboard
                    </button>
                  </Link>
                )
              ) : (
                <Link to="/login">
                  <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="items-center hidden lg:block focus:outline-none px-2 py-1 "
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`relative top-1 inline-block w-[88px] h-12 rounded-full focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out ${
                  darkMode ? "bg-gray-500" : "bg-gray-700"
                }`}
              >
                <span
                  className={`absolute my-2 mx-1 left-0 inline-block w-10 h-10 text-2xl rounded-full transform transition-transform duration-500 ease-out ${
                    darkMode ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {darkMode ? "🌙" : "☀️"}
                </span>
                <span
                  className={`absolute m-1 left-0 inline-block w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    darkMode
                      ? "translate-x-full bg-white"
                      : "translate-x-0 bg-gray-300"
                  }`}
                ></span>
              </span>
              <span className={`ml-2 text-gray-700 dark:text-gray-200`}></span>
            </button>
          </li>
        </div>
      </ul>
      {menuOpen && (
        <div className="bg-white absolute w-screen h-[95vh] lg:hidden z-20 dark:bg-[#121212]">
          <ul className="flex-col gap-y-6 text-xl flex mt-[16vh]">
            <li className="mx-auto mb-10">
              <button
                onClick={toggleDarkMode}
                className="flex focus:outline-none px-2 py-1"
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                  className={`relative inline-block w-[88px] h-12 rounded-full focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out ${
                    darkMode ? "bg-gray-500" : "bg-gray-700"
                  }`}
                >
                  <span
                    className={`absolute my-2 mx-1 left-0 inline-block w-10 h-10 text-2xl rounded-full transform transition-transform duration-500 ease-out ${
                      darkMode ? "translate-x-0" : "translate-x-full"
                    }`}
                  >
                    {darkMode ? "🌙" : "☀️"}
                  </span>
                  <span
                    className={`absolute m-1 left-0 inline-block w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                      darkMode
                        ? "translate-x-full bg-white"
                        : "translate-x-0 bg-gray-300"
                    }`}
                  ></span>
                </span>
                <span
                  className={`ml-2 text-gray-700 dark:text-gray-200`}
                ></span>
              </button>
            </li>
            <li className="self-center">
              <Link className="link" to="/helpus">
                Help us
              </Link>
            </li>
            <li className="self-center">
              <Link className="link" to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li className="self-center">
              <Link className="link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="self-center mt-[10vh]">
              <div className="flex flex-row gap-2">
                {authStatus ? (
                  userDetails.isDonor ? (
                    <Link to="/donor">
                      <button className="align-middle select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                        Dashboard
                      </button>
                    </Link>
                  ) : (
                    <Link to="/volunteer">
                      <button className="align-middle select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                        Dashboard
                      </button>
                    </Link>
                  )
                ) : (
                  <Link to="/login">
                    <button className="align-middle select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5 dark:bg-[#452e82]">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </li>
          </ul>
          <div className="overflow-hidden pt-10 pl-10">
            <div className="h-[140vw] left-[50vw] bg-yellow-100 rounded-[70vw] w-[140vw] dark:bg-gray-800"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
