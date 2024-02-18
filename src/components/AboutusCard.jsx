import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Icons from "./Icons";

function AboutUsCard(props) {
  const icons = [FaInstagram, FaFacebook, FaTwitter];
  const social = [props.instagram, props.facebook, props.twitter];

  return (
    <div className="bg-cyan-50 m-4 dark:bg-[#1F1A24] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center pb-6">
        <img
          className="w-24 h-24 rounded-full mr-4 border-2 border-amber-300"
          src={props.image}
          alt="developer"
        />
        <div>
          <p className="text-stone-700 dark:text-stone-200 font-bold text-xl mt-2">
            {props.name}
          </p>
          <p className="text-blue-600 dark:text-blue-300 text-lg mb-2">
            {props.field}
          </p>
        </div>
      </div>
      <div className="text-gray-600 dark:text-gray-300 mb-6">
        <p className="mb-4">{props.desp}</p>
        <hr className="w-full h-1 bg-gray-300 border-0 rounded-md dark:bg-gray-700" />
      </div>
      <div className="flex justify-center space-x-6">
        {icons.map((Icon, index) => (
          <a
            key={index}
            href={social[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-200"
          >
            <Icons key={index} icon={<Icon size="24" />} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default AboutUsCard;
