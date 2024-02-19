import React from "react";

const TableRow = ({ rank, name, score, isDark }) => {
  return (
    <tr
      className={`${
        isDark
          ? "bg-[#A1D6E2] dark:bg-gray-700"
          : "bg-[#F1F1F2] dark:bg-gray-800"
      } transition-colors duration-300  `}
    >
      <td className="px-6 w-1/6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
        {rank}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {name}
      </td>
      <td className="px-6 w-1/6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {score}
      </td>
    </tr>
  );
};

export default TableRow;
