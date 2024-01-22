// TableRow.js
import React from "react";

const TableRow = ({ rank, name, score }) => {
  return (
    <tr>
    <td className="text-white font-bold text-left px-6 py-4">{rank}</td>
    <td className="text-white font-bold text-left px-6 py-4">
      {name}
    </td>

    <td className="text-white font-bold text-left px-6 py-4">{score}</td>
  </tr>
  );
};

export default TableRow;
