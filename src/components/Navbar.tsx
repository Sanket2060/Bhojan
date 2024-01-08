import React from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=" ">
      <ul className="wrapper flex items-center justify-between">
        <li>
          <a className="font-bold text-4xl" href="#">
            Khana
          </a>
        </li>
        <div className="flex flex-row gap-x-6 hidden lg:flex">
          <li>
            <a className="" href="#">
              Placeholder
            </a>
          </li>
          <li>
            <a className="" href="#">
              Placeholder
            </a>
          </li>
          <li>
            <a className="" href="#">
              Placeholder
            </a>
          </li>
        </div>
        <li>
          <a className=" " href="#">
            <RiMenu3Line size={32} className="lg:hidden font:bold" />
            <button className="hidden lg:flex align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">
              Join the helpers
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
