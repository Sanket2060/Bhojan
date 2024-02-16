import React, { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Leaderboard = () => {
  const [activeSection, setActiveSection] = useState("organizations");
  const [donorData, setDonorData] = useState([]);
  const [distributorData, setDistributorData] = useState([]);
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  useEffect(() => {
    getLeaderboardData();
  }, []);
  const getLeaderboardData = async () => {
    try {
      const donorData = await axios.get(
        "http://localhost:9005/api/v1/getData/get-top-donors"
      );
      setDonorData(donorData.data.data.topTenDonators);
      console.log(donorData.data.data.topTenDonators);
      const distributorData = await axios.get(
        "http://localhost:9005/api/v1/getData/get-top-distributors"
      );
      setDistributorData(distributorData.data.data.topTenDistributors);
      console.log(distributorData.data.data.topTenDistributors);
    } catch (error) {
      console.log(error);
      // console.log("Error:",error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white to-orange-400 p-8 pt-20 dark:bg-[#121212]">
        <header>
          <nav className="rounded-lg overflow-hidden transition duration-300 ease-in-out shadow-xl w-full h-10 mb-3">
            <div className="font-[Poppins] font-bold">
              <ul className="flex justify-center gap-[4vw]">
                <li
                  className={`text-xl flex-none  relative transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white xl rounded-lg ${
                    activeSection === "organizations"
                      ? "bg-gray-700 text-white"
                      : "dark:text-white"
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
                  className={`flex text-xl items-center relative transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white xl rounded-lg ${
                    activeSection === "volunteer"
                      ? "bg-gray-700 text-white "
                      : "dark:text-white"
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
                <th className="text-white font-bold text-left px-6 py-4 w-2/12">
                  #
                </th>
                <th className="text-white font-bold text-left px-6 py-4 w-8/12">
                  Name
                </th>
                <th className="text-white font-bold text-left px-6 py-4 w-2/12">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {donorData && donorData.length > 0 ? (
                donorData.map((org, index) => (
                  <>
                    <TableRow
                      rank={index + 1}
                      name={org.name}
                      score={parseInt(org.numberOfPeopleFeed) * 5}
                    />
                  </>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-white p-4 ">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {activeSection === "volunteer" && (
          <table className="bg-gray-900 rounded-lg overflow-hidden w-full">
            <thead>
              <tr>
                <th className="text-white font-bold text-left px-6 py-4 w-2/12">
                  #
                </th>
                <th className="text-white font-bold text-left px-6 py-4 w-8/12">
                  Name
                </th>
                <th className="text-white font-bold text-left px-6 py-4 w-2/12">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {distributorData && distributorData.length > 0 ? (
                distributorData.map((org, index) => (
                  <>
                    <TableRow
                      rank={index + 1}
                      name={org.name}
                      score={parseInt(org.numberOfPeopleFeed) * 5}
                    />
                  </>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-white p-4 ">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="pt-20 dark:bg-[#121212]">
        <Footer />
      </div>
    </div>
  );
};

export default Leaderboard;
