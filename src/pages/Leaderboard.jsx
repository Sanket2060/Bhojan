import React, { useState } from "react";

const Leaderboard = () => {
  const [activeSection, setActiveSection] = useState("organizations");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

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
            <tr>
              <td className="text-white font-bold text-left px-6 py-4">4</td>
              <td className="text-white font-bold text-left px-6 py-4">
                Xiomara Domka
              </td>

              <td className="text-white font-bold text-left px-6 py-4">1230</td>
            </tr>
            <tr>
              <td className="text-white font-bold text-left px-6 py-4">3</td>
              <td className="text-white font-bold text-left px-6 py-4">hero</td>

              <td className="text-white font-bold text-left px-6 py-4">1230</td>
            </tr>
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
            <tr>
              <td className="text-white font-bold text-left px-6 py-4">1</td>
              <td className="text-white font-bold text-left px-6 py-4">
                suresh
              </td>

              <td className="text-white font-bold text-left px-6 py-4">100</td>
            </tr>
            <tr>
              <td className="text-white font-bold text-left px-6 py-4">2</td>
              <td className="text-white font-bold text-left px-6 py-4">hero</td>

              <td className="text-white font-bold text-left px-6 py-4">130</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
