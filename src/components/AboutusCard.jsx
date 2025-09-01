import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Icons from "./Icons";

function AboutUsCard(props) {
  const icons = [FaInstagram, FaFacebook, FaTwitter, FaLinkedin];
  const social = [
    props.instagram,
    props.facebook,
    props.twitter,
    props.linkedin,
  ];

  return (
    <div className="bg-cyan-50 m-4 dark:bg-[#1F1A24] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center pb-8">
          <img
            className="w-20 h-20 rounded-full mr-4"
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
          <p className="mb-6">{props.desp}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center ">
        <hr className="w-full h-1 bg-gray-300 border-0 rounded-md dark:bg-gray-700 mb-6" />
        <div className="flex flex-row justify-center space-x-6">
          {icons.map((Icon, index) => (
            <a
              key={index}
              href={social[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500  dark:hover:text-blue-800 transition-colors duration-100"
            >
              <Icons key={index} icon={<Icon size="22" />} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;
