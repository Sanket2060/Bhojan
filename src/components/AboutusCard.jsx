import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import Icons from "./Icons";
function AboutUsCard(props) {
  const icons = [FaInstagram, SlSocialFacebook, FaXTwitter];
  const social = [props.instagram, props.facebook, props.twitter];
  return (
    <div className="bg-gray-100 p-10 flex flex-col rounded-2xl shadow-xl justify-center items-center container mx-auto  w-[24rem]">
      <img
        className=" mb-5  border-4 flex  w-40 h-40 rounded-full border-x-amber-300 "
        src={props.image}
        alt="developer1"
      />
      {/* <img src={props.image1}/> */}

      <p className="mb-4  flex justify-center text-stone-700 font-bold text-3xl ">
        {props.name}
      </p>

      <detail className="m-1 pt-2 text-center">{props.desp}</detail>

      <footer className="flex justify-center font-bold text-blue-600 text-xl">
        {props.field}
      </footer>
      <span className="flex">
        <div className="flex flex-row justify-center items-center">
          {icons.map((Icon, index) => (
            <div className="p-3">
              <a href={social[index]} target="_blank">
                <Icons
                  key={index}
                  icon={<Icon size="17" style={{ color: "black" }} />}
                />
              </a>
            </div>
          ))}
        </div>
      </span>
    </div>
  );
}

export default AboutUsCard;
