import React, { useState, useRef } from "react";
//components
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
import WelcomeBack from "../components/WelcomeBack.jsx";
import DonorForm from "../components/DonorForm.jsx";
import PendingDistributions from "../components/PendingDistributions";

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
        </div>
      </div>
    </div>
  );
};
export default Donor;
