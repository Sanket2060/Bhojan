import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Partner from "../components/Partner";
import Accomplishment from "../components/Accomplishment";

const LandingPage = () => {
  const partnersData = [
    { companyName: "Company 1", location: "Location 1" },
    { companyName: "Company 2", location: "Location 2" },
    { companyName: "Company 3", location: "Location 3" },
    { companyName: "Company 4", location: "Location 4" },
    { companyName: "Company 5", location: "Location 5" },
    { companyName: "Company 6", location: "Location 6" },
    { companyName: "Company 7", location: "Location 7" },
    { companyName: "Company 8", location: "Location 8" },
    { companyName: "Company 9", location: "Location 9" },
    { companyName: "Company 10", location: "Location 10" },
  ];
  return (
    <>
      <Navbar />
      {
        //<div className="overflow-hidden w-screen">
        //<img
        //  className="absolute top-[-15%] right-[-20%] z-[-10] rounded-tl-[90%]"
        //  src={Image}
        // />
        //</div>
      }

      <div>
        <div className="wrapper pb-20 pt-10 mt-36 mb-20 font-bold text-6xl  flex flex-col items-start ">
          <div className="text-sky-900 ">Share the Flavor,</div>
          <div className="text-rose-400">Multiply the Joy!</div>
        </div>
        <div className="wrapper flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-grow-0 flex-shrink-0 w-full lg:w-1/3 xl:w-1/4">
            <div className="text-3xl text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              iure soluta reprehenderit.
            </div>
          </div>
          <div className="flex flex-col items-center py-20 mx-auto">
            <div className="self-center">
            <Button variant="base" text="Join the Community" />
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-full lg:w-1/3 xl:w-1/4"></div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className=" flex flex-col pb-20 pt-40 font-bold text-6xl relative  bg-green-100  w-[110%]  rounded-tr-[30%] rounded-tl-[50%] lg:rounded-tr-[50%] lg:rounded-tl-[90%]  ">
          <div className="wrapper flex flex-col">
            <div className=" text-sky-900 self-center">
              Nourish joy, donate food,
            </div>
            <div className=" text-rose-400 self-center">share compassion.</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-green-100 pb-20">
        <h2 className="self-center m-10 text-xl  text-sky-400">
          OUR PARTNERS INCLUDE
        </h2>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4 flex flex-row overflow-x-auto ">
            {partnersData.map((partner, index) => (
              <Partner
                key={index}
                companyName={partner.companyName}
                location={partner.location}
              />
            ))}
          </div>
        </div>
      </div>
      <Accomplishment
        totalFoodSaved={30}
        ourCommunity={60}
        totalPeopleServed={90}
      />
      <div className="wrapper p-8">
        <div className="p-20"></div>
        <h2 className="text-5xl font-bold mb-4 ">How it works?</h2>
        <p className="text-lg">
          Welcome to our platform where organizations and volunteers collaborate
          to reduce food waste and help those in need. Here's how it works:
        </p>
        <ol className="text-left mt-4">
          <li className="mb-2">
            <span className="font-bold">Sign Up:</span> Organizations and
            volunteers can easily sign up on our platform to become a part of
            the community.
          </li>
          <li className="mb-2">
            <span className="font-bold">Food Posting:</span> Organizations with
            excess food can post about it on our platform, providing details
            about the available food and pickup location.
          </li>
          <li className="mb-2">
            <span className="font-bold">Booking:</span> Volunteers, orphanages,
            and other non-profit organizations can browse available food
            listings, book the excess food, and schedule a pickup.
          </li>
          <li className="mb-2">
            <span className="font-bold">Pickup:</span> Once booked, the
            volunteer or organization can pick up the excess food for free and
            distribute it to those in need.
          </li>
          <li className="mb-2">
            <span className="font-bold">Leaderboard:</span> We have a
            leaderboard to recognize and appreciate the efforts of those who
            donate the most. It helps build a sense of community and encourages
            more donations.
          </li>
        </ol>
        <p className="text-lg mt-4">
          Join us in the mission to save food from going to waste and make a
          positive impact on the lives of those who need it the most!
        </p>
      </div>

      <div className="relative inset-x-0 bottom-0 w-full h-16 ">
        <div className="pb-20"></div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
