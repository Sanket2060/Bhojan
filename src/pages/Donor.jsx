import React, { useState, useRef } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment from "../components/Accomplishment.jsx";
import WelcomeBack from "../components/WelcomeBack.jsx";
import DonorForm from "../components/DonorForm.jsx";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// const handleLogout = () => {
//   // logout logic

//   navigate("/login");
// };

const Donor = () => {
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
    { name: "Setting", link: "/", icon: RiSettings4Line, margin: true },
    // ... other custom menus
  ];
  const userName = "John";
  const [isPublished, setIsPublished] = useState(false);

  // const handlePublish = () => {
  //   setIsPublished(true);
  // };
  return (
    <div className="flex">
      <Sidebar menus={SidebarMenu} />
      <div className="flex-1 justify-center pt-10 m-3 ">
        <WelcomeBack userName={userName} />

        <div id="Form" className="justify-center pt-10 w-full">
          <DonorForm/>
        </div>

        <div
          id="Accomplishment"
          className="justify-center pt-10 mb-auto w-full"
        >
          <Accomplishment
            totalFoodSaved={30}
            ourCommunity={60}
            totalPeopleServed={90}
          />
        </div>
      </div>
    </div>
  );
};
export default Donor;
