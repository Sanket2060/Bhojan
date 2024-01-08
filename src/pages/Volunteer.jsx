import { Sidebar } from "../components/Sidebar.jsx";
import  Accomplishment  from "../components/Accomplishment.jsx";
import Accordion from '../components/Accordion.jsx';
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";

const Volunteer = () => {
  const SidebarMenu = [
    { name: "Homepage", link: "/", icon: MdOutlineDashboard },
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
    { name: "Setting", link: "/", icon: RiSettings4Line, margin: true }
    
    
    // ... other custom menus
  ];
  const accordionItems = [
    {
      title: 'Opportunity 1',
      content: 'Details about opportunity 1.',
      description: 'Plates available: 10',
      listedOn: '2024-01-10',
    },
    {
      title: 'Opportunity 2',
      content: 'Details about opportunity 2.',
      description: 'Plates available: 15',
      listedOn: '2024-01-11',
    },
    {
      title: 'Opportunity 3',
      content: 'Details about opportunity 3.',
      description: 'Plates available: 8',
      listedOn: '2024-01-12',
    },
    {
      title: 'Opportunity 4',
      content: 'Details about opportunity 3.',
      description: 'Plates available: 8',
      listedOn: '2024-01-12',
    }, {
      title: 'Opportunity 5',
      content: 'Details about opportunity 3.',
      description: 'Plates available: 8',
      listedOn: '2024-01-12',
    }, {
      title: 'Opportunity 6',
      content: 'Details about opportunity 3.',
      description: 'Plates available: 8',
      listedOn: '2024-01-12',
    },
    // Add more opportunities
  ];
  

  return (
    <div>
      <section className="flex flex-end">
        <div>

            <Sidebar menus={SidebarMenu} />
        </div>

        <div className="justify-center pt-10 m-3 ">
          <h1 className="mb-4 font-extrabold leading-none tracking-tight text-4xl md:text-3xl text-shadow-lg text-center">
            WELCOME BACK, SULAV
          </h1>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Active Listings</h1>
            <Accordion items={accordionItems} />
          </div>
          <div id="Accomplishment"
          className="justify-center pt-10 w-full"
        >
          
          <Accomplishment />

        </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
