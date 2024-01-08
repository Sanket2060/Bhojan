import { Sidebar } from "../components/Sidebar.jsx";
import Accomplishment  from "../components/Accomplishment.jsx";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
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
  return (
    <div>
      <section className="flex flex-end">
        <div>
        <Sidebar menus={SidebarMenu} />
        </div>
        <div id="Accomplishment"
          className="justify-center pt-10 w-full"
        >
          <Accomplishment />
        </div>
      </section>
    </div>
  );
}
export default Donor;
