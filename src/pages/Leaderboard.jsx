import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableRow from "../components/TableRow";

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
      const donorDataResponse = await axios.get(
        " https://api.khana.me/api/v1/getData/get-top-donors"
      );
      setDonorData(donorDataResponse.data.data.topTenDonators);

      const distributorDataResponse = await axios.get(
        " https://api.khana.me/api/v1/getData/get-top-distributors"
      );
      console.log("Distributor data response",distributorDataResponse);
      setDistributorData(distributorDataResponse.data.data.topTenDistributors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  dark:bg-[#121212]">
      <Navbar />
      <div className="py-12   px-4 sm:px-6 lg:px-8">
        <div className="wrapper rounded-xl  mb-16 mt-8 mx-auto">
          <div className="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg">
            <div className="border-t dark:border-collapse border-gray-200 dark:border-gray-700">
              <nav className="flex" aria-label="Tabs">
                <button
                  onClick={() => handleSectionChange("organizations")}
                  className={`${
                    activeSection === "organizations"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500"
                  } group relative min-w-0 flex-1 inline-flex items-center justify-center py-4 border-b-4 font-medium text-md transition-colors duration-300`}
                >
                  Organizations
                </button>
                <button
                  onClick={() => handleSectionChange("volunteer")}
                  className={`${
                    activeSection === "volunteer"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-500"
                  } group relative min-w-0 flex-1 inline-flex items-center justify-center py-4 border-b-4 font-medium text-md transition-colors duration-300`}
                >
                  Volunteers
                </button>
              </nav>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-1 sm:px-6"></div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#2A3132] ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-50 uppercase tracking-wider"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-50 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-50 uppercase tracking-wider"
                      >
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeSection === "organizations"
                      ? donorData
                      : distributorData
                    ).map((org, index) => (
                      <TableRow
                        key={index}
                        rank={index + 1}
                        name={org.name}
                        score={parseInt(org.numberOfPeopleFeed) * 5}
                        isDark={index % 2 !== 0} // Alternating row colors
                      />
                    ))}
                    {((activeSection === "organizations" &&
                      donorData.length === 0) ||
                      (activeSection === "volunteer" &&
                        distributorData.length === 0)) && (
                      <tr>
                        <td
                          colSpan="3"
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-slate-700"
                        >
                          No data found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
