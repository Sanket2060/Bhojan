import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Sidebar = ({ menus }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex gap-6">
      {isMobile && (
        <div className="fixed top-0 right-0 p-3">
          <HiMenuAlt3
            size={24}
            className="cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={handleToggle}
          />
        </div>
      )}
      {isMobile && open && (
        <div className="fixed inset-0 bg-[#ddd4d4] z-50 p-5 font-semibold text-xl overflow-y-auto">
          <div className="py-3 flex justify-between items-center">
            <p>Khana.com</p>
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 justify-end right-0">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin &&
                  "pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md `}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2 className={`whitespace-pre  ${!open && "translate-x-28"}`}>
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      )}
      {!isMobile && (
        <div
          className={`min-h-screen ${
            open ? "w-72 bg-[#ddd4d4]" : "w-16"
          } duration-500 px-4 flex flex-col font-semibold p-1 overflow-y-auto`}
        >
          <div className="py-3 flex justify-between items-center">
            <p
              className={`font-bold text-xl cursor-pointer ${
                !open && "hidden"
              }`}
              onClick={handleToggle}
            >
              Khana
            </p>
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          <div
            className={`mt-4 flex flex-col gap-4 relative ${!open && "hidden"}`}
          >
            <div className="mt-4 flex flex-col gap-4 justify-end right-0">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin &&
                    "pt-5 mt-2 border-t border-[#bca4a4] md:border-spacing-4"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-white rounded-md`}
                >
                  <div>{React.createElement(menu.icon, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre  ${
                      !open && "translate-x-28"
                    }`}
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