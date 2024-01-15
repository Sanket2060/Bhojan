import React, { useState, useRef } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
// import Accordion from "../components/Accordion.jsx";
import PendingDistributions from "../components/PendingDistributions";
import WelcomeBack from "../components/WelcomeBack";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
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
  const ActiveListings = [
    { companyName: "Contributor 1", location: "Location 1" },
    { companyName: "Contributor 2", location: "Location 2" },
    { companyName: "Contributor 3", location: "Location 3" },
  ];
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
    setPendingItems([...pendingItems, distributedItem]);
    
    // Scroll to the "Pending Listings" section
    pendingListingsRef.current.scrollIntoView({ behavior: "smooth" });
    handleToggle(index);
    const distributedItem = {
      ...selectedOpportunity,
      distributedBy: userName,
      distributionTime: new Date().toLocaleString(),
    };
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
          <h1 className="md:font-extrabold font-bold lg:text-3xl md:text-2xl  text-xl  relative  mx-auto text-[#261750] self-center ">Active Listings</h1>
          <Listing ActiveListings={ActiveListings} />
          {/* <Accordion items={accordionItems} onDistribute={handleDistribute} /> */}
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
           <div>
        <div className="pb-12"></div>
          <h2 className="text-5xl font-semibold mb-4 text-[#ff4c70]">
            How it Works
          </h2>
          <p className="text-xl text-gray-700">
            How To Distribute:
            </p>
          <ol className="text-left mt-6 list-decimal ml-4 text-lg">
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Book:</span>{" "}
              Expand the food item you want to distribute. The item will be reserved for you for 5 minutes once you open. Failing to confirm will lead to ban on item
            </li>
            <li className="mb-3">
              <span className="font-semibold text-[#261750]">Confirm:</span> Once
              booked, contact the distributer and click on "i'll Distribute" 
            </li>
          <li className="mb-3">
            <span className="font-semibold text-[#261750]">Deliver:</span>{" "}
            pick up the excess food from given location
              and distribute it to those in need.
          </li>
        </ol>
        <p className=" mt-6 text-gray-700 text-xl">
          Join us in the mission to save food from going to waste and make a
          positive impact on the lives of those who need it the most!
        </p>
        
        </div>
        <div className="relative inset-x-0 bottom-0 w-full h-16 ">
        <div className="pb-20"></div>
        <Footer />
      </div>
        </div>
       
      </div>
    </div>
  );
};

export default Volunteer;
