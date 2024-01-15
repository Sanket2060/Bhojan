import React, { useState, useRef } from "react";
//components
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
import WelcomeBack from "../components/WelcomeBack.jsx";
import DonorForm from "../components/DonorForm.jsx";
import PendingDistributions from "../components/PendingDistributions";
import Footer from "../components/Footer";

//icons
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi';
import { FiFolder } from "react-icons/fi";

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// const handleLogout = () => {
//   // logout logic

//   navigate("/login");
// };

const Donor = () => {

  //sidebar
  const SidebarMenu = [
    { name: "Homepage", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    {
      name: "Active listings",
      link: "/",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "Past listings", link: "/", icon: FiFolder },
    {
      name: "Difference you made",
      link: "/#Accomplishment",
      icon: AiOutlineHeart,
      margin: true,
    },
    {
      name: "Logout",
      link: "/",
      icon: FiLogOut,
      margin: true,
    },
  ];

  //welcome back ___ (username)
  const userName = "John";
  const [pendingItems, setPendingItems] = useState([]);
  const [submittedItems, setSubmittedItems] = useState([]);
  const [formData, setFormData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmit = (data) => {
    setFormData(data);
    setFormSubmitted(true);
    setPendingItems((prevItems) => [...prevItems, data]);
    setSubmittedItems((prevItems) => [...prevItems, data]);
  };
  const handleCancelDistribution = (index) => {
    const canceledItem = pendingItems[index];

    // Move the canceled item back to active listings
    // setAccordionItems((prevItems) => [...prevItems, canceledItem]);

    // Remove the item from pending distribution
    setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setFormData(null);
    setFormSubmitted(false);
  };
  const handleSubmitAnother = () => {
    // Reset to allow another submission
    setFormData(null);
    setFormSubmitted(false);
  };
  
  return (
    <div className="flex">
      <Sidebar menus={SidebarMenu} />
      <div className="flex-1 justify-center pt-10 m-3 ">
        <WelcomeBack userName={userName} />

          <div id="Form" className="justify-center pt-10 w-full">
          {!formSubmitted ? (
            <DonorForm onFormSubmit={handleFormSubmit} />
          ) : (
            <div>
              <PendingDistributions
                pendingItems={[formData, ...submittedItems]}
                onCancelDistribution={handleCancelDistribution}
              />
              <button
                onClick={handleSubmitAnother}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit Another Listing
              </button>
            </div>
          )}
        </div>
        <div
          id="Accomplishment"
          className="justify-center pt-10 mb-auto w-full"
        >
          <Accomplishment
            totalFoodSaved={500}
            ourCommunity={1}
            totalPeopleServed={800}
            totalFoodSavedText="Total Food Saved"
            ourCommunityText="Ranking"
            totalPeopleServedText="Total People Served"
          />
           <div>
        <div className="pb-12"></div>
          <h2 className="text-5xl font-semibold mb-4 text-[#ff4c70]">
            How it Works
          </h2>
          <p className="text-xl text-gray-700">
            How To Donate:
            </p>
          <ol className="text-left mt-6 list-decimal ml-4 text-lg">
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Place Listing:</span>{" "}
              Fill the distribution form, and click on "Post Listing"
              </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Confirm:</span>
              Interested Volunteer will contact you form confirmation
            </li>
          <li className="mb-3">
            <span className="font-semibold text-[#261750]">Give Away:</span>{" "}
            Volunteer will pick up the excess food from your location
              and distribute it to those in need.
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
      </div>
     
    </div>
    
  );
};
export default Donor;
