import React, { useEffect, useState } from "react";
import TableRow from '../components/TableRow'
import axios from "axios";
const Leaderboard = () => {
  const [activeSection, setActiveSection] = useState("organizations");
  const [donorData,setDonorData]=useState([]);
  const [distributorData,setDistributorData]=useState([]);
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  useEffect(()=>{
    getLeaderboardData();
  },[])
  const getLeaderboardData=async()=>{
    try {
      const donorData = await axios.get('http://localhost:9005/api/v1/getData/get-top-donors', 
      );
      setDonorData(donorData.data.data.topTenDonators);
      console.log(donorData.data.data.topTenDonators);
      const distributorData=await axios.get('http://localhost:9005/api/v1/getData/get-top-distributors', 
      );
      setDistributorData(distributorData.data.data.topTenDistributors);
      console.log(distributorData.data.data.topTenDistributors);
    } catch (error) {
      console.log(error);
      // console.log("Error:",error.response.data.message);
    }
  }
  

  return (
    <div className="bg-gradient-to-b from-white to-orange-400 p-8 h-screen">
      <div className="flex justify-between mb-8">
        <h3 className="mx-auto text-3xl font-bold text-black">LeaderBoard</h3>
      </div>
      <header>
        <nav className="rounded-lg overflow-hidden transition duration-300 ease-in-out shadow-xl w-full h-10 mb-3">
          <div className="font-[Poppins] font-bold">
            <ul className="flex justify-center gap-[4vw]">
              <li
                className={`ml-10 flex-none n7 mr2 relative transition duration-300 ease-in-out hover:bg-gray-700 xl rounded-lg ${
                  activeSection === "organizations" ? "bg-gray-700" : ""
                }`}
              >
                <a
                  href="#"
                  className="block px-4 py-2"
                  onClick={() => handleSectionChange("organizations")}
                >
                  Organizations
                </a>
              </li>
              <li
                className={`flex items-center relative transition duration-300 ease-in-out hover:bg-gray-700 xl rounded-lg ${
                  activeSection === "volunteer" ? "bg-gray-700" : ""
                }`}
              >
                <a
                  href="#"
                  className="block px-4 py-2"
                  onClick={() => handleSectionChange("volunteer")}
                >
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {activeSection === "organizations" && (
        <table className="bg-gray-900 rounded-lg overflow-hidden w-full">
          <thead>
            <tr>
              <th className="text-white font-bold text-left px-6 py-4">#</th>
              <th className="text-white font-bold text-left px-6 py-4">Name</th>
              <th className="text-white font-bold text-left px-6 py-4">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
          {donorData && donorData.length>0 ?
            donorData.map((org,index)=>
              (
                <>
               <TableRow rank={index+1} name={org.name} score={parseInt(org.numberOfPeopleFeed)*5} />
                </>
              )   
            )
          :
          <h1>Loading...</h1>
          }
            
          </tbody>
        </table>
      )}

      {activeSection === "volunteer" && (
        <table className="bg-gray-900 rounded-lg overflow-hidden w-full">
          <thead>
            <tr>
              <th className="text-white font-bold text-left px-6 py-4">#</th>
              <th className="text-white font-bold text-left px-6 py-4">Name</th>
              <th className="text-white font-bold text-left px-6 py-4">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
          {distributorData && distributorData.length>0?
            distributorData.map((org,index)=>
              (
                <>
               <TableRow rank={index+1} name={org.name} score={parseInt(org.numberOfPeopleFeed)*5} />
                </>
              )   
            )
          :
          <tr>
            <td colSpan="3" className="text-white">Loading...</td>
          </tr>        
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
