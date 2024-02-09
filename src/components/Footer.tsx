import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import Icons from "./Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [FaInstagram, SlSocialFacebook, FaXTwitter];
  return (
    <div className="overflow-hidden ">
      <div className="flex flex-col relative  bg-[#332163] text-white w-[160%] rounded-tr-[60%] rounded-tl-[50%] left-[-30%] lg:w-[110%] lg:rounded-tr-[90%] lg:rounded-tl-[60%] lg:left-[-5%] ">
        <div className="p-20"></div>
        <div className="font-extrabold text-xl md:text-3xl lg:text-3xl  text-center">
          Connecting Plates, Eliminating Waste
          <br />
          Every Bite Rescued makes a Difference
        </div>
        <div className="m-10"></div>
        <Link to="./signup" className="self-center items align-middle">
          <button className="self-center items align-middle select-none  text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-4 px-8 bg-white text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full border-8">
            Join the community
          </button>
        </Link>
        <hr className="w-9/12 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-white"></hr>
        <div className="flex flex-row gap-x-8 place-content-center pb-8">
          <div>Our goal</div>

          <div>Our impact</div>
          <div>Contact us</div>
        </div>
        <div className="flex flex-row justify-center items-center">
          {icons.map((Icon, index) => (
            <div className="p-3">
              <Icons
                key={index}
                icon={<Icon size="17" style={{ color: "black" }} />}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-x-8 place-content-center pt-4 pb-8">
          <div>Terms and Condition</div>

          <div>Liscence Agreement</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
