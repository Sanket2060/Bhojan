import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Switch from "react-switch";

import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const Sidebar = ({ menus, handleToggle, isOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const userDetails = useSelector((state) => state.auth.userDetails);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.removeItem("theme");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      localStorage.theme = "light";
    }
    // You can also save the user's preference in local storage here
  };
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ? false : true
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {isMobile && (
        <div className="fixed top-0 right-0 p-3 py-3">
          <HiMenuAlt3
            size={24}
            className="cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={handleToggle}
          />
        </div>
      )}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-[#ddd4d4] z-50 font-semibold text-xl overflow-y-auto dark:bg-stone-800 ">
          <div className="flex justify-between items-center wrapper dark:text-gray-200">
            <p>Khana.com</p>
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          <div
            className={`mt-4 flex flex-col gap-4 justify-end right-0 dark:text-gray-200 ${
              !open && "hidden"
            }`}
          >
                 <div className={`mt-4 flex items-center ${!isOpen && "hidden"}`}>
                <label
                  htmlFor="darkModeToggle"
                  className="cursor-pointer flex items-center px-2.5"
                >
                  <div className="flex items-center ml-auto">
                    <span
                      className={`mr-2 ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      <IoMdMoon />
                    </span>

                    <Switch
                      onChange={toggleDarkMode}
                      checked={darkMode}
                      className="react-switch"
                      id="darkModeToggle"
                      handleDiameter={25}
                      offHandleColor={darkMode ? "#262626" : "#ddd"}
                      uncheckedIcon={null}
                      checkedIcon={null}
                    />

                    <span
                      className={`ml-2 ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      <IoMdSunny />
                    </span>
                  </div>
                  <span
                    className={`mr-2 text-gray-700 dark:text-gray-200 px-7`}
                  >
                    Theme
                  </span>
                </label>
              </div>

            {menus?.map((menu, i) => (
              <div
                // to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin &&
                  "pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md dark:text-gray-200 dark:hover:bg-stone-600`}
                onClick={() => {
                  // e.preventDefault();
                  console.log("Clicked");
                  if (menu.onClick) {
                    menu.onClick();
                  }
                }}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2 className={`whitespace-pre  ${!open && "translate-x-28"}`}>
                  {menu?.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="fixed top-0 left-0 p-3">
          <HiMenuAlt3
            size={24}
            className="cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={handleToggle}
          />
        </div>
      )}
      {!isMobile && (
        <div
          className={`min-h-screen ${
            isOpen ? "w-72 bg-[#ddd4d4]" : " hidden"
          } duration-500 px-4 flex flex-col font-semibold p-1 overflow-y-auto fixed dark:bg-stone-800 `}
        >
          <div className="  py-3 flex justify-between items-center">
            <Link
              to="/"
              className={`font-bold text-xl cursor-pointer dark:text-gray-200 ${
                !open && "hidden"
              }`}
              // onClick={handleToggle}
            >
              Khana
            </Link>
            <HiMenuAlt3
              size={26}
              className="cursor-pointer dark:text-gray-200"
              onClick={handleToggle}
            />
          </div>

          <div
            className={`mt-4 flex flex-col gap-4 dark:text-gray-200 relative ${
              !open && "hidden"
            }`}
          >
            <div className="mt-4 flex flex-col gap-4 justify-end right-0">
              <div className={`mt-4 flex items-center ${!isOpen && "hidden"}`}>
                <label
                  htmlFor="darkModeToggle"
                  className="cursor-pointer flex items-center px-2.5"
                >
                  <div className="flex items-center ml-auto">
                    <span
                      className={`mr-2 ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      <IoMdMoon />
                    </span>

                    <Switch
                      onChange={toggleDarkMode}
                      checked={darkMode}
                      className="react-switch"
                      id="darkModeToggle"
                      handleDiameter={25}
                      offHandleColor={darkMode ? "#262626" : "#ddd"}
                      uncheckedIcon={null}
                      checkedIcon={null}
                    />

                    <span
                      className={`ml-2 ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      <IoMdSunny />
                    </span>
                  </div>
                  <span
                    className={`mr-2 text-gray-700 dark:text-gray-200 px-7`}
                  >
                    Theme
                  </span>
                </label>
              </div>

              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin &&
                    "pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md dark:hover:text-white dark:hover:bg-stone-600`}
                >
                  <div>{React.createElement(menu.icon, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre  ${!open && "translate-x-28"}`}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
