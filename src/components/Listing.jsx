
// //template(idea) for (if images are used)
// //flawed (diffuculty in implementing timer w/o accordion)

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Confirmation from "./Confirmation"; 

// const Listing = ({ items, onDistributeClick }) => {
//   const [confirmationOpen, setConfirmationOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleDistributeClick = (item) => {
//     setSelectedItem(item);
//     setConfirmationOpen(true);
//   };

//   const handleConfirmationClose = () => {
//     setConfirmationOpen(false);
//     setSelectedItem(null);
//   };

//   const handleConfirmationConfirm = () => {
//     onDistributeClick(selectedItem);
//     handleConfirmationClose();
//   };

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index} className="flex flex-col md:flex-row my-8 relative">
//           <div
//             className={`${
//               index % 2 === 0 ? "border-r border-gray-300" : "border-l border-gray-300"
//             } absolute h-full top-0 left-1/2 transform -translate-x-1/2`}
//           ></div>

//           <div className={`md:w-1/2 ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"} bg-gray-100 p-4`}>
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-auto"
//             />
//             <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
//             <p className="text-gray-700">{item.description}</p>
//             <p className="text-gray-700">Location: {item.location}</p>
//             <p className="text-gray-700">Listed On: {item.listedOn}</p>
//             <p className="text-gray-700">Plates: {item.plates}</p>
//           </div>

//           {/* "I'll distribute" button at the bottom */}
//           <button
//             onClick={() => handleDistributeClick(item)}
//             className="bg-blue-500 text-white px-4 py-2 mt-4 w-full md:w-auto"
//           >
//             I'll distribute
//           </button>
//         </div>
//       ))}

//       {/* Confirmation dialog */}
//       <Confirmation
//         isOpen={confirmationOpen}
//         onClose={handleConfirmationClose}
//         onConfirm={handleConfirmationConfirm}
//         message="Are you sure you want to distribute this item?"
//       />
//     </div>
//   );
// };

// Listing.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       listedOn: PropTypes.string.isRequired,
//       plates: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDistributeClick: PropTypes.func.isRequired,
// };

// export default Listing;
