import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HelpUs = () => {
  return (
    <div className="dark:bg-[#121212]">
      <Navbar />
      {/* Your Help Us page content */}
      <div className="wrapper py-20  my-20">
        <div className=" mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Join Our Community
            </span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Our mission is to reduce food waste and help those in need. With
            your support, we can make a meaningful impact on our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HelpCard
              title="Donate Now"
              description="Your generous donations allow us to provide food to individuals and families facing hunger. Every contribution helps us feed more people in need."
              link="/donor"
            />
            <HelpCard
              title="Volunteer with Us"
              description="Join our team of volunteers and help distribute food to those in need. By giving your time and effort, you can make a direct and positive impact in our community."
              link="/volunteer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const HelpCard = ({ title, description, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {description}
      </p>
      <Link
        to={link}
        className="text-lg font-bold text-green-600 dark:text-green-300 hover:underline transition-colors duration-300"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HelpUs;
