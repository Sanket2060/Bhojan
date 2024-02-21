import React, { useState, useEffect, useRef } from "react";
//components
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
import WelcomeBack from "../components/WelcomeBack.jsx";
import DonorForm from "../components/DonorForm.jsx";
// import PendingDistributions from "../components/PendingDistributions";
import HowToDonate from "../components/HowToDonate";
import DistributionTable from "../components/DistributionTable";

//icons
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// const handleLogout = () => {
//   // logout logic

//   navigate("/login");
// };

const Donor = () => {
  const [isDistribute, setIsDistribute] = useState(false);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [completedListings, setCompletedListings] = useState([]);
  // const logoutUser=()=>{
  //   console.log("Logout is clicked");
  //   // if (userDetails._id){
  //     try {
  //       const response=axios.post('http://localhost:9005/api/v1/users/logout',{
  //         withCredentials: true, // Include credentials (cookies) in the request
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.log("Error:",error);
  //     }
  //   // }
  // }
  //fetch all pending distributions and completed distributions
  useEffect(() => {
    currentActiveListings();
    getAllCompletedOrdersForDonor();
  }, []);
  const getAllCompletedOrdersForDonor = async () => {
    try {
      if (userDetails._id) {
        const response = await axios.post(
          "http://localhost:9005/api/v1/getData/getAllCompletedOrdersForDonor",
          {
            _id: userDetails._id,
          }
        );
        // console.log("Fetched All Completed Orders For Donor successfully",response);
        // console.log(response.data.data.completedOrders);
        setCompletedListings(response.data.data.completedOrders);
        console.log("Fetched all completed orders for donor");
      } else {
        console.log("No user is logged in to give his/her data");
      }
    } catch (error) {
      console.log("Error at getAllCompletedOrdersForDonor ", error);
    }
  };
  useEffect(() => {
    console.log("Completed orders are:", completedListings);
  }, [completedListings]);
  //sidebar
  const SidebarMenu = [
    { name: "Homepage", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/profile", icon: AiOutlineUser },
    {
      name: "Active listings",
      link: "#CompletedDistributions",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "Past listings", link: "", icon: FiFolder },
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
      onClick: async () => {
        try {
          const response = await axios.post(
            "http://localhost:9005/api/v1/users/logout",
            {
              withCredentials: true, // Include credentials (cookies) in the request
            }
          );
          console.log(response);
          // Perform any additional actions after logout
        } catch (error) {
          console.log("Error:", error);
        }
      },
    },
  ];

  const [submittedItems, setSubmittedItems] = useState([]);
  const [formData, setFormData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recentOrderDetails, setRecentOrderDetails] = useState();
  const [activeListings, setActiveListings] = useState([]);

  const handleFormSubmit = async (data) => {
    setFormData(data);
    setFormSubmitted(true);
    //  addOrder();
    // setPendingItems((prevItems) => [...prevItems, data]);
    setSubmittedItems((prevItems) => [...prevItems, data]);

    setisDistribute(true);
  };
  useEffect(() => {
    if (formSubmitted == true) {
      addOrder();
    }
    setFormData(null);
    setFormSubmitted(false);
  }, [formSubmitted]);

  const addOrder = async () => {
    try {
      if (formData) {
        const response = await axios.post(
          "http://localhost:9005/api/v1/order/create-order",
          {
            _id: userDetails._id,
            foodItems: formData.foodItem,
            platesAvailable: formData.quantity,
            closingTime: formData.expirationTime,
            title: formData.title,
          },
          {
            headers: {
              "Content-Type": "application/json", //says data at body is at json format
            },
            withCredentials: true, // Send cookies with the request
          }
        );
        console.log("Order Added succesfully");
        setRecentOrderDetails(response);
      } else {
        console.log("No data recieved for forms");
      }
    } catch (error) {
      console.log("Error at adding order", error);
    }
  };

  const currentActiveListings = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9005/api/v1/order/active-listings-for-donor",
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
      console.log(response.data.data);
      setActiveListings(response.data.data);
      // setActiveListings(response.data);
    } catch (error) {
      console.log("Error at listing active orders", error);
    }
  };

  useEffect(() => {
    currentActiveListings(); //naya order list garesi feri api call garna paryo
  }, [recentOrderDetails]);

  const handleCancelDistribution = (index) => {
    console.log("Cancel button clicked for index", index);
    // Remove the item from pending distribution
    setActiveListings((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  // const handleSubmitAnother = () => {
  //   // Reset to allow another submission
  // setFormData(null);
  // setFormSubmitted(false);
  // };

  const handleComplete = (completedItem) => {
    ///complte ma pathauna lai -->
    // setCompletedListings((prevItems) => [...prevItems, completedItem]);   ?????Sulav ko comment handeko
    //remove from pending dist
    // setActiveListings((prevItems) =>
    //   prevItems.filter((item) => item.id !== completedItem.id)
    // );
  };
  const pendingListingsRef = useRef();
  const completedDistributionRef = useRef();
  const accomplishmentRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
      if (window.innerWidth <= 980) {
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
  const handleToggle = () => {
    setOpen(!open);
  };

  const cancelOrderForDonor = async (_id) => {
    try {
      const response = await axios.post(
        `http://localhost:9005/api/v1/order/cancel-order-for-donor`,
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
    }
  };

  const completeOrderForDonor = async (_id) => {
    try {
      const response = await axios.post(
        `http://localhost:9005/api/v1/order/completed-order-for-donor`,
        {
          _orderId: _id,
        },
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      console.log("Successfully completed order:", response);
      currentActiveListings(); //??? Yo duita lai call garera update garam vanera gareko
      getAllCompletedOrdersForDonor(); //??
      // setTopContributorsData(response.data.data.topTenDonators);
    } catch (error) {
      console.error("Error completing order for donor:", error);
    }
  };

  return (
    <div className="flex dark:bg-[#121212]">
      <div
        className={`w-1/5`}
        style={{ width: isMobile ? " 0px" : open ? "18.7%" : "0%" }}
      >
        <Sidebar
          menus={SidebarMenu}
          handleToggle={handleToggle}
          isOpen={open}
          scrollToActiveListings={() =>
            pendingListingsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToAccomplishment={() =>
            accomplishmentRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToCompletedDistributions={() =>
            completedDistributionRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      </div>
      <div
        className="flex-1"
        style={{ marginLeft: isMobile ? "0px" : open ? "0%" : "2.8%" }}
      >
        <div className="md:col-span-1 justify-center pt-2 ">
          <div className="flex flex-col bg-blue-100 rounded-md p-6 shadow-sm dark:bg-[#1F1A24]">
            <WelcomeBack userName={userDetails.username} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:bg-gray-900">
            <div className="col-span-1">
              <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-1 wrapper gap-4 col-span-2 lg:col-span-1 mb-5">
                <DonorForm
                  onFormSubmit={handleFormSubmit}
                  setIsDistribute={setIsDistribute}
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 md:flex md:items-center md:justify-center">
              <div className="container mx-auto p-8 wrapper relative z-20">
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-75 dark:bg-yellow-700"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-300 rounded-full opacity-75 dark:bg-red-700"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-green-300 rounded-full opacity-75 dark:bg-green-700"></div>
                <HowToDonate
                  isDistribute={isDistribute}
                  // isReserved={isReserved}
                />
              </div>
            </div>
          </div>
          <div id="CompletedDistributions">
            <DistributionTable
              pendingItems={activeListings}
              onCancelDistribution={handleCancelDistribution}
              isDonorPage={true}
              isCompletedTable={false}
              onCompleteProp={handleComplete}
              cancelOrder={cancelOrderForDonor}
              completeOrder={completeOrderForDonor}
            />

            {/* <button
                onClick={handleSubmitAnother}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit Another Listing
              </button> */}
          </div>
          <div id="completedDistribution">
            <DistributionTable
              pendingItems={completedListings}
              onCancelDistribution={handleCancelDistribution}
              isDonorPage={false}
              isCompletedTable={true}
              onCompleteProp={handleComplete}
              cancelOrder={cancelOrderForDonor}
              completeOrder={completeOrderForDonor}
            />
          </div>
          <hr className="w-full h-1 bg-gray-300 border-0 rounded-md dark:bg-gray-700" />
          <div id="Accomplishment">
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
    </div>
  );
};
export default Donor;
