// chaiyenaaaa
// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const CompletedDistribution = ({ completedItems }) => {
//   const [isConfirmationOpen, setConfirmationOpen] = useState(false);
//   const [selectedItemIndex, setSelectedItemIndex] = useState(null);
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(completedItems.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = completedItems.slice(startIndex, endIndex);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4 dark:text-gray-200">
//         Completed Distributions
//       </h1>
//       {itemsToShow && itemsToShow.length === 0 ? (
//         <p className="text-gray-500 ">No completed distributions.</p>
//       ) : (
//         <table className="min-w-full border border-gray-300 shadow-sm">
//           <thead className="bg-green-100">
//             <tr>
//               <th className="py-2 px-4 text-left">Title</th>
//               <th className="py-2 px-4 text-left">Plates</th>
//               <th className="py-2 px-4 text-left">Name</th>
//               <th className="py-2 px-4 text-left">Location</th>
//               <th className="py-2 px-4 text-left">Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {itemsToShow.map((item, index) => (
//               <tr key={index} className="bg-green-100">
//                 <td className="py-3 px-4 text-lg font-medium text-gray-900">
//                   {item && item.title ? ( // Add a conditional check
//                     <>
//                       {item.title}{" "}
//                       <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
//                         {item.plates} Plates
//                       </span>
//                     </>
//                   ) : (
//                     "N/A" 
//                   )}
//                 </td>
//                 <td className="py-3 px-4">
//                   {item && item.plates ? item.plates : "N/A"}
//                 </td>
//                 <td className="py-3 px-4 dark:text-gray-200">
//                   {item && item.name ? item.name : "N/A"}
//                 </td>
//                 <td className="py-3 px-4 dark:text-gray-200">
//                   {item && item.location ? item.location : "N/A"}
//                 </td>
//                 <td className="py-3 px-4 dark:text-gray-200">
//                   {item && item.number ? item.number : "N/A"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {completedItems.length > 4 && (
//        <div className="mt-4 flex items-center justify-between">
//        <button
//          onClick={() => handlePageChange(currentPage - 1)}
//          disabled={currentPage === 1}
//          className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
//        >
//          <IoIosArrowBack />
//          <span>Previous Page</span>
//        </button>
//        <span className="text-gray-500">
//          Page {currentPage} of {totalPages}
//        </span>
//        <button
//          onClick={() => handlePageChange(currentPage + 1)}
//          disabled={currentPage === totalPages}
//          className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
//        >
//          <span>Next Page</span>
//          <IoIosArrowForward />
//        </button>
//      </div>
//       )}
//     </div>
//   );
// };

// export default CompletedDistribution;
