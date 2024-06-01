import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { logout } from "../features/user/authSlice";

export const Sidebar = ({ menus, handleToggle, isOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
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
            <p>Khana</p>
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
            <div
              className="pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md dark:hover:text-white dark:hover:bg-stone-600 cursor-pointer"
              onClick={toggleDarkMode}
            >
              <div>{darkMode ? <IoMdSunny /> : <IoMdMoon />}</div>

              <h2
                className={`whitespace-pre px-1 ${!open && "translate-x-28"}`}
              >
                Change Theme
              </h2>
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
                  //console.log("Clicked");
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
          <h2
            className={`whitespace-pre px-1 cursor-pointer ${
              !open && "translate-x-28"
            }`}
            onClick={async () => {
              try {
                navigate("/");
                const response = await axios.post(
                  "  https://khana.me/api/v1/users/logout",

                  {},
                  {
                    withCredentials: true, // Include credentials (cookies) in the request
                  }
                );
                // .then(response=>{
                //console.log(response);
                // })
                // .then(
                dispatch(logout());
                // )
                // Perform any additional actions after logout
              } catch (error) {
                //console.log("Error at logging user out:", error);
              }
            }}
          >
            Logout
          </h2>
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
              <div
                className="pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md dark:hover:text-white dark:hover:bg-stone-600 cursor-pointer"
                onClick={toggleDarkMode}
              >
                <div>{darkMode ? <IoMdSunny /> : <IoMdMoon />}</div>

                <h2
                  className={`whitespace-pre px-1 ${!open && "translate-x-28"}`}
                >
                  Change Theme
                </h2>
              </div>

              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin &&
                    "pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md dark:hover:text-white dark:hover:bg-stone-600`}
                  // onClick={(e)=>

                  // {
                  // if (menu.name='Logout')
                  // {
                  //   window.reload()
                  //   e.stopPropagation();
                  //   console.log("logout called");
                  // }
                  // }}
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
            <h2
              className={`whitespace-pre px-1 cursor-pointer ${
                !open && "translate-x-28"
              }`}
              onClick={async () => {
                try {
                  navigate("/");
                  const response = await axios.post(
                    "  https://khana.me/api/v1/users/logout",
                    {},
                    {
                      withCredentials: true, // Include credentials (cookies) in the request
                    }
                  );
                  // .then(response=>{
                  //console.log(response);
                  // })
                  // .then(
                  dispatch(logout());
                  // )
                  // Perform any additional actions after logout
                } catch (error) {
                  //console.log("Error at logging user out:", error);
                }
              }}
            >
              Logout
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};
