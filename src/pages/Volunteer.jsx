import React, { useState, useRef } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
import Accordion from "../components/Accordion.jsx";
import PendingDistributions from "../components/PendingDistributions";
import WelcomeBack from "../components/WelcomeBack.jsx";
//icons
import { MdOutlineDashboard } from "react-icons/md";
import { FiLogOut } from 'react-icons/fi';
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";

// import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  //   const navigate = useNavigate();

  // const handleLogout = () => {
  //   // logout
  //   navigate("/login");
  // };

  const SidebarMenu = [
    { name: "Homepage", link: "/landingpage", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    {
      name: "Volunteer Now",
      link: "/",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "Past Volunteers", link: "/", icon: FiFolder },
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
  const userName = "John";
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "Opportunity 1",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
    {
      title: "Opportunity 2",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
    {
      title: "Opportunity 3",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
    {
      title: "Opportunity 4",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
    {
      title: "Opportunity 5",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
    {
      title: "Opportunity 6",
      location: "pokhara",
      description: "Plates available: 10",
      listedOn: "2024-01-10",
      plates: 10,
    },
  ]);

  const [pendingItems, setPendingItems] = useState([]);

  const handleCancelDistribution = (index) => {
    const canceledItem = pendingItems[index];

    // Move the canceled item back to active listings
    setAccordionItems((prevItems) => [...prevItems, canceledItem]);

    // Remove the item from pending distribution
    setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const pendingListingsRef = useRef(null);

  const handleDistribute = (index) => {
    const selectedOpportunity = accordionItems[index];
    setAccordionItems((prevItems) => prevItems.filter((_, i) => i !== index));

    setPendingItems([...pendingItems, selectedOpportunity]);
    // Scroll to the "Pending Listings" section
    pendingListingsRef.current.scrollIntoView({ behavior: "smooth" });
    handleToggle(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,1fr]">
      
      {/* Sidebar */}

      <Sidebar menus={SidebarMenu} />

      
      <div className="md:col-span-1 justify-center pt-10 m-3">
        <WelcomeBack userName={userName} />
        {pendingItems.length > 0 && (
          <div ref={pendingListingsRef} id="PendingListings" className="mt-10">
            <PendingDistributions
              pendingItems={pendingItems}
              onCancelDistribution={handleCancelDistribution}
            />
          </div>
        )}
      <div className="container col-span-2 mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Active Listings</h1>
          <Accordion items={accordionItems} onDistribute={handleDistribute} />
        </div>
        <div id="Accomplishment" className="justify-center pt-10 w-full">
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

export default Volunteer;
