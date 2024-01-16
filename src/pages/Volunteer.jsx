import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
// import Accordion from "../components/Accordion.jsx";
import AccordionItem from "../components/AccordionItem";
import Footer from "../components/Footer";

import PendingDistributions from "../components/PendingDistributions";
import WelcomeBack from "../components/WelcomeBack.jsx";
//icons
import { MdOutlineDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { BiCloud } from "react-icons/bi";
import HowToDistribute from "../components/HowToDistribute";

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
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [AccordionOpen, setAccordionOpen] = useState(false);
  const AhandleToggle = (index) => {
    setAccordionOpen((prevAccordionOpen) => !prevAccordionOpen);
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );

    if (!AccordionOpen) {
      setIsReserved(true);
    } else {
      setIsReserved(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isDistribute, setIsDistribute] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
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
  const [expandedItem, setExpandedItem] = useState(null);

  const [pendingItems, setPendingItems] = useState([]);

  const handleCancelDistribution = (index) => {
    const canceledItem = pendingItems[index];
    // Move the canceled item back to active listings
    setAccordionItems((prevItems) => [...prevItems, canceledItem]);
    // Remove the item from pending distribution
    setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setIsDistribute(false);
  };
  const pendingListingsRef = useRef(null);
  const handleDistribute = (index) => {
    setIsDistribute(true);
    const selectedOpportunity = accordionItems[index];
    setAccordionItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setPendingItems([...pendingItems, selectedOpportunity]);
    // Scroll to the "Pending Listings" section
    pendingListingsRef.current.scrollIntoView({ behavior: "smooth" });
    AhandleToggle(index);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/5`}
        style={{ width: isMobile ? " 0px" : open ? "20%" : "0" }}
      >
        <Sidebar menus={SidebarMenu} />
      </div>
      <div
        className="flex-1"
        style={{ marginLeft: isMobile ? "0px" : open ? "0%" : "0" }}
      >
        <div className="md:col-span-1 justify-center pt-10 m-3">
          <div className=" flex flex-col relative  bg-cyan-100 rounded-tr-[40%] rounded-tl-[50%] lg:rounded-tr-[50%] lg:rounded-tl-[90%]  ">
            <WelcomeBack userName={userName} />
          </div>

          {pendingItems.length > 0 && (
            <div
              ref={pendingListingsRef}
              id="PendingListings"
              className="mt-10"
            >
              <PendingDistributions
                pendingItems={pendingItems}
                onCancelDistribution={handleCancelDistribution}
              />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 ">
              <div className="container mx-auto p-4 wrapper">
                <h1 className="text-3xl font-bold mb-4 text-[#261750] self-center ">
                  Active Listings
                </h1>

                <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-1 wrapper gap-4 col-span-2 lg:col-span-1">
                  {accordionItems.length === 0 ? (
                    <p className="text-gray-500">No active listings.</p>
                  ) : (
                    accordionItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        item={item}
                        index={index}
                        expanded={expandedItem === index}
                        onToggle={AhandleToggle}
                        onDistribute={handleDistribute}
                        ariaControls={`accordion-item-${index}`}
                        ariaExpanded={expandedItem === index}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 md:flex md:items-center md:justify-center  relative">
              {/* Bubbles  */}
              <div className="container mx-auto p-8 wrapper relative z-20">
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gray-300 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gray-300 rounded-full opacity-50"></div>
                <HowToDistribute
                  isDistribute={isDistribute}
                  isReserved={isReserved}
                />
              </div>
            </div>
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
        {/* <div className="mt-10">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Volunteer;
