import React from "react";
import { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const userDetails = useSelector((state) => state.auth.userDetails);
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
      <ul className="wrapper flex items-center justify-between mt-3">
        <li>
          <Link className="font-bold text-4xl md:text-5xl" to="/">
            Khana
          </Link>
        </li>
        <div className=" flex-row gap-x-8 hidden text-xl lg:flex pt-2">
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
        <li>
          <a className=" " href="#">
            <button
              className="lg:hidden font:bold"
              onClick={handleMenuToggle}
              type="button"
            >
              <RiMenu3Line size={32} className="lg:hidden font:bold" />
            </button>
            <div>
              {/* Other components or content */}
              {authStatus ? (
                userDetails.isDonor ? (
                  <Link to="/donor">
                    <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link to="/volunteer">
                    <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
                      Dashboard
                    </button>
                  </Link>
                )
              ) : (
                <Link to="/login">
                  <button className="align-middle hidden lg:block select-none py-3 px-10 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[#261750] text-white shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </a>
        </li>
      </ul>
      {menuOpen && (
        <div className="bg-white absolute w-screen h-[95vh] lg:hidden z-20">
          <ul className=" flex-col gap-y-6 text-xl flex  mt-[30vh]  ">
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
                AboutUs
              </Link>
            </li>

            <li className="self-center mt-[10vh]">
              <Link to="/login">
                {" "}
                <button className="align-middle  select-none  py-3 px-14 text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl  bg-[#261750] text-white  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full shadow-xl ring-1 ring-slate-900/5">
                  Login
                </button>
              </Link>
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
