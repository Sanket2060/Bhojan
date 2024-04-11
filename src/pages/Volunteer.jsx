import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
// import Accordion from "../components/Accordion.jsx";
import AccordionItem from "../components/AccordionItem";
import Footer from "../components/Footer";
import axios from "axios";
// import PendingDistributions from "../components/PendingDistributions";
import WelcomeBack from "../components/WelcomeBack.jsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//icons
import { MdOutlineDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { BiCloud } from "react-icons/bi";
import HowToDistribute from "../components/HowToDistribute";
import { useSelector } from "react-redux";
import DistributionTable from "../components/DistributionTable.jsx";
// import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  //   const navigate = useNavigate();
  const distributeRef = useRef();
  const [distributeRefState, setDistributeRefState] = useState();
  // const handleLogout = () => {
  //   // logout
  //   navigate("/login");
  // };
  const userDetails = useSelector((state) => state.auth.userDetails);
  // const [usersPendingDistribution,setUsersPendingDistributions]=useState([]);

  const accomplishmentRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const SidebarMenu = [
    { name: "Homepage", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/profile", icon: AiOutlineUser },
    {
      name: "Volunteer Now",
      onClick: () => scrollToSection(pendingListingsRef),
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "Past Volunteers", link: "", icon: FiFolder },
    {
      name: "Difference you made",
      link: "#accomplishment",
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

  // const userName = "John";
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
  const [accordionItems, setAccordionItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const [pendingItems, setPendingItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  // const handleCompleteDistribution = (index) => {
  //   const completedItem = pendingItems[index];
  //   // Move the completed item to completed distributions
  //   setCompletedItems((prevItems) => [...prevItems, completedItem]);
  //   // Remove the item from pending distribution
  //   setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
  //   setIsDistribute(false);
  // };
  const handleCancelDistribution = (index) => {
    // Remove the item from pending distribution
    setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setIsDistribute(false);
    // Move the canceled item back to active listings
    const canceledItem = pendingItems[index];
    setAccordionItems((prevItems) => [...prevItems, canceledItem]);
  };
  const pendingListingsRef = useRef(null);
  const handleDistribute = (index) => {
    setIsDistribute(true);
    const selectedOpportunity = accordionItems[index];
    setAccordionItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setPendingItems([...pendingItems, selectedOpportunity]);
    // Scroll to the "Pending Listings" section
    // pendingListingsRef.current.scrollIntoView({ behavior: "smooth" });
    AhandleToggle(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const currentActiveListings = async () => {
    try {
      const response = await axios.get(
        "  https://api.khana.me/api/v1/getData/active-listings",
        {},
        {}
      );
      console.log("Current active listings for user are:", response.data.data);
      setAccordionItems(response.data.data.result);
      // setActiveListings(response.data);
    } catch (error) {
      console.log("Error at listing active orders at donor", error);
    }
  };
  const retainAllData = () => {
    console.log("Retain all data called");
    currentActiveListings();
    getUsersPendingDistributions();
  };

  // distributeRef.current.onClick(retainAllData);

  const getUsersPendingDistributions = async () => {
    try {
      const response = await axios.post(
        "  https://api.khana.me/api/v1/order/pending-listings-for-distributor",
        {
          _id: userDetails._id,
        },
        {
          headers: {
            "Content-Type": "application/json", //says data at body is at json format
          },
          withCredentials: true, // Send cookies with the request
        }
      );
      // console.log(response.data.data.runningOrders);
      console.log("From users pending distribution at volunteer:",response);
      setPendingItems(response.data.data.runningOrders);
      // setAccordionItems(response.data.data.result);
      // setActiveListings(response.data);
    } catch (error) {
      console.log("Error at listing active orders at donor", error);
    }
  };

  useEffect(() => {
    getUsersPendingDistributions();
    currentActiveListings();
  }, []);
  const handleToggle = () => {
    setOpen(!open);
  };

  const cancelOrderForDistributor = async (_id) => {
    try {
      const response = await axios.post(
        `  https://api.khana.me/api/v1/order/cancel-order-for-distributor`,
        {
          _orderId: _id,
        },
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      console.log("Successfully cancelled order:", response);
      // setTopContributorsData(response.data.data.topTenDonators);
    } catch (error) {
      console.error("Error cancelling order for donor:", error);
      toast.warning("Error cancelling order");
    }
  };

  const [searchInput, setSearchInput] = useState("");
  const [filteredAccordionItems, setFilteredAccordionItems] = useState([]);

  return (
    <div className="flex dark:bg-[#121212] min-h-screen">
      <div
        className={`w-1/5`}
        style={{ width: isMobile ? " 0px" : open ? "18.7%" : "0%" }}
      >
        <Sidebar
          menus={SidebarMenu}
          handleToggle={handleToggle}
          isOpen={open}
        />
      </div>
      <div
        className="flex-1"
        style={{ marginLeft: isMobile ? "0px" : open ? "0%" : "2.8%" }}
      >
        <div className="md:col-span-1 justify-center pt-2 overflow-hidden">
        <div className="flex flex-col bg-blue-100 rounded-md p-6 shadow-sm dark:bg-[#1F1A24]">
            <WelcomeBack userName={userDetails.username} />
          </div>

          {pendingItems?.length > 0 && (
            <div
              ref={pendingListingsRef}
              id="PendingListings"
              className="mt-10"
            >
              <DistributionTable
                pendingItems={pendingItems}
                onCancelDistribution={handleCancelDistribution}
                cancelOrder={cancelOrderForDistributor}
              />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 ">
              
              <div className="container px-6">
                <h1 className="text-3xl font-bold mb-4 text-[#261750] dark:text-[#7c58de] self-center text-center ">
                  Active Listings
                </h1>
                <input
                  type="text"
                  id="location"
                  placeholder="Search by Location"
                  // value={locationFilter}
                  // onChange={handleSearchLocation}
                  className="border border-gray-300 dark:border-gray-500 rounded-md py-1 px-2 w-full dark:bg-[#555f71] dark:text-[#ffffff]"
                />
                <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-1 wrapper gap-4 col-span-2 lg:col-span-1 dark:border-[#859896] dark:text-gray-100 ">
                  {accordionItems.length === 0 ? (
                    <p className="text-gray-500">No active listings.</p>
                  ) : (
                    accordionItems
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            expanded={expandedItem === index}
                            onToggle={AhandleToggle}
                            onDistribute={handleDistribute}
                            ariaControls={`accordion-item-${index}`}
                            ariaExpanded={expandedItem === index}
                            getUsersPendingDistributions
                            ref={distributeRef}
                            retainAllData={retainAllData}
                          />
                        </div>
                      ))
                  )}
                  <div>
                    {accordionItems.length > itemsPerPage && (
                      <div className="mt-4 flex items-center justify-between pb-5 px-5">
                        <button
                          className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
                          onClick={() =>
                            setCurrentPage((prevPage) => prevPage - 1)
                          }
                          disabled={currentPage === 1}
                        >
                          <IoIosArrowBack />
                          <span className="hidden sm:inline">
                            Previous Page
                          </span>
                        </button>
                        <span className="text-gray-500">
                          Page {currentPage} of{" "}
                          {Math.ceil(accordionItems.length / itemsPerPage)}
                        </span>
                        <button
                          className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
                          onClick={() =>
                            setCurrentPage((prevPage) => prevPage + 1)
                          }
                          disabled={
                            currentPage ===
                            Math.ceil(accordionItems.length / itemsPerPage)
                          }
                        >
                          <span className="hidden sm:inline">Next Page</span>
                          <IoIosArrowForward />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 md:flex md:items-center md:justify-center relative">
              {/* Bubbles  */}
              <div className="container mx-auto p-8 wrapper relative z-20">
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-75 dark:bg-yellow-700"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-300 rounded-full opacity-75 dark:bg-red-700"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-green-300 rounded-full opacity-75 dark:bg-green-700"></div>
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <HowToDistribute
                    isDistribute={isDistribute}
                    isReserved={isReserved}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="accomplishment" className="justify-center pt-10 w-full">
            <Accomplishment
              totalFoodSaved={500}
              ourCommunity={1}
              totalPeopleServed={800}
              totalFoodSavedText="Total Food Saved"
              ourCommunityText="Ranking"
              totalPeopleServedText="Total People Served"
            />
          </div>
          <div>
            {completedItems?.length > 0 && (
              <div id="CompletedDistributions" className="mt-10">
                <CompletedDistributions completedItems={completedItems} />
              </div>
            )}
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
