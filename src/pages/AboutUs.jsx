// AboutUsPage.js

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "./notsulav.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      description: "Passionate about reducing food waste and making a positive impact, John is the visionary behind our platform. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: Image, // Replace with actual photo URL or path
      social: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
      },
    },
    // Add more team members with similar structure
    // ...
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 p-8 wrapper
      ">
        <h1 className="text-4xl font-semibold mb-8 text-sky-500">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          At our core, we are a team of dedicated individuals working towards the common goal of reducing food waste and making a positive impact. Get to know the people behind the scenes who are passionate about creating a better world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className=" p-6 rounded-md shadow-md text-center  bg-[#93edc0]">
              <div className=" flex overflow-hidden mx-auto mb-4">
                <img
                  src={member.photo}
                  alt={`${member.name}'s Photo`}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="self-center">
                    <h2 className=" pl-5 text-xl font-semibold mb-1 ">{member.name}</h2>
                    <p className="text-gray-700 mb-2">{member.role}</p>
                </div>
                
              </div>
              <hr className="bg-color-black"/>
              
              
              <p className="text-gray-600 mb-4 text-left ">{member.description}</p>
              <div className="flex justify-center space-x-4 bg-gray-100 p-4">
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Twitter
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  LinkedIn
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
