// import React, { useState, useEffect, useRef } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const CompletedDistribution = ({ completedItems }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(completedItems.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = completedItems.slice(startIndex, endIndex);
//   const componentRef = useRef(null);

//   useEffect(() => {
//     if (componentRef.current) {
//       componentRef.current.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
//     }
//   }, [currentPage]);

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
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {itemsToShow.map((item, index) => (
//             <div key={index} className="bg-green-100 p-4 rounded-md shadow-md">
//               <h2 className="text-lg font-medium text-gray-900">
//                 {item && item.title ? (
//                   <>
//                     {item.title}{" "}
//                     <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
//                       {item.plates} Plates
//                     </span>
//                   </>
//                 ) : (
//                   "N/A"
//                 )}
//               </h2>
//               <p className="text-gray-700 mt-2">
//                 <strong>Plates:</strong> {item && item.plates ? item.plates : "N/A"}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Name:</strong>{" "}
//                 {item && item.name ? item.name : "N/A"}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Location:</strong>{" "}
//                 {item && item.location ? item.location : "N/A"}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Number:</strong>{" "}
//                 {item && item.number ? item.number : "N/A"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {completedItems.length > 4 && (
//         <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
//         >
//           <IoIosArrowBack />
//           <span className="hidden sm:inline">Previous Page</span>
//         </button>
//         <span className="text-gray-500">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
//         >
//           <span className="hidden sm:inline">Next Page</span>
//           <IoIosArrowForward />
//         </button>
//       </div>
//       )}
//     </div>
//   );
// };

// export default CompletedDistribution;
