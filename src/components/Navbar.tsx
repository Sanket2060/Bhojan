import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";

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

            <button className="align-middle hidden lg:block select-none  py-3 px-10 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[#261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
              Login
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
