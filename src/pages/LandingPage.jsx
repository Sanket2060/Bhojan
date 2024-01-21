import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PartnerSingleBox from "../components/PartnerSingleBox";
import Accomplishment from "../components/Accomplishment";
import FoodDonation from "../assets/FoodDonation.jpg";
import AutoScrollPartners from "../components/PartnerArea";
import LandingpageLeaderboard from "../components/LandingpageLeaderboard";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const topContributorsData = [
    { companyName: "Top Contributor 1", location: "Location 1" },
    { companyName: "Top Contributor 2", location: "Location 2" },
    { companyName: "Top Contributor 3", location: "Location 3" },
  ];
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
        // <div className="overflow-hidden hidden lg:block">
        //   <img
        //     className="absolute top-[-10%] right-[-20%] z-[-10] rounded-tl-[90%]"
        //     src={Image}
        //   />
        // </div>
      }
      <div className="overflow-x-clip hidden lg:block">
        <div className="relative ">
          <img
            className="absolute z-[-10] lg:w-9/12  lg:right-[-25%]  lg:top-[calc(42rem-0.4*100vw)] "
            src={FoodDonation}
          ></img>
        </div>
      </div>
      <div>
        <div className="pt-20 lg:pt-0"></div>
        <div className="wrapper pb-10 pt-10 lg:mt-32 mb-8 md:font-extrabold font-bold lg:text-7xl md:text-6xl text-5xl flex flex-col items-start ">
          <div className="text-[#261750] ">Share the Flavor,</div>
          <div className="text-[#ff4c70]">Multiply the Joy!</div>
        </div>
        <div className="overflow-x-clip lg:hidden ">
          <img className="z-[-10]  " src={FoodDonation}></img>
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
              <Link to="./signup">
                <Button
                  //onClick={}
                  variant="base"
                  text="Join the Community"
                />
              </Link>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-full lg:w-1/3 xl:w-1/4"></div>
        </div>
      </div>

      <div className="flex overflow-hidden">
        <div className=" flex flex-col pb-20 pt-32 md:font-extrabold font-bold lg:text-7xl md:text-6xl  text-4xl  relative  bg-gray-100  w-[200%]  rounded-tr-[40%]   rounded-tl-[50%] lg:rounded-tr-[50%] lg:rounded-tl-[90%]  ">
          <div className="mx-auto text-[#261750] self-center ">
            Donate food,
          </div>
          <div className="mx-auto text-[#ff4c70] self-center">
            share compassion.
          </div>
        </div>
      </div>

      <LandingpageLeaderboard topContributors={topContributorsData} />
      <div className="p-20 bg-gray-100"></div>
      <Accomplishment
        totalFoodSaved={500}
        ourCommunity={200}
        totalPeopleServed={800}
        totalFoodSavedText="Total Food Saved"
        ourCommunityText="Our Community"
        totalPeopleServedText="Total People Served"
      />
      <div className="flex flex-col bg-gray-100  pb-10 ">
        <div className="wrapper pb-10 mt-28 lg:mt-32 mb-8 md:font-extrabold font-bold lg:text-7xl md:text-6xl text-5xl flex flex-col items-start">
          <div className="text-[#261750]">Our Partners</div>
          <div className="text-[#ff4c70]">Across Nepal</div>
        </div>

        <AutoScrollPartners />
      </div>

      <div className="overflow-hidden">
        <div className=" flex flex-col  pt-0 h-[8rem] font-bold text-6xl relative  bg-gray-100   w-[100%]  rounded-br-[55%] rounded-bl-[35%] lg:rounded-br-[95%] lg:rounded-bl-[65%]  "></div>
      </div>

      <div className="wrapper p-8">
        <div>
          <div className="pb-12"></div>
          <h2 className="text-5xl font-semibold mb-4 text-[#ff4c70]">
            How it Works
          </h2>
          <p className="text-xl text-gray-700">
            Welcome to our platform where organizations and volunteers
            collaborate to reduce food waste and help those in need. Here's how
            it works:
          </p>
          <ol className="text-left mt-6 list-decimal ml-4 text-lg">
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Sign Up:</span>{" "}
              Organizations and volunteers can easily sign up on our platform to
              become a part of the community.
            </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">
                Food Posting:
              </span>{" "}
              Organizations with excess food can post about it on our platform,
              providing details about the available food and pickup location.
            </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Booking:</span>{" "}
              Volunteers, orphanages, and other non-profit organizations can
              browse available food listings, book the excess food, and schedule
              a pickup.
            </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Pickup:</span> Once
              booked, the volunteer or organization can pick up the excess food
              for free and distribute it to those in need.
            </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Leaderboard:</span>{" "}
              We have a leaderboard to recognize and appreciate the efforts of
              those who donate the most. It helps build a sense of community and
              encourages more donations.
            </li>
          </ol>
          <p className=" mt-6 text-gray-700 text-xl">
            Join us in the mission to save food from going to waste and make a
            positive impact on the lives of those who need it the most!
          </p>
        </div>
      </div>
      <div className="relative inset-x-0 bottom-0 w-full h-16 ">
        <div className="pb-20"></div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
