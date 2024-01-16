import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
  return (
    <div className=" ">
      <ul className="wrapper flex items-center justify-between">
        <li>
          <a className="font-bold text-5xl" href="#">
            Khana
          </a>
        </li>
        <div className=" flex-row gap-x-6 hidden text-xl lg:flex">
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
            <button
              className="lg:hidden font:bold"
              onClick={handleMenuToggle}
              type="button"
            >
              <RiMenu3Line size={32} className="lg:hidden font:bold" />
            </button>
          <Link to='/login'> <button className="align-middle hidden lg:block select-none  py-3 px-10 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[#261750] text-white  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
              Login
            </button></Link>
          </a>
        </li>
      </ul>
      {menuOpen && (
        <div className="bg-white absolute w-screen h-[95vh] lg:hidden ">
          <ul className=" flex-col gap-y-6 text-xl flex  mt-[30vh]  ">
            <li className="self-center  ">
              <a className="" href="#">
                Placeholder
              </a>
            </li>
            <li className="self-center">
              <a className="" href="#">
                Placeholder
              </a>
            </li>
            <li className="self-center">
              <a className="" href="#">
                Placeholder
              </a>
            </li>
            <li className="self-center mt-[10vh]">
            <Link to='/login'>  <button className="align-middle  select-none  py-3 px-14 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[#261750] text-white  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
                Login
              </button></Link>
            </li>
          </ul>
          <div className="overflow-hidden pt-10 pl-10">
            <div className="h-[140vw] left-[50vw] bg-yellow-100 rounded-[70vw] w-[140vw]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
