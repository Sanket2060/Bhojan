import React from "react";

const LeaderboardRow = ({ rank, name, score }) => {
  return (
    <tr>
      <td className="text-white font-bold text-left px-6 py-4">{rank}</td>
      <td className="text-white font-bold text-left px-6 py-4">{name}</td>
      <td className="text-white font-bold text-left px-6 py-4">{score}</td>
    </tr>
  );
};

const Leaderboard = () => {
  // Sample data for two rows, you can replace it with your actual data
  const data = [
    { rank: 4, name: "Xiomara Domka", score: 1230 },
    { rank: 3, name: "hero", score: 1230 },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-white to-orange-400 p-8 h-screen">
        <div className="flex justify-between mb-8 ">
          <h3 className="mx-auto text-3xl font-bold text-black">LeaderBoard</h3>
        </div>
        {/* Leaderboard Table */}
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
            {data.map((item, index) => (
              <LeaderboardRow key={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
