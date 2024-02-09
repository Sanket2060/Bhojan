import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HelpUs = () => {
  return (
    <>
      <Navbar />
      {/* Your Help Us page content */}
      <div className="wrapper py-20 px-20">
        <div className=" mx-auto mt-10">
          <p className="text-xl text-gray-700  mb-8">
            Make us keep going by helping us. We are a non-profit organization
            and we need your help to keep this platform running. You can help us
            by donating to us or by volunteering and serving food to various
            people in need.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Welcome to our platform dedicated to reducing food waste and aiding
            those in need. Our site serves as a collaborative hub where
            organizations and volunteers unite to tackle the pressing issue of
            food scarcity. By leveraging technology and community efforts, we
            strive to ensure that excess food finds its way to those who need it
            the most, fostering compassion and reducing waste in the process.
            However, we cannot accomplish this mission alone. We rely on the
            generosity of individuals like you to support our cause. Your
            contribution, whether big or small, can make a significant impact on
            the lives of those facing hunger. If you believe in our mission and
            wish to lend a helping hand, we offer convenient options for
            donating funds. Simply scan the provided QR code or make a direct
            bank transfer to support our initiatives. Every donation counts and
            brings us one step closer to a world where no one goes to bed
            hungry. Join us in making a difference today.
          </p>
          <image></image>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpUs;
